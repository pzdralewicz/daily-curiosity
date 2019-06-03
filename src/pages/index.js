import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const renderDailyCuriosity = (data) => {
  const curiosities = data.allCuriositiesJson.edges.map(item => {
    return {
      title: item.node.title,
      content: item.node.content
    }
  });
  const curiosity = selectCuriosityByDate(curiosities);

  return (
    <>
      <h2>{curiosity.title}</h2>
      <span>{curiosity.content}</span>
    </>
  );
}

const selectCuriosityByDate = (curiosities) => {
  const date = new Date;
  const today = `${date.getFullYear()}${date.getMonth()}${date.getDay()}`;

  return curiosities[today % curiosities.length];
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
            }
          }
        }
      }
    
    `}
    render={data => (
      <Layout>
        <SEO title="Home" />
        {renderDailyCuriosity(data)}
      </Layout>
    )}
  />
)

export default IndexPage
