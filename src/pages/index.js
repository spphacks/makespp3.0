import React from "react";
import Header from "../components/header";
import Landing from "../components/landing";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="MakeSPP 2021"
      keywords={[`MakeSPP`, `makespp`, `Saint Peter's Prep`, `hackathon`]}
    />
    <Header />
    {/*<Landing />*/}

  </Layout>
);

export default IndexPage;
