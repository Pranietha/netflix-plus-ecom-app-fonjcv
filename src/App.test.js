/*
1. How to write test cases? Test Pattern: AAA (Arrange, Act, Assert[must])
2. Where to write test cases? (here)
3. How to test the app by tools? (tools are configured. you need to try 'npm run test')
*/

//Arrange
import {render, screen} from '@testing-library/react';
import App from'./App';

//test case or a.k.a test spec
test('App comp has success text', () =>{
  //act
  
  render(<App />);
  const successText = screen.getByText('Success')
  expect(successText).toBeInTheDocument();
});