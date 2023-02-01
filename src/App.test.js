import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './components/Homepage';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('find herounit in homepage', () => {

  render(
  <BrowserRouter
  >
      <Routes>   
          <Route path="*" element= {<Homepage />}/>
      </Routes>
  </BrowserRouter>
      );

  const todoElement = screen.getByTestId('herounit');
  expect(todoElement).toBeInTheDocument()
});


test('finding appName homepage', () => {
  render(
  <BrowserRouter>
      <Routes>   
          <Route path="*" element= {<Homepage />}/>
      </Routes>
  </BrowserRouter>
      );
  const appName = screen.getByTestId('herounit');
  expect(appName).toBeInTheDocument()
  expect(appName).toHaveTextContent('BankCredible')
});
