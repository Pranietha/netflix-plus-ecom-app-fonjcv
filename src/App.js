import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './containers/shared/ErrorBoundary/ErrorBoundary';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { PageContext } from './contexts/PageContext';
import { CartContext } from './contexts/CartContext';
import { useReducer } from 'react';
import { cartReducer } from './reducers/cartReducer';
import AppRoutes from './routes/AppRoutes'

//give space

//App is a comp
//comp definition

function App() {
  const userStatus = {
    isLoggedIn: true,
    lastLogin: 'yesterday 1pm',
  };

  //supply state (needed for header comp) and
  //dispatcher fn (needed for showpage comp) thru cart context.
  const [cartState, cartDispatch] = useReducer(cartReducer);
  console.log(cartState); //needed for header comp
  console.log(cartDispatch); //needed for ShopPage comp

  const cart = {
    cartState,
    cartDispatch,
  };

  //must return jsx
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <CartContext.Provider value={cart}>
          <BrowserRouter>
            <Header navBgColor="purple"></Header>

            <main className="container mt-5 pt-3">
              <ErrorBoundary>
                {/* step 2 of context API:
                      Using <PageContext.Provider> to share the data across the selected few components
                      for step 3 refer ContactUsPage.js
                 */}
                <PageContext.Provider value={userStatus}>
                  <AppRoutes />
                </PageContext.Provider>
              </ErrorBoundary>
            </main>

            <Footer />
          </BrowserRouter>
        </CartContext.Provider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
export default App;
