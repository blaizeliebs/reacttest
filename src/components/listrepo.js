import React, { Component, Fragment } from 'react';

import { Link } from 'gatsby'
import * as _ from 'lodash';
import styled from 'styled-components';
import {
  Jumbotron,
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardTitle,
  CardText,
} from 'reactstrap';
import classnames from 'classnames';
import ReactMinimalPieChart from 'react-minimal-pie-chart';

const ListContainer = styled(ListGroup)`
    margin-left: 0;
`;

const RepoModal = styled(Modal)`
  max-width: 90%;
  text-align: center;
  .modal-content {
    padding: 40px;
  }
`;

const SvgHolder = styled.div`
  margin: 0;
`;

const IconText = styled.span`
  margin-right: 5px;
  font-size: 11px;
  font-style: italic;
`;

const CenterRow = styled(Row)`
  align-items: center;
  justify-content: center;
  background: none;
  border-radius: 30px;
  margin-top: 10px;
  padding: 5px;
  ${(props) => {
    if (props.background) {
      return `
        background-color: rgb(242, 242, 236);
      `
    }
  }}
`;

const Key = styled.div`
  width: 50px;
  height: 50px;
  float: right;
  ${(props) => {
    if (props.color) {
      return `
        background-color: ${props.color};
      `
    }
  }}
  &:before {
    ${(props) => {
      if (props.title) {
        return `
            display: block;
            content: '${props.title}';
            float: left;
            color: ${props.color};
          }
        `
      }
    }}
  }
`;

const ResultsFound = styled.h5`
  margin-top: 20px;
`;

class ListRepo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(item) {
    if (this.state.modal) {
      this.setState({
        modal: null,
      });
    } else {
      this.setState({
        modal: `repo-${item.id}`,
      });
    }
  }

  render() {
    const { repos } = this.props;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        <ResultsFound>
          Results Found: {repos.total_count ? repos.total_count : 0}
        </ResultsFound>
        <Jumbotron>
          <ListContainer>
            {_.map(repos.items, (item, index) => (
              <Fragment key={index}>
                <ListGroupItem className={`repolist-${item.id}`} color="danger" onClick={this.toggle.bind(this, item)}>
                  { item.full_name }
                </ListGroupItem>
                <RepoModal
                  isOpen={this.state.modal === `repo-${item.id}`}
                  toggle={this.toggle}
                  className={`repo-${item.id}`}
                  modalTransition={{ timeout: 700 }}
                  backdropTransition={{ timeout: 800 }}
                >
                  <ModalHeader toggle={this.toggle}>{ item.full_name }</ModalHeader>
                  <ModalBody>
                    { item.description }
                    <CenterRow background="true">
                      <Col>
                        <SvgHolder>
                          <svg className="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="25" height="25" aria-hidden="true">
                            <path fillRule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z" />
                          </svg>
                        </SvgHolder>
                        <IconText>Forks</IconText>
                        <strong>{ item.forks_count }</strong>
                      </Col>
                      <Col>
                        <SvgHolder>
                          <svg aria-label="star" height="25" className="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="25" role="img">
                            <path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z" />
                          </svg>
                        </SvgHolder>
                        <IconText>Stars</IconText>
                        <strong>{ item.stargazers_count }</strong>
                      </Col>
                      <Col>
                        <SvgHolder>
                          <svg className="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="25" height="25" aria-hidden="true">
                            <path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" />
                          </svg>
                        </SvgHolder>
                        <IconText>Open Issues</IconText>
                        <strong>{ item.open_issues_count }</strong>
                      </Col>
                    </CenterRow>
                    <CenterRow>
                      <Col md="1">
                        <Key color="#E38627" title="OPEN" />
                        <Key color="#C13C37" title="CLOSED" />
                      </Col>
                      <Col md="4">
                        <ReactMinimalPieChart
                          animate={false}
                          animationDuration={500}
                          animationEasing="ease-out"
                          cx={50}
                          cy={50}
                          data={[
                            {
                              color: '#E38627',
                              title: 'OPEN',
                              value: item.open_issues_count
                            },
                            {
                              color: '#C13C37',
                              title: 'CLOSED',
                              value: 29276 - item.open_issues_count
                            }
                          ]}
                          label
                          labelPosition={60}
                          labelStyle={{
                            fontFamily: 'sans-serif',
                            fontSize: '5px'
                          }}
                          lengthAngle={360}
                          lineWidth={20}
                          onClick={undefined}
                          onMouseOut={undefined}
                          onMouseOver={undefined}
                          paddingAngle={18}
                          radius={50}
                          rounded
                          startAngle={0}
                          viewBoxSize={[
                            100,
                            100
                          ]}
                        />
                      </Col>
                    </CenterRow>

                  </ModalBody>
                  <ModalFooter>
                    <a className="btn btn-primary" href={item.html_url} target="_blank" rel="noopener norefferer"> View Repo on GitHub </a>
                    {' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </RepoModal>
              </Fragment>
            ))}
          </ListContainer>
        </Jumbotron>
      </>
    );
  }
}

export default ListRepo;
