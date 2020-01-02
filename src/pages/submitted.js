import React from "react";
// import { Link } from "gatsby";
import Header from "../components/smallheader";
import RegisterComponent from "../components/register";

import Landing from "../components/landing";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Register = () => (
  <Layout>
    <Header />
    <div className="center">
      <h2> Thank you for submitting your MakeSPP application!</h2>
      <h3> You will receive your decision within two weeks. </h3>
    </div>
  </Layout>
);

export default Register;
