
import * as pluginGatsbyNode0 from "../node_modules/gatsby-plugin-image/gatsby-node"
import * as pluginGatsbyNode1 from "../node_modules/gatsby-source-filesystem/gatsby-node"
import * as pluginGatsbyNode2 from "../node_modules/gatsby-transformer-sharp/gatsby-node"
import * as pluginGatsbyNode3 from "../node_modules/gatsby-plugin-sharp/gatsby-node"
import * as pluginGatsbyNode4 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode5 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode6 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode7 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode8 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode9 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode10 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode11 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode12 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode13 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode14 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode15 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode16 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyWorker0 from "../node_modules/gatsby-plugin-sharp/gatsby-worker"

export const gatsbyNodes = [
{ name: "gatsby-plugin-image", module: pluginGatsbyNode0, importKey: 1 },
{ name: "gatsby-source-filesystem", module: pluginGatsbyNode1, importKey: 2 },
{ name: "gatsby-transformer-sharp", module: pluginGatsbyNode2, importKey: 3 },
{ name: "gatsby-plugin-sharp", module: pluginGatsbyNode3, importKey: 4 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode4, importKey: 5 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode5, importKey: 6 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode6, importKey: 7 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode7, importKey: 8 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode8, importKey: 9 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode9, importKey: 10 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode10, importKey: 11 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode11, importKey: 12 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode12, importKey: 13 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode13, importKey: 14 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode14, importKey: 15 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode15, importKey: 16 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode16, importKey: 17 },
]

export const gatsbyWorkers = [
{ name: "gatsby-plugin-sharp", module: pluginGatsbyWorker0, importKey: 1 },
]

export const flattenedPlugins =
  [
  {
    "resolve": "",
    "id": "a9f9c4c1-d74b-569b-a6ec-6093f5d12592",
    "name": "gatsby-plugin-image",
    "version": "3.14.0",
    "pluginOptions": {
      "plugins": []
    },
    "nodeAPIs": [
      "createSchemaCustomization",
      "onCreateBabelConfig",
      "onCreateWebpackConfig",
      "preprocessSource"
    ],
    "browserAPIs": [],
    "ssrAPIs": [
      "onRenderBody"
    ],
    "pluginFilepath": "",
    "importKey": 1
  },
  {
    "resolve": "",
    "id": "1e220284-4dc8-5a4b-8de7-dc9df0952a86",
    "name": "gatsby-source-filesystem",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "name": "images",
      "path": "/workspace/self-news-feed/gatsby-base/src/images",
      "fastHash": false
    },
    "nodeAPIs": [
      "onPreInit",
      "pluginOptionsSchema",
      "sourceNodes",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 2
  },
  {
    "resolve": "",
    "id": "822bdf7b-a95a-5885-9351-158705910ac3",
    "name": "gatsby-transformer-sharp",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": []
    },
    "nodeAPIs": [
      "onPreInit",
      "onCreateNode",
      "shouldOnCreateNode",
      "createSchemaCustomization",
      "createResolvers"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 3
  },
  {
    "resolve": "",
    "id": "9e618b1c-a2d0-52b1-86ab-f91016f37381",
    "name": "gatsby-plugin-sharp",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "base64Width": 20,
      "stripMetadata": true,
      "defaultQuality": 50,
      "failOnError": true,
      "failOn": "warning"
    },
    "nodeAPIs": [
      "onCreateDevServer",
      "onPostBootstrap",
      "onPluginInit",
      "onPreBootstrap",
      "pluginOptionsSchema"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 4
  },
  {
    "resolve": "",
    "id": "7d868293-f507-50f0-9b90-f6ea2ec58805",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspace/self-news-feed/gatsby-base/node_modules/gatsby/dist/internal-plugins/dev-404-page/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 5
  },
  {
    "resolve": "",
    "id": "581337e5-c8d5-522c-8d78-ddafb7f3bc10",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspace/self-news-feed/gatsby-base/node_modules/gatsby/dist/internal-plugins/load-babel-config/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 6
  },
  {
    "resolve": "",
    "id": "a72880b3-3ea2-5b1e-a67a-e6fef332016c",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspace/self-news-feed/gatsby-base/node_modules/gatsby/dist/internal-plugins/internal-data-bridge/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 7
  },
  {
    "resolve": "",
    "id": "b8401ae7-657a-5f5a-91b6-8d789ffddea6",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspace/self-news-feed/gatsby-base/node_modules/gatsby/dist/internal-plugins/prod-404-500/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 8
  },
  {
    "resolve": "",
    "id": "02794663-cc92-50c2-9008-e0babb084abe",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspace/self-news-feed/gatsby-base/node_modules/gatsby/dist/internal-plugins/webpack-theme-component-shadowing/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 9
  },
  {
    "resolve": "",
    "id": "b4a77ba0-e1c8-5989-b568-cdc03bd89c53",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspace/self-news-feed/gatsby-base/node_modules/gatsby/dist/internal-plugins/bundle-optimisations/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 10
  },
  {
    "resolve": "",
    "id": "69d6ecda-8eda-5079-a8a0-336e3db877f4",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspace/self-news-feed/gatsby-base/node_modules/gatsby/dist/internal-plugins/functions/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 11
  },
  {
    "resolve": "",
    "id": "eb6deb50-35be-552d-862f-5e8ddf65ed09",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspace/self-news-feed/gatsby-base/node_modules/gatsby-plugin-image/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 12
  },
  {
    "resolve": "",
    "id": "a3aaf3de-52c4-5400-9e9f-6aee69345ac6",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspace/self-news-feed/gatsby-base/node_modules/gatsby-source-filesystem/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 13
  },
  {
    "resolve": "",
    "id": "29ae55a5-89f9-5b85-8a04-1caf7d937c03",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspace/self-news-feed/gatsby-base/node_modules/gatsby-transformer-sharp/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 14
  },
  {
    "resolve": "",
    "id": "01627da8-175c-5804-b097-1c36d2941ac2",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspace/self-news-feed/gatsby-base/node_modules/gatsby-plugin-sharp/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 15
  },
  {
    "resolve": "",
    "id": "c2e354cb-f825-5ffa-ba9d-03f409ef1371",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspace/self-news-feed/gatsby-base/node_modules/gatsby-plugin-manifest/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 16
  },
  {
    "resolve": "",
    "id": "503c2ae8-961a-5fe4-a0a8-33a190554c69",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/workspace/self-news-feed/gatsby-base/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 17
  }
]
