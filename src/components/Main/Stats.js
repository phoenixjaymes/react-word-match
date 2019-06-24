import React from 'react';
import PropTypes from 'prop-types';

import Timer from './Timer';

import '../../css/stats.css';

const Stats = ({
  numWords, matchesLeft, tries, checkTimeLeft, timeLeft,
}) => (
  <section className="stats mb-3 px-3 py-1">
    <div>
      <span className="bold">Words: </span>
      {numWords}
    </div>
    <div>
      <span className="bold">Matches left: </span>
      {matchesLeft}
    </div>
    <div>
      <span className="bold">Misses: </span>
      {tries}
    </div>
    <Timer
      checkTimeLeft={checkTimeLeft}
      matchesLeft={matchesLeft}
      timeLeft={timeLeft}
    />
  </section>
);

Stats.propTypes = {
  numWords: PropTypes.number,
  matchesLeft: PropTypes.number,
  tries: PropTypes.number,
  timeLeft: PropTypes.number,
  checkTimeLeft: PropTypes.func,
};

export default Stats;
