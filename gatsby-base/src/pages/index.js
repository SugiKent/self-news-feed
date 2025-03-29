import React from "react"
import { Link } from "gatsby"
import reposData from "../data/repos.json"

const IndexPage = () => {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ marginBottom: "30px" }}>Watched Public Repositories</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
        {reposData.map((repo, index) => (
          <div key={index} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "15px" }}>
            <a href={repo.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <h2 style={{ marginTop: "0", color: "#0366d6" }}>{repo.name}</h2>
              {repo.description && <p style={{ color: "#586069" }}>{repo.description}</p>}
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}

export default IndexPage