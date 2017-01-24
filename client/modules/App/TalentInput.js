import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './TalentInput.css';
import StartButton from './components/TalentInput/StartButton';
import StageNameSubmit from './components/TalentInput/StageNameSubmit';
import PerformerSelect from './components/TalentInput/PerformerSelect';
import ArtistStyleInput from './components/TalentInput/ArtistStyleInput';
import BioInput from './components/TalentInput/BioInput';
import Thanks from './components/TalentInput/Thanks';
import { change } from '../../util/transition';
import Video from './components/Landing/Video';


class TalentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      // picture: '',
      // name: {
      //   first: '',
      //   last: ''
      // },
      // type: '',
      // genre: '',
      // bio: ''
    };
  }
  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
    change();
  }


  render() {
    return (
      <div>
        <Video />

        <StartButton />

        <StageNameSubmit />

        <PerformerSelect />

        <ArtistStyleInput />

        <BioInput />

        <Thanks />

      </div>
    )
  }
}

module.exports = TalentInput;