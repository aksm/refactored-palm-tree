import React from 'react';
import styles from '../../Landing.css';
import {browserHistory} from 'react-router';

class Button extends React.Component {
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
			<div id={styles.buttonfan}>
		    <button onClick={() => this.handleClick('/viewer')} className={styles.btnDesign}>View A Show</button>
		    <button onClick={() => this.handleClick('/talent')} className={styles.btnDesign}>Create A Show</button>
		    <button onClick={() => this.handleClick('/about')} className={styles.btnDesign}>About</button>
		  </div>
		)
	}
}

module.exports = Button;