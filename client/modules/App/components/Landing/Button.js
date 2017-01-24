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
		    <button onClick={() => this.handleClick('/viewer')} className={styles.btnDesign}><h1>View A Show</h1></button>
		    <button onClick={() => this.handleClick('/talent')} className={styles.btnDesign}><h1>Create A Show</h1></button>
		    <button onClick={() => this.handleClick('/about')} className={styles.btnDesign}><h1>About</h1></button>
		  </div>
		)
	}
}

module.exports = Button;