import React from "react";
// import { Link } from "gatsby";
import Header from "../components/smallheader";
import RegisterComponent from "../components/register";

import Landing from "../components/landing";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Register = () => (
  <Layout>
    <SEO
      title="Register | MakeSPP 3.0"
      keywords={[`MakeSPP`, `Saint Peter's Prep`, `hackathon`]}
    />
    <Header />
    <RegisterComponent />
  </Layout>
);

export default Register;
