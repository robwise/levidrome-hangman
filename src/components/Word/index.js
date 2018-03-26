import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { letters } from '../../utils';

const Word = props => (
  <Grid container>
    <Grid.Row>
      <Grid.Column width={16} textAlign="center">
        {letters(props.word).map((letter, i) => (
          <span
            key={`${i}-${letter}`}
            style={{
              marginRight: '10px',
              fontSize: '10rem',
              opacity: props.isGameOver && !_.includes(props.guessedLetters, letter) ? '.5' : '1',
            }}
          >
            {_.includes(props.guessedLetters, letter) || props.isGameOver ? letter : '_'}
          </span>
        ))}
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

Word.propTypes = {
  word: PropTypes.string.isRequired,
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  isGameOver: PropTypes.bool.isRequired,
};

export default Word;
