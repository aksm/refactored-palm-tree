import React from 'react';
import styles from '../../Landing.css';

class Video extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			 <div id="video">
			   <video autoPlay loop className={styles.video} src="./public/images/miccheckbg.mp4" type="video/mp4">
			      Your browser does not support the video tag.
			   </video>
			 </div>
		)
	}
}

module.exports = Video;