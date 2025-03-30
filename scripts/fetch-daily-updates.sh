#!/bin/bash

# 設定
OUTPUT_JSON="self-news-feed/src/data/daily_updates.json"
LOG_FILE="/tmp/github_daily_updates.log"
SINCE=$(date -u -d "24 hours ago" +"%Y-%m-%dT%H:%M:%SZ")

# ログ初期化
echo "=== GitHub Daily Updates ===" > $LOG_FILE
echo "Timestamp: $(date)" >> $LOG_FILE
echo "Collecting data since: $SINCE" >> $LOG_FILE

# 1. 通知からリポジトリリスト取得
echo -e "\n=== Fetching Watched Repositories ===" >> $LOG_FILE
REPOS=$(curl -s -H "Authorization: Bearer ${GITHUB_TOKEN}" \
  "https://api.github.com/notifications?all=true&per_page=100" | \
  jq -r '.[].repository.full_name' | sort -u)

echo "Watched repositories:" >> $LOG_FILE
echo "$REPOS" >> $LOG_FILE

# 2. 各リポジトリの活動収集
RESULT="[]"
for repo in $REPOS; do
  echo -e "\nProcessing $repo..." >> $LOG_FILE
  
  # 過去1日のリリース
  RELEASES=$(curl -s -H "Authorization: Bearer ${GITHUB_TOKEN}" \
    "https://api.github.com/repos/$repo/releases" | \
    jq --arg since "$SINCE" --arg repo "$repo" '
      [.[] | select(.published_at >= $since) | {
        type: "release",
        repo: $repo,
        title: .name,
        tag: .tag_name,
        date: .published_at,
        url: .html_url,
        summary: (.body | split("\n")[0] | if length > 0 then . else "No description" end)
      }]')
  
  echo "Found $(echo "$RELEASES" | jq 'length') new releases" >> $LOG_FILE

  # 過去1日の活発なPR（コメント3件以上）
  PULLS=$(curl -s -H "Authorization: Bearer ${GITHUB_TOKEN}" \
    "https://api.github.com/repos/$repo/pulls?state=all&sort=updated&direction=desc&per_page=10" | \
    jq --arg since "$SINCE" --arg repo "$repo" '
      [.[] | select(.updated_at >= $since and .comments >= 3) | {
        type: "pull_request",
        repo: $repo,
        title: .title,
        author: .user.login,
        comments: .comments,
        date: .updated_at,
        state: .state,
        url: .html_url
      }]')
  
  echo "Found $(echo "$PULLS" | jq 'length') active PRs" >> $LOG_FILE

  # 結果をマージ
  REPO_DATA=$(echo "$RELEASES $PULLS" | jq -s 'add')
  RESULT=$(echo "$RESULT" | jq --argjson data "$REPO_DATA" '. + $data')
done

# 3. 結果保存
echo "$RESULT" | jq 'sort_by(.date) | reverse' > $OUTPUT_JSON
echo -e "\n=== Final Result ===" >> $LOG_FILE
echo "Total activities: $(echo "$RESULT" | jq 'length')" >> $LOG_FILE
echo "Output saved to $OUTPUT_JSON" >> $LOG_FILE

# ログ表示
echo -e "\n=== Execution Summary ==="
echo "Full log: $LOG_FILE"
echo "Results: $OUTPUT_JSON"
head -20 $LOG_FILE