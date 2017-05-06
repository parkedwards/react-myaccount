import React from 'react';
import { Route } from 'react-router-dom';

import { AccountDetail, Settings } from '../components';

const DisplaySection = () => {
  return (
    <div>
      <Route exact path="/" render={() => <h2>Welcome!</h2>} />
      <Route path="/account" component={AccountDetail} />
      <Route path="/settings" component={Settings} />
    </div>
  );
};

export default DisplaySection;
