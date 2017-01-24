import React from 'react';
import styles from '../../TalentInput.css';
import {browserHistory} from 'react-router';

class Thanks extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(route) {
    // e.preventDefault();
    browserHistory.push(route);
  }
	
	render() {
		return (
			<div className={styles.container+' '+styles.styleForToggle} id="thanks">
			  <h2>Thank you for signing up with Mic Check!</h2>
        <button id="goToRoom" onClick={() => this.handleClick('/room')} >Enter Room</button>
			</div>
		)
	}
}

module.exports = Thanks;