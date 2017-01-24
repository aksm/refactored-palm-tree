import React from 'react';
import styles from '../../TalentInput.css';

class Thanks extends React.Component {
	
	render() {
		return (
			<div className={styles.container+' '+styles.styleForToggle} id="thanks">
			  <h2>Thank you for signing up with Mic Check!</h2>
			</div>
		)
	}
}

module.exports = Thanks;