import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Modal,
} from 'react-bootstrap';

class FinalModal extends Component {
  state = {
    show: false,
  }

  render() {
    const {
      tryAgainClick, hideModal, isModalShown, finalMessage, partOfSpeechClick, partOfSpeech,
    } = this.props;
    let btnTryAgain = '';

    if (true) {
      btnTryAgain = <Button variant="secondary" onClick={tryAgainClick}>Try Again</Button>;
    }

    return (
      <Modal centered show={isModalShown} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">{finalMessage}</Modal.Body>

        <Modal.Footer>
          {btnTryAgain}
          <Button variant="primary" onClick={() => partOfSpeechClick(partOfSpeech)}>
            {'New Words'}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

FinalModal.propTypes = {
  isModalShown: PropTypes.bool,
  hideModal: PropTypes.func,
  finalMessage: PropTypes.string,
  partOfSpeech: PropTypes.string,
  partOfSpeechClick: PropTypes.func,
  tryAgainClick: PropTypes.func,
};

export default FinalModal;
