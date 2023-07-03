import React, { useState } from 'react';

const MyAccount = () => {
  //use hooks only in top level
  //useState hook returns a stateful value and a function to update it in an array
  console.log('Program Started');
  const [accountName, setAccountName] = useState('Pranietha'); //initial state
  const [age, setAge] = useState(23);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChangeAccountName = () => {
    console.log('clicked');
    //updating state
    setAccountName('Penny');
  };

  console.log('Before Return');
  return (
    <div>
      <h3>My Account</h3>
      <p>My Account Name: {accountName}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleChangeAccountName}
      >
        Change account name
      </button>

      <hr />
      <p>Age: {age}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setAge(25);
        }}
      >
        Change Age
      </button>

      <hr />
      <p>Login | Logout</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setIsLoggedIn(!isLoggedIn);
        }}
      >
        {isLoggedIn ? 'Logout' : 'Log In'}
      </button>
    </div>
  );
};

export default MyAccount;
