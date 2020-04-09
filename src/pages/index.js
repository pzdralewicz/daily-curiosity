import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const renderDailyCuriosity = data => {
  const curiosities = data.allCuriositiesJson.edges.map(item => {
    return {
      title: item.node.title,
      content: item.node.content,
      author: item.node.author,
    }
  })
  const curiosity = selectCuriosityByDate(curiosities)

  return (
    <>
      <span id={"title"}>{curiosity.title}</span>
      <span id={"content"}>{curiosity.content}</span>
      <span id={"author-container"}>
        <span id={"hyphen"}>-</span>
        <span id={"author"}>{curiosity.author}</span>
      </span>
    </>
  )
}

const selectCuriosityByDate = curiosities => {
  const date = new Date()
  const today = `${date.getFullYear()}${date.getMonth()}${date.getDay()}`

  return curiosities[today % curiosities.length]
}

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query curiositiesQuery {
        allCuriositiesJson {
          edges {
            node {
              title
              content
              author
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" />
        <div className={"site-container"}>
          <div className={"text-container"}>
            {renderDailyCuriosity(data)}
          </div>
        </div>
      </Layout>
    )}
  />
)

export default IndexPage
