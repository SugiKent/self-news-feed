const fetch = require('node-fetch');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type WatchedRepo implements Node {
      name: String!
      description: String
      url: String!
    }
  `;
  createTypes(typeDefs);
};

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;
  
  const response = await fetch('https://api.github.com/user/subscriptions', {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    }
  });
  const repos = await response.json();

  repos
    .filter(repo => !repo.private)
    .forEach(repo => {
      createNode({
        name: repo.full_name,
        description: repo.description,
        url: repo.html_url,
        id: createNodeId(`repo-${repo.id}`),
        internal: {
          type: 'WatchedRepo',
          contentDigest: createContentDigest(repo),
        },
      });
    });
};