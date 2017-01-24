import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Video from './components/Landing/Video';
import Button from './components/Landing/Button';

import styles from './Landing.css';
// import { Grid, Row, Col } from 'react-bootstrap';

// Base stylesheet
class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  render() {

    return (
      <div>
        <Video />
        <Button />

        <img className={styles.logo} src="./public/images/micchecklogo.png" />


      </div>

    )
  }
}


// module.exports = Landing;

function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}
export default connect(mapStateToProps)(Landing);
