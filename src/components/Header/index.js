import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';

import '../../css/header.css';

const Header = props => (
  <header className="header mb-3">
    <Container className="cntnr-max">
      <Navbar bg="blue" variant="dark" expand="sm" collapseOnSelect="true">
        <Navbar.Brand href="" onClick={() => props.partOfSpeechClick()}>Word Match</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#" onClick={() => props.partOfSpeechClick('adjective')}>Adjectives</Nav.Link>
            <Nav.Link href="#" onClick={() => props.partOfSpeechClick('noun')}>Nouns</Nav.Link>
            <Nav.Link href="#" onClick={() => props.partOfSpeechClick('verb')}>Verbs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
);

Header.propTypes = {
  partOfSpeechClick: PropTypes.func.isRequired,
};

export default Header;
