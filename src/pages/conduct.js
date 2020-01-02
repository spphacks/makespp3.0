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
    <div className="center coc">
      <h1>
        {" "}
        <a href="https://hackcodeofconduct.org/676-makespp">
          <u>MakeSPP Code of Conduct</u>
        </a>{" "}
      </h1>
    </div>
  </Layout>
);

export default Register;
