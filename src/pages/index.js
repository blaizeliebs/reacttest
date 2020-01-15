import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from "../components/search"

import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Search />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
