import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SidebarLink = ({ active, onClick, path, ownView }) => {
  if (active) {
    return (
      <span>{ownView}</span>
    );
  }

  return (
    <div>
      <Link to={path} onClick={onClick}>{ownView}</Link>
    </div>
  );
};

SidebarLink.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  ownView: PropTypes.string.isRequired,
};

export default SidebarLink;
