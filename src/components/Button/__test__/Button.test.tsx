import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Button from '..';

it('button rendered correctly', () => {
  const { queryByTitle } = render(
    <Router>
      <Button
        margin="0"
        text="Details"
        color="#EDEDED"
        fontColor="#171717"
      />
    </Router>,
  );

  const ButtonEl = queryByTitle('Button');
  expect(ButtonEl).toBeVisible();
});
