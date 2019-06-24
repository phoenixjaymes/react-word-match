import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'react-bootstrap';

import Stats from './Stats';
import WordsContainer from './WordsContainer';
import Message from './Message';
import Answers from './Answers';
import FinalModal from './FinalModal';
import ErrorBoundary from '../ErrorBoundary';

const Main = ({
  checkTimeLeft, numWords, matchesLeft, timeLeft, tries,
  words, wordClick, isMatchCorrect, clickMessage, cName, finalMessage,
  removeMessage, removeTimeout, correctList, isModalShown, hideModal, partOfSpeech,
  partOfSpeechClick, tryAgainClick,
}) => (
  <main>
    <Container className="cntnr-max">
      <Stats
        checkTimeLeft={checkTimeLeft}
        numWords={numWords}
        matchesLeft={matchesLeft}
        timeLeft={timeLeft}
        tries={tries}
      />

      <ErrorBoundary>
        <WordsContainer
          words={words}
          wordClick={wordClick}
        />
      </ErrorBoundary>

      <Message
        isMatchCorrect={isMatchCorrect}
        matchesLeft={matchesLeft}
        clickMessage={clickMessage}
        cName={cName}
        finalMessage={finalMessage}
        removeMessage={removeMessage}
        removeTimeout={removeTimeout}
        timeLeft={timeLeft}
      />

      <Answers correctList={correctList} />

      <FinalModal
        isModalShown={isModalShown}
        hideModal={hideModal}
        finalMessage={finalMessage}
        partOfSpeech={partOfSpeech}
        partOfSpeechClick={partOfSpeechClick}
        tryAgainClick={tryAgainClick}
      />
    </Container>
  </main>
);

Main.propTypes = {
  checkTimeLeft: PropTypes.func,
  correctList: PropTypes.arrayOf(PropTypes.shape({
    english: PropTypes.string,
    foreign: PropTypes.string,
    example: PropTypes.string,
    finalMessage: PropTypes.string,
  })),
  numWords: PropTypes.number,
  matchesLeft: PropTypes.number,
  timeLeft: PropTypes.number,
  tries: PropTypes.number,
  words: PropTypes.arrayOf(PropTypes.object),
  wordClick: PropTypes.func,
  isMatchCorrect: PropTypes.bool,
  clickMessage: PropTypes.string,
  finalMessage: PropTypes.string,
  partOfSpeech: PropTypes.string,
  partOfSpeechClick: PropTypes.func,
  removeMessage: PropTypes.func,
  removeTimeout: PropTypes.func,
  hideModal: PropTypes.func,
  isModalShown: PropTypes.bool,
  tryAgainClick: PropTypes.func,
  cName: PropTypes.string,
};

export default Main;
