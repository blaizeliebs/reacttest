/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components';

import Header from "./header"

import { GlobalStyles } from './GlobalStyles';
const GlobalStyle = createGlobalStyle`${GlobalStyles}`;

const Wapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header siteTitle="Black Swan Test" />
      <Wapper>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}
        </footer>
      </Wapper>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;