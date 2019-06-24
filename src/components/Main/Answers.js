import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

const Answers = ({ correctList }) => {
  const heading = correctList.length > 0 ? 'Answers' : '';
  const correctAnswers = correctList.map((word, index) => (
    <Col key={index} md={6} className="border-bottom">
      <p key={index} className="pt-2 mb-2">
        <strong>
          {`${word.english}:`}
        </strong>
        {` ${word.foreign}`}
        <br />
        {word.example}
      </p>
    </Col>
  ));

  return (
    <Container>
      <h3 className="mb-3">{heading}</h3>
      <Row>
        {correctAnswers}
      </Row>
    </Container>
  );
};

Answers.propTypes = {
  correctList: PropTypes.arrayOf(PropTypes.shape({
    english: PropTypes.string,
    foreign: PropTypes.string,
    example: PropTypes.string,
    finalMessage: PropTypes.string,
  })).isRequired,
};

export default Answers;
