import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';
import MockFragment from './MockFragment/MockFragment';
// import ErrorBoundary from '../../containers/shared/ErrorBoundary/ErrorBoundary';

//send props for error boundary
const AboutUsPage = () => {
  // const handleClick = () => {
  //   x();
  // }

  return (
    <>
      <HelmetProvider>
        <title>Netflix App | About Us</title>
      </HelmetProvider>

      <h1>About Us </h1>
      {/* <p>{props.test()}</p> */}
      {/* <button type = 'button' onClick = {handleClick}> Click here </button> */}

      <h2>Demo of Mock Fragment</h2>

      <MockFragment>
        <p>Our own fragment-like component is serving this UI</p>
        <p>Refer: MockFragment comp in our codebase</p>
      </MockFragment>
    </>
  );
};

AboutUsPage.propTypes = {
  test: PropTypes.func,
};

export default AboutUsPage;
