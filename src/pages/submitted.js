import React from 'react';
import { Submitted } from '../components/submitted';
import Layout from "../components/layout";
import SEO from "../components/seo";

const SubmittedForm = () => (
    <Layout>
      <SEO
        title="Submitted | MakeSPP 2022"
        keywords={[`MakeSPP`, `Saint Peter's Prep`, `hackathon`]}
      />
        <Submitted/>
    </Layout>
  );
  
  export default SubmittedForm;