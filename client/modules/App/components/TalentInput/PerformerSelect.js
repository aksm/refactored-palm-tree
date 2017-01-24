import React from 'react';
import styles from '../../TalentInput.css';

class PerformerSelect extends React.Component {
	
	render() {
		return (
			<div className={styles.container+' '+styles.styleForToggle} id="type1">
			  <h2>What type of performer are you? Please select one.</h2>
			  <form>
				  <input type="radio" name="performer" value="comedian" />
				  	<span>Comedian</span>
				  	<br />
				  <input type="radio" name="performer" value="musician" />
				  	<span>Musician</span>
				  	<br />
				  <input type="radio" name="performer" value="poet" />
				  	<span>Poet</span>
				  	<br />
				</form>
				<br />
        <button type="submit" id="submit2">Submit</button>
      </div>
		)
	}
}

module.exports = PerformerSelect;

