import React, { Component, Fragment } from 'react';

import * as _ from 'lodash'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Jumbotron, ListGroup, ListGroupItem } from 'reactstrap'

const ListContainer = styled(ListGroup)`
    margin-left: 0;
`;

class ListRepo extends Component {

  render() {
    const { repos } = this.props;
    return (
      <Fragment>
      <br />
        <h5>Results Found: {repos.total_count ? repos.total_count : 0}</h5>
        <Jumbotron>
          <ListContainer>
          {_.map(repos.items, (item, index) => (
            <Link to={`/result/${item.id}`} key={ index }>
              <ListGroupItem>
                { item.full_name }
              </ListGroupItem>
            </Link>
          ))}
          </ListContainer>
        </Jumbotron>
      </Fragment>
    );
  }
}

export default ListRepo;