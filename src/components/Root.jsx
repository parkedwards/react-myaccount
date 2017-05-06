import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

export default Root;
