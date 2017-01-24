import React from 'react';
import styles from '../../TalentInput.css';

class StageNameSubmit extends React.Component {
	
	render() {
		return (
			<div className={styles.container+' '+styles.styleForToggle} id="stageName">
	      <h2>Please enter your name.</h2>
	      <form>
					<div>
				    <label>First Name:</label>
				    <input type="text" id="firstName" name="firstName" />
				  </div>
				  <div>
				    <label>Last Name:</label>
				    <input type="text" id="lastName" name="lastName" />
					</div>
				</form>
				  <br />
				  <button type="submit" id="submit1">Submit</button>
		  </div>
		)
	}
}

module.exports = StageNameSubmit;