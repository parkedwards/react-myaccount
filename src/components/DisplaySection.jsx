import React from 'react';
import { Route } from 'react-router-dom';

import { AccountDetail, Settings } from '../components';

const DisplaySection = ({ firstName }) => {
  return (
    <div>
      <Route exact path="/" render={() => <h2>Welcome {firstName}!</h2>} />
      <Route path="/account" component={AccountDetail} />
      <Route path="/settings" component={Settings} />
    </div>
  );
};

export default DisplaySection;
