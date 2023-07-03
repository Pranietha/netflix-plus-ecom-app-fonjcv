import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

const UnitTestingDemo = () => {
  return (
    <div>
      <HelmetProvider>
        <title>Netflix App | Unit Testing Demo</title>
      </HelmetProvider>

      <p>UnitTestingDemo</p>
    </div>
  );
};

export default UnitTestingDemo;
