import React from 'react';
import styles from '../../TalentInput.css';

class StartButton extends React.Component {
	
	render() {
		return (
			<div className={styles.container} id="start">
   			<h2>Click to begin your performer profile on Mic Check</h2>
   			<br />
				<button type="submit" id="start">Start</button>
			</div>
		)
	}
}

module.exports = StartButton;