import React from 'react';
import PropTypes from 'prop-types';

import '../../css/message.css';

const Message = ({
  cName, timeLeft, isMatchCorrect, clickMessage, matchesLeft, removeTimeout, finalMessage,
}) => {
  let newCName;
  let messageType = 'click';

  if (matchesLeft <= 0) {
    newCName = 'message-finished';
    messageType = 'finshed';
    removeTimeout();
  } else if (timeLeft > 0) {
    if (isMatchCorrect === true) {
      newCName = cName;
    } else if (isMatchCorrect === false) {
      newCName = cName;
    }
  } else if (timeLeft <= 0) {
    newCName = 'message-time';
    messageType = 'finshed';
    removeTimeout();
  }

  if (messageType === 'click') {
    return (
      <div className={`message  ${newCName} mb-3`}>
        {clickMessage}
      </div>
    );
  }

  return (
    <div className={`message  ${newCName} mb-3`}>
      {finalMessage}
    </div>
  );
};

Message.propTypes = {
  cName: PropTypes.string,
  timeLeft: PropTypes.number,
  isMatchCorrect: PropTypes.bool,
  clickMessage: PropTypes.string,
  matchesLeft: PropTypes.number,
  removeTimeout: PropTypes.func,
  finalMessage: PropTypes.string,
};

export default Message;
