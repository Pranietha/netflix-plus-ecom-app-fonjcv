import React from 'react';
import PropTypes from 'prop-types';

const Bye = (props) => {
  return <h3>bye, {props.name}</h3>;
};

Bye.propTypes = {
  name: PropTypes.string,
};

export default Bye;
