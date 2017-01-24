import React from 'react';
import styles from '../../TalentInput.css';

class StageNameSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        first: '',
        last: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
  	if (e.target.name == 'firstName') {
  		let name = this.state.name;
  		name.first = e.target.value
  		this.setState({ name: name });
  	} else if (e.target.name == 'lastName') {
  		let name = this.state.name;
  		name.last = e.target.value
  		this.setState({ name: name });  		
  	}
  }
  handleSubmit(e) {
  	e.preventDefault();
  	let input = {
  		name: this.state.name
  	};
  	this.props.setField(input);
  	// console.log(this.state.name);
  }
	render() {
		return (
			<div className={styles.container+' '+styles.styleForToggle} id="stageName">
	      <h2>Please enter your name.</h2>
	      <form className={styles.form} onSubmit={this.handleSubmit} >
					<div className={styles.input}>
				    <label>First Name:</label>
				    <input type="text" id="firstName" name="firstName" value={this.state.name.first} onChange={this.handleChange} />
				  </div>
				  <div>
				    <label>Last Name:</label>
				    <input type="text" id="lastName" name="lastName" value={this.state.name.last} onChange={this.handleChange}/>
					</div>
				  <br />
				  <button type="submit" id="submit1">Submit</button>
				</form>
		  </div>
		)
	}
}

module.exports = StageNameSubmit;