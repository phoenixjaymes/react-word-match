import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';
import Home from './Home';

import '../app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partOfSpeech: '',
      words: [],
      wordOneId: undefined,
      wordOneMatchNum: undefined,
      matchesLeft: 0,
      isMatchCorrect: undefined,
      isTimerStarted: false,
      clickMessage: '',
      cName: '',
      finalMessage: '',
      isModalShown: false,
      startTime: 30000,
      tries: 0,
      timeLeft: 0,
      correctList: [],
    };
  }

  componentDidMount() {
    this.setState((prevState) => ({ timeLeft: prevState.startTime }));
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  toggleClicked = (indexToToggle, wordOneIdVal, wordOneMatchVal) => {
    const { words } = this.state;
    this.setState({
      wordOneId: wordOneIdVal,
      wordOneMatchNum: wordOneMatchVal,
      words: words.map((word) => {
        if (indexToToggle === String(word.id)) {
          return {
            ...word,
            isClicked: !word.isClicked,
          };
        }
        return word;
      }),
    });
  }

  checkForMatch = (matchNum) => {
    const { words, wordOneMatchNum, correctList } = this.state;

    if (matchNum === wordOneMatchNum) {
      // function to come
      const matchedWord = words.filter((word) => word.matchId === matchNum);
      let englishWord = '';
      let foreignWord = '';
      const example = 'no example';

      if (matchedWord[0].id % 2 !== 0) {
        englishWord = matchedWord[0].word;
        foreignWord = matchedWord[1].word;
      } else {
        englishWord = matchedWord[1].word;
        foreignWord = matchedWord[0].word;
      }

      const tmpArray = correctList;
      tmpArray.push({ english: englishWord, foreign: foreignWord, example });

      this.setState({ correctList: tmpArray });

      // end function to come
      this.setState((prevState) => ({
        matchesLeft: prevState.matchesLeft - 1,
        isMatchCorrect: true,
        clickMessage: 'MATCHED!',
        cName: 'message-correct',
        wordOneId: undefined,
        wordOneMatchNum: undefined,
        words: words.map((word) => {
          if (matchNum === word.matchId) {
            return {
              ...word,
              isClicked: false,
              isMatched: true,
            };
          }
          return word;
        }),
      }));
    } else {
      this.setState((prevState) => ({
        isMatchCorrect: false,
        clickMessage: 'NO MATCH!',
        cName: 'message-incorrect',
        tries: prevState.tries + 1,
      }));
    }
  }

  removeMessage = () => {
    this.timeoutId = setTimeout(() => {
      this.setState({
        clickMessage: '',
        isMatchCorrect: undefined,
      });
    }, 2000);
  }

  removeTimeout = () => {
    clearTimeout(this.timeoutId);
  }

  // wordClickedAt
  wordClick = (e) => {
    const {
      words, isTimerStarted, timeLeft, wordOneId,
    } = this.state;
    const indexClicked = e.target.getAttribute('data-id');
    const matchNum = e.target.getAttribute('data-match-num');
    const objWord = words.filter((word) => indexClicked === String(word.id));

    if (isTimerStarted === false) {
      this.timerID = setInterval(
        () => this.tick(),
        1000,
      );

      this.setState({
        isTimerStarted: !isTimerStarted,
      });
    }

    this.setState({
      clickMessage: '',
      cName: '',
    });

    if (!objWord[0].isMatched && (timeLeft > 0)) {
      if (wordOneId === undefined) {
        this.toggleClicked(indexClicked, indexClicked, matchNum);
      } else if (wordOneId !== undefined && wordOneId === indexClicked) {
        this.toggleClicked(indexClicked, undefined, undefined);
      } else if (wordOneId !== undefined && wordOneId !== indexClicked) {
        this.checkForMatch(matchNum);
      }
    }
  }

  checkTimeLeft = () => {
    const { timeLeft, matchesLeft, isTimerStarted } = this.state;
    if (timeLeft > 0 && matchesLeft <= 0) {
      clearInterval(this.timerID);
      this.setState({
        finalMessage: 'Good job, you got all the matches.',
        isTimerStarted: !isTimerStarted,
        isModalShown: true,

      });
    } else if (timeLeft < 0) {
      clearInterval(this.timerID);
      this.setState({
        finalMessage: "Sorry, you're out of time.",
        isTimerStarted: !isTimerStarted,
        isModalShown: true,
      });
    }
  }

  partOfSpeechClick = (pos) => {
    const reset = (words) => {
      clearInterval(this.timerID);
      const { startTime } = this.state;

      this.setState({
        words,
        tries: 0,
        matchesLeft: words.length / 2,
        partOfSpeech: pos,
        isTimerStarted: false,
        timeLeft: startTime,
        wordOneId: undefined,
        wordOneMatchNum: undefined,
        clickMessage: '',
        finalMessage: '',
        cName: '',
        isModalShown: false,
        correctList: [],
      });
    };

    if (pos === undefined) {
      this.setState({ partOfSpeech: '' });
    } else {
      fetch(`https://deutscherphoenix.com/api/words?pos=${pos}`)
        .then((reponse) => reponse.json())
        .then((responseData) => reset(responseData.data))
        .catch((error) => (
          console.log('Error fetching and parsing data', error)
        ));
    }
  }

  tryAgainClick = () => {
    clearInterval(this.timerID);
    const { startTime } = this.state;

    this.setState((prevState) => ({
      tries: 0,
      matchesLeft: prevState.words.length / 2,
      partOfSpeech: prevState.pos,
      isTimerStarted: false,
      timeLeft: startTime,
      wordOneId: undefined,
      wordOneMatchNum: undefined,
      clickMessage: '',
      finalMessage: '',
      cName: '',
      isModalShown: false,
      correctList: [],
      words: prevState.words.map((word) => ({
        ...word,
        isClicked: false,
        isMatched: false,
      })),
    }));
  }

  tick = () => {
    this.setState((prevState) => ({
      timeLeft: prevState.timeLeft - 1000,
    }));

    this.checkTimeLeft();
  }

  showModal = () => {
    this.setState({ isModalShown: true });
  }

  hideModal = () => {
    this.setState({ isModalShown: false });
  }

  render() {
    const {
      words, partOfSpeech, isMatchCorrect, matchesLeft, cName, clickMessage,
      correctList, finalMessage, isModalShown, timeLeft, tries,
    } = this.state;
    const numWords = words.length / 2;

    if (partOfSpeech === '') {
      return (
        <div>
          <Header partOfSpeechClick={this.partOfSpeechClick} />
          <Home />
        </div>
      );
    }

    return (
      <div>
        <Header partOfSpeechClick={this.partOfSpeechClick} />
        <Main
          checkTimeLeft={this.checkTimeLeft}
          isMatchCorrect={isMatchCorrect}
          matchesLeft={matchesLeft}
          clickMessage={clickMessage}
          cName={cName}
          correctList={correctList}
          finalMessage={finalMessage}
          hideModal={this.hideModal}
          isModalShown={isModalShown}
          numWords={numWords}
          partOfSpeech={partOfSpeech}
          partOfSpeechClick={this.partOfSpeechClick}
          removeMessage={this.removeMessage}
          removeTimeout={this.removeTimeout}
          timeLeft={timeLeft}
          tries={tries}
          tryAgainClick={this.tryAgainClick}
          wordClick={this.wordClick}
          words={words}
        />
      </div>
    );
  }
}

export default App;
