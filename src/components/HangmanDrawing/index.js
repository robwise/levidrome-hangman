import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _ from 'lodash/fp';

import './HangmanDrawing.css';

class HangmanDrawing extends React.Component {
  render = () => (
    <div className="hangman-drawing__sprites">
      <div
        className={cx('hangman-drawing__sprite', 'hangman-drawing__sprite--guess0', {
          'hangman-drawing__sprite--current': this.props.badGuesses === 0,
        })}
      />
      <div
        className={cx('hangman-drawing__sprite', 'hangman-drawing__sprite--guess1', {
          'hangman-drawing__sprite--current': this.props.badGuesses === 1,
        })}
      />
      <div
        className={cx('hangman-drawing__sprite', 'hangman-drawing__sprite--guess2', {
          'hangman-drawing__sprite--current': this.props.badGuesses === 2,
        })}
      />
      <div
        className={cx('hangman-drawing__sprite', 'hangman-drawing__sprite--guess3', {
          'hangman-drawing__sprite--current': this.props.badGuesses === 3,
        })}
      />
      <div
        className={cx('hangman-drawing__sprite', 'hangman-drawing__sprite--guess4', {
          'hangman-drawing__sprite--current': this.props.badGuesses === 4,
        })}
      />
      <div
        className={cx('hangman-drawing__sprite', 'hangman-drawing__sprite--guess5', {
          'hangman-drawing__sprite--current': this.props.badGuesses === 5,
        })}
      />
      <div
        className={cx('hangman-drawing__sprite', 'hangman-drawing__sprite--gamelost', {
          'hangman-drawing__sprite--current': this.props.isGameLost,
        })}
      />
      <div
        className={cx('hangman-drawing__sprite', 'hangman-drawing__sprite--gamewon', {
          'hangman-drawing__sprite--current': this.props.isGameWon,
        })}
      />
    </div>
  );
}

HangmanDrawing.propTypes = {
  badGuesses: PropTypes.number.isRequired,
  isGameWon: PropTypes.bool.isRequired,
  isGameLost: PropTypes.bool.isRequired,
};

export default HangmanDrawing;
