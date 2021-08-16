import React, { useState, useEffect } from 'react';
import {
  Container,
  Header,
  Title,
  Owned,
  CardContainer,
  EmptyContainer,
} from './styles';
import Card from '../../components/Card';

const MyPokemon = () : JSX.Element => {
  const [myPokemon, setMyPokemon] = useState<{
        id: number,
        name: string,
        nickname: string,
        image: string
    }[]>([]);

  useEffect(() => {
    if (!sessionStorage.getItem('myPokemon')) {
      sessionStorage.setItem('myPokemon', JSON.stringify([]));
    }
    setMyPokemon(JSON.parse(sessionStorage.getItem('myPokemon')!));
  }, []);

  useEffect(() => {
    sessionStorage.setItem('myPokemon', JSON.stringify(myPokemon));
  }, [myPokemon]);

  const removePokemon = (pokemon : string) : void => {
    const index = myPokemon.findIndex((e) => e.nickname === pokemon);
    setMyPokemon((currentPokemon) => currentPokemon.filter((e, i) => i !== index));
  };

  return (
    <Container title="MyPokemon">
      <Header>
        <Title>
          My Pokemons
        </Title>
        <Owned>
          Pokemon Owned:
          {' '}
          {myPokemon.length}
        </Owned>
      </Header>
      <CardContainer>
        {myPokemon.length !== 0
          ? myPokemon.map((pokemon: {
                        id: number,
                        name: string,
                        nickname: string,
                        image: string
                    }) => (
                      <Card
                        key={pokemon.nickname}
                        name={pokemon.name}
                        nickname={pokemon.nickname}
                        image={pokemon.image}
                        onClick={() => { removePokemon(pokemon.nickname); }}
                      />
          ))
          : (
            <EmptyContainer>
              <h1>
                No pokemon yet :(
                {' '}
                <br />
                {' '}
                Start catching some!
              </h1>
            </EmptyContainer>
          )}
      </CardContainer>
    </Container>
  );
};

export default MyPokemon;
