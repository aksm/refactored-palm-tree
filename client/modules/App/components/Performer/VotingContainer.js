import React from 'react';
import styles from '../../Performer.css';
import { Button, Row, Col } from 'react-bootstrap';

class VotingContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			score: 50
		};
	}
	handleUpVote() {
		this.setState({score: this.state.score + 5});
	}
	handleDownVote() {
		this.setState({score: this.state.score - 5});
	}
	render() {
		return (
			<Col lg={1} id={styles.votingContainer} >
				<Button onClick={this.handleUpVote.bind(this)} >
					Plus
				</Button>
				<h1>{this.state.score}</h1>
				<Button onClick={this.handleDownVote.bind(this)} >
					Minus
				</Button>
			</Col>
		)
	}
}

module.exports = VotingContainer;