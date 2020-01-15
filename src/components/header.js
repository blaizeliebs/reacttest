import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const HeaderWapper = styled.header`
  background: black;
  margin-bottom: 1.45rem;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  height: 110px;
`;

const HeaderImage = styled.img`
  float: left;
  margin: 15PX 20PX;
  width: 100px;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  float: right;
`;

const Header = ({ siteTitle }) => (
  <HeaderWapper>
    <HeaderContainer>
      <HeaderImage src="https://fethr.aero/img/fethr/logo.svg" title={ siteTitle } />
      <HeaderTitle>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </HeaderTitle>
    </HeaderContainer>
  </HeaderWapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header