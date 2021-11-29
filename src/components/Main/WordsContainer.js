import React from 'react';
import PropTypes from 'prop-types';

import WordItem from './WordItem';

import '../../css/words.css';

const WordsContainer = ({ words, wordClick }) => {
  const newWords = words.map((wordObject) => {
    const id = String(wordObject.id);

    return (
      <WordItem
        key={id}
        id={id}
        match={wordObject.matchId}
        word={wordObject.word}
        clicked={wordObject.isClicked}
        matched={wordObject.isMatched}
      />
    );
  });

  return (
    <section className="words mb-3" onClick={e => wordClick(e)}>
      {newWords}
    </section>
  );
};

WordsContainer.propTypes = {
  wordClick: PropTypes.func.isRequired,
  words: PropTypes.arrayOf(PropTypes.object),
};

export default WordsContainer;
