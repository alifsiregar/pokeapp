import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import {
  Container,
  Header,
  Title,
  Subtitle,
  Owned,
  ContentContainer,
  ButtonContainer,
  CardContainer,
  PageButton,
} from './styles';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import { GET_POKEMONS } from '../../queries';
import { IState } from '../../interfaces';
import Error from '../../components/Error';

const Home = () : JSX.Element => {
  const [myPokemon, setMyPokemon] = useState<IState['myPokemonState']>([]);
  const [pageOffset, setPageOffset] = useState<number>(0);

  useEffect(() => {
    if (!sessionStorage.getItem('myPokemon')) {
      sessionStorage.setItem('myPokemon', JSON.stringify([]));
    }

    if (!sessionStorage.getItem('pageOffset')) {
      sessionStorage.setItem('pageOffset', '0');
    }

    setPageOffset(parseInt(sessionStorage.getItem('pageOffset')!));
    setMyPokemon(JSON.parse(sessionStorage.getItem('myPokemon')!));
  }, []);

  const gqlVariables = {
    limit: 12,
    offset: pageOffset,
  };

  const [getPokemons, { loading, error, data }] = useLazyQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  useEffect(() => {
    sessionStorage.setItem('pageOffset', pageOffset.toString());
  }, [pageOffset]);

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
    <>
      <Container title="Homepage">
        <Header>
          <Title>
            POKEAPP
          </Title>
          <Subtitle>
            Catch em all!
          </Subtitle>
          <Owned>
            Pokemon Owned:
            {' '}
            {myPokemon.length}
          </Owned>
        </Header>
        <ContentContainer>
          <ButtonContainer>
            <PageButton
              disabled={pageOffset === 0}
              onClick={() => {
                setPageOffset(pageOffset - 12);
              }}
            >
              Prev
            </PageButton>
            <PageButton
              disabled={!!(data && pageOffset === data.pokemons.count)}
              onClick={() => {
                setPageOffset(pageOffset + 12);
              }}
            >
              Next
            </PageButton>
          </ButtonContainer>
          <CardContainer>
            {!loading && data
                            && data.pokemons.results.map((pokemon: IState['pokemonCardMap']) => (
                              <Card
                                key={pokemon.id}
                                name={pokemon.name}
                                image={pokemon.image}
                              />
                            ))}
          </CardContainer>
          <ButtonContainer>
            <PageButton
              disabled={pageOffset === 0}
              onClick={() => {
                setPageOffset(pageOffset - 12);
              }}
            >
              Prev
            </PageButton>
            <PageButton
              disabled={!!(data && pageOffset === data.pokemons.count)}
              onClick={() => {
                setPageOffset(pageOffset + 12);
              }}
            >
              Next
            </PageButton>
          </ButtonContainer>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Home;
