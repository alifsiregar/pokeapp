import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '..';

it('navbar rendered correctly', () => {
  const { queryByTitle } = render(
    <Router>
      <Navbar />
    </Router>,
  );

  const NavbarEl = queryByTitle('Navbar');
  expect(NavbarEl).toBeVisible();
});
