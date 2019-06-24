import React from 'react';

import { Container } from 'react-bootstrap';

import '../css/home.css';

const Home = () => (
  <Container className="home">
    <h1>Language Word Match</h1>
    <div className="logo mx-auto">
      <img src="img/multi-country-flag-icon.png" alt="logo" />
    </div>
  </Container>
);


export default Home;
