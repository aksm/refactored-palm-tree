import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import Actions
import { toggleAddPost } from './AppActions';
import { switchLanguage } from '../../modules/Intl/IntlActions';

import { twilioStart } from '../../util/twilioVideo';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
    twilioStart();
  }

  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
  };
  render() {
    return (
      <div>
       {/*} {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />} */}
        <div>
          <Helmet
            title="Mic Check"
            titleTemplate="%s - Mic Check"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header
            // switchLanguage={lang => this.props.dispatch(switchLanguage(lang))}
            // intl={this.props.intl}
            // toggleAddPost={this.toggleAddPostSection}
          />
{/*          <div className={styles.container}>
            {this.props.children}
          </div>*/}

  <div id="remote-media"></div>
  <div id="controls">
    <div id="preview">
      <p className="instructions">Hello Beautiful</p>
      <div id="local-media"></div>
      <button id="button-preview">Preview My Camera</button>
    </div>
    <div id="room-controls">
      <p className="instructions">Room Name:</p>
      <input id="room-name" type="text" placeholder="Enter a room name" />
      <button id="button-join">Join Room</button>
      <button id="button-leave">Leave Room</button>
    </div>
    <div id="log"></div>
  </div>

          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(App);
