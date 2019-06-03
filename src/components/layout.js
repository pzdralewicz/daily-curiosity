import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"

// TODO: add particlejs / gradient backgrounds
// TODO: add colour presets 
// TODO: add fonts 
// TODO: add styling to sites

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    
    `}
    render={data => (
      <div className="page-layout">
        <main>{children}</main>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
