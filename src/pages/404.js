import React from "react"
import { Link } from "gatsby"
import Header from "../components/smallheader";
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
  <Header />
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default NotFoundPage
