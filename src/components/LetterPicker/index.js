import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid } from 'semantic-ui-react';
import _ from 'lodash/fp';

import { LETTERS } from '../../utils';

const LetterPicker = props => (
  <Grid container stackable columns={16}>
    <Grid.Row>
      {LETTERS.map((letter, i) => (
        <Grid.Column key={letter} width={2}>
          <Button
            onClick={() => props.pickLetter(letter)}
            disabled={_.includes(letter, props.guessedLetters)}
            primary
            fluid
            size="huge"
            style={{ marginTop: '10px' }}
          >
            {letter}
          </Button>
        </Grid.Column>
      ))}
    </Grid.Row>
  </Grid>
);

LetterPicker.propTypes = {
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  pickLetter: PropTypes.func.isRequired,
};

export default LetterPicker;
