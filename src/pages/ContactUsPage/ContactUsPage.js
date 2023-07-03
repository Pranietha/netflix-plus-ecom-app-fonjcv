import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useContext } from 'react';
import { PageContext } from '../../contexts/PageContext';

const ContactUsPage = () => {
  const userStatus = useContext(PageContext);
  console.log(userStatus);

  return (
    <>
      <HelmetProvider>
        <title>Netflix App | Contact Us</title>
      </HelmetProvider>{' '}
      <h2>Contact Us</h2>
      <h3>useContext() Hook Demo</h3>
      <p>{userStatus.isLoggedIn ? 'Logged In' : 'Not Logged In'}</p>
      <p>Last Login: {userStatus.lastLogin}</p>
    </>
  );
};

export default ContactUsPage;
