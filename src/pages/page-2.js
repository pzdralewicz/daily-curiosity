import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h2>Hi from the second page</h2>
    <span>Welcome to page 2</span>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
