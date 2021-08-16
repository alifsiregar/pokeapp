import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Loading from '..';

it('loading rendered correctly', () => {
  const { queryByTitle } = render(
    <Router>
      <Loading />
    </Router>,
  );

  const LoadingEl = queryByTitle('Loading');
  expect(LoadingEl).toBeVisible();
});
