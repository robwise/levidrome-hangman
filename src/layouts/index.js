import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import numeral from 'numeral';
import { Header, Segment, Container, Grid, Divider } from 'semantic-ui-react';

import firebase from '../firebase';

class TemplateWrapper extends React.Component {
  state = { viewsCount: 0 };

  componentDidMount = () => {
    const viewsCountRef = firebase.database().ref('viewsCount');
    viewsCountRef.transaction(viewsCount => (viewsCount ? ++viewsCount : viewsCount));
    viewsCountRef.on('value', viewsCount => this.setState({ viewsCount: viewsCount.val() }));
  };

  render = () => (
    <div>
      <Helmet>
        <title>Levidrome Hangman</title>
        <meta name="description" content="Hangman game with Levidrome words and definitions." />
        <meta name="keywords" content="levidrome, hangman" />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />
      </Helmet>
      <Segment>
        <Container>
          <Header as="h1" content="Levidrome Hangman" />
        </Container>
      </Segment>
      <div style={{ minHeight: 'calc(100vh - 167px)' }}>{this.props.children()}</div>
      <Divider hidden />
      <Segment inverted vertical style={{ padding: '2em 0em' }}>
        <Container>
          <Grid inverted>
            <Grid.Row>
              <Grid.Column width={16} textAlign="center">
                Games Played: {numeral(this.state.viewsCount).format('0,0')}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
