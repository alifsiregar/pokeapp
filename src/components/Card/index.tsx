import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  CardImage,
  CardName,
  CardLabel,
} from './styles';
import Button from '../Button';
import { IState } from '../../interfaces';

const Card: React.FC<IState['cardComponent']> = ({
  name,
  onClick,
  nickname,
  image,
}) => (
  <Container title="Card">
    <CardLabel>
      Pokemon Name:
    </CardLabel>
    <CardName>
      { name.toUpperCase() }
    </CardName>
    {nickname
                && (
                <>
                  <CardLabel>
                    Nickname:
                  </CardLabel>
                  <CardName>
                    { nickname.toUpperCase() }
                  </CardName>
                </>
                )}
    <CardImage src={image} />
    {nickname
      ? (
        <Button
          margin="0"
          text="Release"
          color="#DA0037"
          fontColor="#EDEDED"
          onClick={onClick}
        />
      )
      : (
        <Link to={`/pokemon/${name}`}>
          <Button
            margin="0"
            text="Details"
            color="#EDEDED"
            fontColor="#171717"
          />
        </Link>
      )}

  </Container>
);

export default Card;
