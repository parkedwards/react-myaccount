// If you have a Login component, you're going to have to conditionally render <Sidebar /> + <DisplaySection />

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Sidebar, DisplaySection } from './';

import { fetchUser } from '../actions';

const API = 'https://infinite-crag-99070.herokuapp.com/authenticate';

class App extends Component {
  constructor(props) {
    super(props);
    this.requestLogin = this.requestLogin.bind(this);
  }

  requestLogin() {
    console.log('inside login request');
    const { dispatch } = this.props;
    dispatch(fetchUser('e@e.com', 'pw')); // placeholder - need to add form!
  }

  render() {
    const { user } = this.props;

    if (!user.id) {
      return (
        <div>
          <span>Need to Log In!</span>
          <button onClick={this.requestLogin}>Log In</button>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <Sidebar />
        <DisplaySection firstName={this.props.user.first_name} />
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  { user: state.user }
);

// export default App;
export default withRouter(connect(mapStateToProps)(App));
