import React from 'react';
import { render } from 'react-dom';
import configureStore from './utils/configureStore';

import { Root } from './components';

const store = configureStore();

render(
  <Root store={store} />,
  document.querySelector('#app'),
);

