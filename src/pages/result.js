import React, { Component } from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repo: {},
      loading: true
    }
  }

  UNSAFE_componentWillMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  render() {
    console.log(this.props)
    const { repo } = this.props;
    return (
      <Layout>
        <SEO title="testing" />
        <h1>Hi from the { /*repo.full_name*/ }</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    );
  }
}

export default Result;