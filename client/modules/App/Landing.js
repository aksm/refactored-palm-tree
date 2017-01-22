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
        <Button />

        <img src="./public/images/micchecklogo.png" />

        <Video />

      </div>
    )
  }
}


module.exports = Landing;