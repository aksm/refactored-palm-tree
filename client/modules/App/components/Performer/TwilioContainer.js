import React from 'react';
import { twilioStart } from '../../../../util/twilioVideo';
import styles from '../../Performer.css';
import { Row, Col, Button } from 'react-bootstrap';

class TwilioContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
    twilioStart();
  }
	render() {
		return (
      <Col>
			<Col md={5} lg={5} id='local-media' className={styles.talentPlayer} >

			</Col>
      <Col id="room-controls">
      <p className="instructions">Room Name:</p>
      <input id="room-name" type="text" placeholder="Enter a room name" />
      <Button id="button-join">Join Room</Button>
      <Button id="button-leave">Leave Room</Button>
    </Col>

        <Button id='button-preview' >Preview</Button>
        </Col>
		)
	}
}

module.exports = TwilioContainer;