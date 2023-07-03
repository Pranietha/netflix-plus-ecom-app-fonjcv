import React from 'react';
import PropTypes from 'prop-types';

const Hello = (props) => {
  return <h3>hello, {props.name}</h3>;
};

Hello.propTypes = {
  name: PropTypes.string,
};

export default Hello;
