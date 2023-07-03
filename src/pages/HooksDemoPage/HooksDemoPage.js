import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import MyAccount from './MyAccount/MyAccount';
import Blog from './Blog/Blog';
import TodosVariant1 from './TodosVariant1/TodosVariant1';
import TodosVariant2 from './TodosVariant2/TodosVariant2';

const HooksDemoPage = () => {
  return (
    <>
      <HelmetProvider>
        <title>Netflix App | Hooks Demo</title>
      </HelmetProvider>
      <h1>React Hooks Demo</h1>
      <h2>MyAccount | useState Hook Demo </h2>
      <MyAccount />

      <hr />
      <h2>Blog | useEffect Hook Demo</h2>
      <Blog />

      <hr />
      <h2>useReducer and useRef Hook</h2>
      <TodosVariant1 />
      <TodosVariant2 />
    </>
  );
};

export default HooksDemoPage;
