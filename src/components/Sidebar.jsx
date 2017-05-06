import React from 'react';
import FilterLink from '../containers/FilterLink';

import routes from '../utils/routes';

const Sidebar = () => (
  <div>
    {routes.map(route => (
      <FilterLink key={route.display} ownView={route.display} path={route.path} />
    ))}
  </div>
);

export default Sidebar;
