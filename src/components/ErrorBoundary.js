import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  }

  static propTypes = { children: PropTypes.element }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Container className="home">
          <h1>Language Word Match</h1>
          <p>Oh no Mr Bill something went wrong</p>
          <div className="logo mx-auto">
            <img src="img/multi-country-flag-icon.png" alt="logo" />
          </div>
        </Container>
      );
    }
    return children;
  }
}
