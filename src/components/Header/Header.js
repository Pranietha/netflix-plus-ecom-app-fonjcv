//functional components with named function
//import (optional) (here you have to import)
import React from 'react';
import { Link } from 'react-router-dom';
import MenuList from '../MenuList/MenuList';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

//comp def
//must return JSX
//export

function Header(prop) {
  const cart = useContext(CartContext);
  console.log(cart);

  return (
    <>
      <header>
        <nav
          className="navbar navbar-expand-md navbar-dark fixed-top"
          style={{ backgroundColor: prop.navBgColor }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Netflix Plus Ecom App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <MenuList />

              <button
                className="btn btn-danger btn-outline-light"
                type="button"
              >
                Cart ({cart.cartState?.length === undefined ? '0': cart.cartState?.length})
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Header;
