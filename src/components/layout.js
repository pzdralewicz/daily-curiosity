import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import GatsbyImage from "gatsby-image";
import {useStaticQuery, graphql} from "gatsby";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      image: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 70, width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="page-layout">
      <div className="logo-container">
        <a href="https://pawelzdralewicz.pl/" rel="noopener noreferrer" target="_blank">
          <GatsbyImage fixed={data.image.childImageSharp.fixed} />
        </a>
      </div>
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
