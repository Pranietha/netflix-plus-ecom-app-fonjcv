//functional component with arrow function
import React from 'react';
import MenuItem from './MenuItem/MenuItem';

const MenuList = () => {
  const menus = [
    {
      id: 1,
      title: 'Home',
      path: '/',
    },
    {
      id: 2,
      title: 'Hoc demo',
      path: '/hoc-demo',
    },
    {
      id: 3,
      title: 'About Us',
      path: '/about-us',
    },
    {
      id: 4,
      title: 'Contact Us',
      path: '/contact-us',
    },
    {
      id: 5,
      title: 'Hooks Demo',
      path: '/hooks-demo',
    },
    {
      id: 6,
      title: 'Shop Page',
      path: '/shop-page',
    },
    {
      id: 7,
      title: 'UnitTestingDemo',
      path: '/unit-testing-demo',
    },
  ];

  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      {menus.map((item) => {
        return <MenuItem key={item.id} title={item.title} path={item.path} />;
      })}
    </ul>
  );
};

export default MenuList;
