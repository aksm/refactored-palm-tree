import React from 'react';
import styles from '../Landing.css';
import {browserHistory} from 'react-router';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
 	handleClick(e) {
 		e.preventDefault();
		browserHistory.push('/room');
		// console.log("click");
	}
	
	render() {
		return (
			<div>
			<div className={styles.buttonhouse} id={styles.buttonfan}>
		    <button className={styles.btnDesign}><h1>View A Show</h1></button>
		    <button className={styles.btnDesign}><h1>Create A Show</h1></button>
		    <button onClick={this.handleClick} className={styles.btnDesign}><h1>Get Started!</h1></button>
		  </div>
		    <button onClick={this.handleClick}>this button</button>
		    </div>
		)
	}
}

module.exports = Button;