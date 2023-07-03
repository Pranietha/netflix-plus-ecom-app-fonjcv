import React from 'react';
import {HelmetProvider } from 'react-helmet-async';
import Hello from './Hello/Hello';
import Bye from './Bye/Bye';

import applyStyles from '../../hoc/applyStyles';

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const HocDemoPage = () => {
  return (
    <>
      <HelmetProvider>
        <title>Netflix App | Hoc Demo</title>
      </HelmetProvider>

      <p>Hoc Demo Page</p>

      <StyledHello name="John" />
      <StyledBye name="John" />

      {/* <Hello name="john"/>
    <Bye name="john"/> */}
    </>
  );
};

export default HocDemoPage;