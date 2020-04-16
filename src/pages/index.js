import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useIsClient from "../useIsClient"

const selectQuoteByDate = quotes => {
  const date = new Date()
  const today = `${date.getFullYear()}${date.getMonth()}${date.getDay()}`

  return quotes[today % quotes.length]
}

const DailyQuote = ({data}) => {
  const {isClient} = useIsClient();

  if (!isClient) return null;
  const quotes = data.allQuotesJson.edges.map(item => {
    return {
      text: item.node.text,
      author: item.node.author,
    }
  })
  const quote = selectQuoteByDate(quotes)

  return (
    <>
      <span id={"content"}>{quote.text}</span>
      <span id={"author-container"}>
        <span id={"hyphen"}>-</span>
        <span id={"author"}>{quote.author}</span>
      </span>
    </>
  )
}

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query quotesQuery {
        allQuotesJson {
          edges {
            node {
              text
              author
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Your daily quote" />
        <div className={"site-container"}>
          <div className={"text-container"}>
            <DailyQuote data={data} />
          </div>
        </div>
      </Layout>
    )}
  />
)

export default IndexPage
