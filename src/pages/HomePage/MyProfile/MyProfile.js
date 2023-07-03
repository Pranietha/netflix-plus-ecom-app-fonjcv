import React, { Component } from 'react';

class MyProfile extends Component {
  //Js <=> JSX
  state = {
    profileName: 'Emby',
  };

  handleProfileNameChange = (event) => {
    //baked event object
    console.log(event);
    console.log(event.target.value);
    this.setState({
      profileName: event.target.value,
    });
  };

  render() {
    return (
      <>
        <h3>Profile Info</h3>
        <p>Update Profile Info</p>

        {/* Controlled Component */}
        {/* An input form element whose value is controlled by react is called as Controlled Component */}

        <input
          type="text"
          value={this.state.profileName}
          onChange={this.handleProfileNameChange}
        />

        <p>Profile Name: {this.state.profileName}</p>
      </>
    );
  }
}

export default MyProfile;
