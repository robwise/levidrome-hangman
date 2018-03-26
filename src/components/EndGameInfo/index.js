import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Card, Header, Segment, Message } from 'semantic-ui-react';
import axios from 'axios';
import _ from 'lodash/fp';

import levidromes from '../../levidromes';

class EndGameInfo extends React.Component {
  reverseWord = () => _.join('', _.reverse(this.props.word));

  render = () => (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <Card.Group
        itemsPerRow={2}
        items={[
          { header: this.props.word, description: _.get([this.props.word, 'definition'], levidromes) },
          {
            header: this.reverseWord(),
            description: _.get([this.reverseWord(), 'definition'], levidromes),
          },
        ]}
      />
      <Message error={!this.props.isGameWon} success={this.props.isGameWon} style={{ marginTop: '40px' }}>
        <Header as="h2">
          {this.props.isGameWon ? 'You WIN!' : 'Better luck next time!'}{' '}
          <Button primary size="huge" style={{ marginLeft: '20px' }} onClick={this.props.onClose}>
            Play Again
          </Button>
        </Header>
      </Message>
    </div>
  );
}

EndGameInfo.propTypes = {
  isGameWon: PropTypes.bool.isRequired,
  word: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EndGameInfo;
