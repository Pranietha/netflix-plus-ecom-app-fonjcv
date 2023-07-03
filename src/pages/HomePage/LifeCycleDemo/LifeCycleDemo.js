import React, { Component } from 'react';

class LifeCycleDemo extends Component {
  constructor() {
    //optional to have constructor
    super(); //must call super -- beacuse we inherit class
    console.log('==== 1. Inside Constructor====');

    //ideal place for you to initialize component-wide data
    this.state = {
      isLoading: true,
      isError: false,
      featureName: '',
    };
  }

  //Life Cycle hook/method
  componentDidMount() {
    console.log('====3. Inside ComponentDidMount====');
    // this method will be executed ONLY ONCE after initial rendering
    // this method will be called when the component's UI comes into view
    // this is the ideal place for you to send REST API Calls
    // after fetching the data from REST API backend, update the state
    // mocking the REST API call using timeout

    setTimeout(() => {
      // upon successful response from backend
      this.setState({
        isLoading: false,
        featureName: 'Detailed demo on lifecycle hooks',
      });

      //upon getting an error
      // this.setState({
      //   isLoading: false,
      //   isError: true,
      // });
    }, 5000);
  }

  //let's decide whether the re-rendering should happen or not
  shouldComponentUpdate(nextProps, nextState) {
    console.log('==== 4.Inside shouldComponentUpdate===== ');
    //when state is updated -- this will be called
    //it must either return true or false
    //compare the prevState (this.state) and nextState
    //if changes found return true else false
    console.log(this.state);
    console.log(nextState);
    return true;
  }

  //whether the re-rendering is over or not
  componentDidUpdate(prevProps, prevState) {
    console.log('===== 6. Inside componentDidUpdate ');
    //called immediately after update in JSX (after re-rendering)
    //will NEVER be called after initial rendering
    //ideal place for tiny dom manipulation like style updates
    document.getElementById('myPara').style.color = 'green';
  }

  render() {
    // 2.render method will be called immediately after constructor -- Initial Rendering
    // 4.render will be called after setState is called
    // 5.if you return true render will be called
    console.log('==== 2 & 5 Inside Render====');

    if (this.state.isLoading) {
      return <div className="spinner-border text-success" role="status"></div>;
    }

    if (this.state.isError) {
      return (
        <div className="alert alert-danger">
          {' '}
          Some error occured! Try again later{' '}
        </div>
      );
    }

    return (
      <div>
        Life Cycle Demo
        <p id="myPara">Feature we are learning:{this.state.featureName}</p>
      </div>
    );
  }
}

export default LifeCycleDemo;
