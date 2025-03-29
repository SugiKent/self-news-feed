
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/workspace/self-news-feed/gatsby-base/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/workspace/self-news-feed/gatsby-base/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/workspace/self-news-feed/gatsby-base/src/pages/page-2.js")),
  "component---src-pages-using-ssr-js": preferDefault(require("/workspace/self-news-feed/gatsby-base/src/pages/using-ssr.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/workspace/self-news-feed/gatsby-base/src/pages/using-typescript.tsx")),
  "component---src-templates-using-dsg-js": preferDefault(require("/workspace/self-news-feed/gatsby-base/src/templates/using-dsg.js"))
}

