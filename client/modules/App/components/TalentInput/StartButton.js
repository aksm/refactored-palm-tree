import React from 'react';
import styles from '../../TalentInput.css';
import { Button } from 'react-bootstrap';

class StartButton extends React.Component {
	
	render() {
		return (
			<div className={styles.container} id="start">
   			<h2>Click to begin your performer profile on Mic Check</h2>
   			<br />
				<Button type="submit" id="start">Start</Button>
			</div>
		)
	}
}

module.exports = StartButton;