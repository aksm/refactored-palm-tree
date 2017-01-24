import React from 'react';
import styles from '../../TalentInput.css';
import { Button } from 'react-bootstrap';

class PerformerSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      option: 'comedian'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
  	this.setState({
  		option: e.target.value
  	});
  	console.log(this.state);
  }
  handleSubmit(e) {
  	e.preventDefault();
  	let input = {
  		type: this.state.option
  	};
  	this.props.setField(input);
  	// console.log(this.state.name);
  }
	
	render() {
		return (
			<div className={styles.container+' '+styles.styleForToggle} id="type1">
			  <h2>What type of performer are you? Please select one.</h2>
			  <form onSubmit={this.handleSubmit} >
				  <input type="radio" name="performer" value="comedian" checked={this.state.option === 'comedian'} onChange={this.handleChange} />
				  	<span>Comedian</span>
				  	<br />
				  <input type="radio" name="performer" value="musician" checked={this.state.option === 'musician'} onChange={this.handleChange} />
				  	<span>Musician</span>
				  	<br />
				  <input type="radio" name="performer" value="poet" checked={this.state.option === 'poet'} onChange={this.handleChange} />
				  	<span>Poet</span>
				  	<br />
					<br />
	        <Button type="submit" id="submit2">Submit</Button>
				</form>
      </div>
		)
	}
}

module.exports = PerformerSelect;

