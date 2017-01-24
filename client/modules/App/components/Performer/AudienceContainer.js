import React from 'react';
import styles from '../../Performer.css';
import { Button, Col } from 'react-bootstrap';

class AudienceContainer extends React.Component {
	render() {
		return (
			<Col lg={5} id='remote-media'>
			<Col lg={2}>
					<div id={styles.a1}>a1</div>
					<div id={styles.a2}>a2</div>
			</Col>
			<Col lg={2}>
					<div id={styles.a3}>a3</div>
					<div id={styles.a4}>a4</div>
			</Col>
			</Col>
		)
	}
}

module.exports = AudienceContainer;