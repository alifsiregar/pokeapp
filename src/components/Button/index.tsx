import React from 'react';
import {
  Container,
  ButtonLabel,
} from './styles';
import { IState } from '../../interfaces';

const Button : React.FC<IState['buttonComponent']> = ({
  onClick,
  margin,
  text,
  color,
  fontColor,
  className,
}) => (
  <Container
    onClick={onClick}
    className={className}
    margin={margin}
    color={color}
    fontColor={fontColor}
    title="Button"
  >
    <ButtonLabel>
      {text}
    </ButtonLabel>
  </Container>
);

export default Button;
