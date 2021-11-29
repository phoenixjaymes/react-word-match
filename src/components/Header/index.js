import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';

import '../../css/header.css';

const Header = ({ partOfSpeechClick }) => (
  <header className="header mb-3">
    <Container className="cntnr-max">
      <Navbar bg="blue" variant="dark" expand="sm" collapseOnSelect="true">
        <Navbar.Brand href="" onClick={() => partOfSpeechClick()}>Word Match</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#" onClick={() => partOfSpeechClick('adjective')}>Adjectives</Nav.Link>
            <Nav.Link href="#" onClick={() => partOfSpeechClick('noun')}>Nouns</Nav.Link>
            <Nav.Link href="#" onClick={() => partOfSpeechClick('verb')}>Verbs</Nav.Link>
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
