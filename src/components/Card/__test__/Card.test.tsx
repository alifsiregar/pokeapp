import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Card from '..';

it('card rendered correctly', () => {
  const { queryByTitle } = render(
    <Router>
      <Card
        key="1"
        name="Test"
        image="https://images.ctfassets.net/hrltx12pl8hq/3KWcqxPlvmgkpMS5VdjLAk/3cbdd812faf4b8c343b259656d31a0ee/rendered_15.jpg?fit=fill&w=480&h=270"
      />
    </Router>,
  );

  const CardEl = queryByTitle('Card');
  expect(CardEl).toBeVisible();
});
