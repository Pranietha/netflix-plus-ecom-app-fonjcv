//Error boundary should be a class component always
//Refer: App.js -- this comp is used  there
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  //let's catch runtime error
  //when there is runtime error -- serve the UI to display generic error msg
  //It can receive the error that was thrown as param
  //this method must return a value to update state

  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      hasError: true,
    };
  }

  //let's work with lifecycle hook to log the errors in third party services

  componentDidCatch(error, errorInfo) {
    console.log('===Inside componentDidCatch===');
    console.log(error); //the error in the original source code
    console.log(errorInfo); //the error in compiled bundle.js

    //you can log these errors in third party logging services
  }

  render() {
    if (this.state.hasError) {
      console.log('rendering error msg');
      return (
        <div className="alert alert-danger">
          <p>Sorry, some error occured. Try again later</p>
          <p>If the error persists contact the Admin</p>
        </div>
      );
    } else {
      console.log('rendering standard ui');
      return this.props.children;
    }
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.element
};

export default ErrorBoundary;
