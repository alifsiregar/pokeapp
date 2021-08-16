import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Error from '..';

it('error rendered correctly', () => {
  const { queryByTitle } = render(
    <Router>
      <Error />
    </Router>,
  );

  const ErrorEl = queryByTitle('Error');
  expect(ErrorEl).toBeVisible();
});
