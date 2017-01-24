import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Row, Col } from 'react-bootstrap';

// import Title from './components/Title';
import TwilioContainer from './components/Performer/TwilioContainer';
import AudienceContainer from './components/Performer/AudienceContainer';
import VotingContainer from './components/Performer/VotingContainer';

class Performer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }
  render() {
    return (
      <Row>
        <TwilioContainer />
        <VotingContainer />
        <AudienceContainer />
      </Row>
    )
  }
}

function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}
export default connect(mapStateToProps)(Performer);
