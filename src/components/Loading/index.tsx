import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import {
  Container,
} from './styles';

const Loading = () : JSX.Element => (
  <Container title="Loading">
    <PropagateLoader color="#EDEDED" />
  </Container>
);

export default Loading;
