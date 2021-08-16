import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
} from './styles';

const Error = () : JSX.Element => (
  <Container title="Error">
    <h1>
      PAGE NOT FOUND OR CONNECTION ERROR
    </h1>
    <Link to="/">
      <h3>
        Click me to go home!
      </h3>
    </Link>
  </Container>
);

export default Error;
