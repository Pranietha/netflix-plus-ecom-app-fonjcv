//Lets create a fragment-like component
//without jsx on its own

import React from 'react';

const MockFragment = (props) => <> {props.children}</>;

export default MockFragment;
