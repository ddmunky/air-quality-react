import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledBackgroundSection from "../components/backgroundSection"
import Card from "../components/card"

const IndexPage = () => (
  <Layout>
    <SEO title="Air Quality" />
    <StyledBackgroundSection />
    <Card />
  </Layout>
)

export default IndexPage
