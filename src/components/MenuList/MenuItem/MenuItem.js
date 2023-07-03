import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = ({ title, path }) => {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={path}>
        {title}
      </NavLink>
    </li>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
};

export default MenuItem;
