import React from 'react';
import styles from '../../TalentInput.css';

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
			  	<button type="submit" id="submit3">Submit</button>
			</div>
		)
	}
}

module.exports = ArtistStyleInput;