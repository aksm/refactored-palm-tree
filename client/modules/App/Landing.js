import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Video from './components/Video';
import Button from './components/Button';

import styles from './Landing.css';

// Base stylesheet
class Landing extends React.Component {

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


module.exports = Landing;