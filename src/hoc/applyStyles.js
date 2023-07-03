//a higher-order-component (hoc) is a function that 
//takes a component as input and return a new component as output.

import React from 'react';

const applyStyles = (OriginalComponent) => {
console.log(OriginalComponent);

  const NewComponent = (props) => {
    return (
      <div className = "red-box">
        <OriginalComponent {...props} />
      </div>
    )
  }
  return NewComponent;
}

export default applyStyles;