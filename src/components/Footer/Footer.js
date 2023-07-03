//functional component with Anonymous Function

/*
 *imports
 *comp def
 *must return jsx
 *export
 */
import React from 'react';
import MenuList from '../MenuList/MenuList';

const Footer = function () {
  const copyrightyear = 2023;
  const developerName = 'Pranietha';

  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p>
        Copyright {copyrightyear} | {developerName}
      </p>
    </footer>
  );
};

export default Footer;
