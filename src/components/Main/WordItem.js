import React from 'react';
import PropTypes from 'prop-types';

const WordItem = ({
  word, id, match, clicked, matched,
}) => (
  <div className="word-box">
    {word}
    <div
      data-id={id}
      data-match-num={match}
      className={`word-item  ${clicked ? 'word-clicked' : ''} ${matched ? 'word-matched' : ''}`}
    >
      {word}
    </div>
  </div>
);

WordItem.propTypes = {
  clicked: PropTypes.bool,
  id: PropTypes.string,
  match: PropTypes.string,
  matched: PropTypes.bool,
  word: PropTypes.string,
};

export default WordItem;
