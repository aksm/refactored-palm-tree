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
      picture: '',
      name: {
        first: '',
        last: ''
      },
      type: '',
      genre: '',
      bio: ''
    };
    this.setField = this.setField.bind(this);
  }
  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
    change();
  }
  setField(input) {
    console.log(input);
    if(input.name) {
      this.setState({name: input.name});
    } else if(input.type) {
      this.setState({picture: 'working'});
    console.log(this.state);
    }
  }

  render() {
    return (
      <div>
        <Video />

        <StartButton />

        <StageNameSubmit setField={ this.setField } />

        <PerformerSelect setField={ this.setField } />

        <ArtistStyleInput />

        <BioInput />

        <Thanks />

      </div>
    )
  }
}

module.exports = TalentInput;