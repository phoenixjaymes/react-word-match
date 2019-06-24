import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
  formatTime = (time) => {
    const ms = time;
    const min = Math.floor(ms / 1000 / 60);
    let sec = Math.floor((ms / 1000) % 60);
    let formattedTime;

    if (sec < 10) {
      sec = `0${sec}`;
    }

    if (ms <= 0) {
      formattedTime = '00:00';
    } else {
      formattedTime = `0${min}:${sec}`;
    }

    return formattedTime;
  }

  render() {
    const { timeLeft } = this.props;
    const newTimeLeft = this.formatTime(timeLeft);
    return (
      <div>
        <span className="bold">Time:</span>
        {` ${newTimeLeft}`}
      </div>
    );
  }
}

Timer.propTypes = {
  timeLeft: PropTypes.number,
};

export default Timer;
