#!/bin/bash

curl -s -H "Authorization: Bearer ${GITHUB_TOKEN}" \
  "https://api.github.com/user/subscriptions" | \
  jq '[.[] | select(.private == false) | {name: .full_name, description: .description, url: .html_url}]' > \
  self-news-feed/src/data/repos.json