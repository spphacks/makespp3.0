import React from "react";
import Join from "../components/register";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Register = () => (
  <Layout>
    <SEO
      title="Register | MakeSPP 2022"
      keywords={[`MakeSPP`, `Saint Peter's Prep`, `hackathon`]}
    />
    <Join />
  </Layout>
);

export default Register;