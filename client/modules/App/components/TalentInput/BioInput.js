import React from 'react';
import styles from '../../TalentInput.css';
import { Button } from 'react-bootstrap';

class BioInput extends React.Component {
	
	render() {
		return (
			<div className={styles.container+' '+styles.styleForToggle} id="bio">
							   <h3>Please give us a brief bio about your career as a performer. (max 160 characters)</h3>
							   <form>
							   <div>
							       <label>Bio:</label>
							       <textarea id="bio2" name="user_message"></textarea>
							   </div>
							   <br />
							        
							   </form>
							   <Button type="submit" id="submit4">Submit</Button>
							</div>
		)
	}
}

module.exports = BioInput;