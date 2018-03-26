import React from 'react';
import { Container, Grid, Divider } from 'semantic-ui-react';
import _ from 'lodash/fp';

import LetterPicker from '../components/LetterPicker';
import Word from '../components/Word';
import EndGameInfo from '../components/EndGameInfo';
import HangmanDrawing from '../components/HangmanDrawing';
import { letters, randomLevidrome, LETTERS } from '../utils';

const GUESSES_ALLOWED = 6;

class IndexPage extends React.Component {
  state = {
    word: randomLevidrome().word,
    guessedLetters: [],
  };

  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyPress);
  };

  componentWillDismount = () => {
    window.removeEventListener(this.handleKeyPress);
  };

  handleKeyPress = event => _.includes(event.key, LETTERS) && this.pickLetter(event.key);

  pickLetter = letter =>
    !this.isGameOver() &&
    this.setState({ ...this.state, guessedLetters: _.union(this.state.guessedLetters, [letter]) });

  isGameWon = () => _.difference(letters(this.state.word), this.state.guessedLetters).length === 0;

  isGameLost = () => this.badGuesses() >= GUESSES_ALLOWED;

  guesses = () => this.state.guessedLetters.length;

  badGuesses = () =>
    this.state.guessedLetters.length -
    _.intersection(this.state.guessedLetters, letters(this.state.word)).length;

  guessesLeft = () => GUESSES_ALLOWED - this.badGuesses();

  isGameOver = () => this.isGameWon() || this.isGameLost();

  reset = () => this.setState({ word: randomLevidrome().word, guessedLetters: [] });

  render = () => (
    <Container style={{ marginTop: '40px' }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <HangmanDrawing
              badGuesses={this.badGuesses()}
              isGameWon={this.isGameWon()}
              isGameLost={this.isGameLost()}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Word
              guessedLetters={this.state.guessedLetters}
              word={this.state.word}
              isGameOver={this.isGameOver()}
            />
          </Grid.Column>
        </Grid.Row>
        {this.isGameOver() && (
          <Grid.Row>
            <Grid.Column width={16}>
              <EndGameInfo isGameWon={this.isGameWon()} onClose={this.reset} word={this.state.word} />
            </Grid.Column>
          </Grid.Row>
        )}
        <Grid.Row>
          <Grid.Column width={16} style={{ paddingTop: '2em' }}>
            <LetterPicker guessedLetters={this.state.guessedLetters} pickLetter={this.pickLetter} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default IndexPage;
