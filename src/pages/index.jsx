/* eslint-disable import/no-named-as-default */
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Search from '../components/search';

// importing bootstrap css as this is the base for reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    {/**
     * N.B  SEO functionality comes with gatsbyjs and I am not particularly using it for now.
     */}
    <SEO title="Search" />
    {/** My Search app starts from here */}
    <Search />
  </Layout>
);

export default IndexPage;
