import React, { Component } from 'react';

import ListRepo from './listrepo'
import styled from 'styled-components'
import { Input, Spinner } from 'reactstrap'

const CenterdSpinner = styled(Spinner)`
    display: block;
    margin: 20px auto 0 auto;
`;

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: {},
      loading: true,
      inputValue: ''
    }
  }

  UNSAFE_componentWillMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  getGitHub = () => {
    this.setState({ loading: true })
    return new Promise((resolve, reject) => {
      fetch(`https://api.github.com/search/repositories?q=${this.state.inputValue}`, { credentials: 'same-origin' })
      .then((response) => response.json())
      .then((data) => resolve(this.setState({repos: data})))
      .then(() => this.setState({ loading: false }))
      .catch(reject)
    })
  }

  render() {
    return (
      <div>
        <h1>GitHub Repo</h1>
        <Input type="text" name="search" id="searchRepo" placeholder="type a repo name" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
        {
          this.state.loading ?
          <CenterdSpinner style={{ width: '3rem', height: '3rem' }} type="grow" /> :
          <ListRepo repos={ this.state.repos } />
        }
      </div>
    );
  }

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
    setTimeout(() => this.getGitHub(), 1000);
  }
}

export default Search;
