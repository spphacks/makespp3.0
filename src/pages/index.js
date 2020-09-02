import React from "react";
// import { Link } from "gatsby";
import Header from "../components/header";
import Landing from "../components/landing";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="makespp 2020"
      keywords={[`MakeSPP`, `makespp`, `Saint Peter's Prep`, `hackathon`]}
    />
    <Header />
    <Landing />
  </Layout>
);

export default IndexPage;
