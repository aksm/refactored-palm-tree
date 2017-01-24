import React from 'react';
import styles from '../../TalentInput.css';
import { Button } from 'react-bootstrap';

class ArtistStyleInput extends React.Component {
	
	render() {
		return (
			<div className={styles.container+' '+styles.styleForToggle} id="type2">
			    <h2>Please indicate your artistic style (ex., Indie Rock, Dry Humor, etc) </h2>
			      <form>
			      <div>
			     		<label>Artistic Style:</label>
		       		<input type="text" id="name" name="user_name" />
				  	</div>
			  	</form>
			  	<Button type="submit" id="submit3">Submit</Button>
			</div>
		)
	}
}

module.exports = ArtistStyleInput;