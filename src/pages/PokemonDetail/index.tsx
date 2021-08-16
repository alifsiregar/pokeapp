import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Popup from 'reactjs-popup';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { useQuery } from '@apollo/client';
import {
  Container,
  Header,
  PokemonName,
  PokemonSprites,
  PokemonTypes,
  Type,
  LoadingContainer,
  Failed,
  PokemonMoveContainer,
  PokemonMoves,
  Move,
  ModalContainer,
  ModalText,
  ModalInput,
} from './styles';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { GET_POKEMON_DETAIL } from '../../queries';
import { IState } from '../../interfaces';

const PokemonDetail = ({ match }: RouteComponentProps<{name:string}>) : JSX.Element => {
  const [myPokemon, setMyPokemon] = useState<IState['myPokemonState']>([]);
  const [catchLoading, setCatchLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);
  const [emptyNickname, setEmptyNickname] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>('');
  const closeModal = () : void => setOpen(false);

  useEffect(() => {
    if (!sessionStorage.getItem('myPokemon')) {
      sessionStorage.setItem('myPokemon', JSON.stringify([]));
    }
    setMyPokemon(JSON.parse(sessionStorage.getItem('myPokemon')!));
  }, []);

  useEffect(() => {
    sessionStorage.setItem('myPokemon', JSON.stringify(myPokemon));
  }, [myPokemon]);

  const gqlVariables = {
    name: match.params.name,
  };

  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: gqlVariables,
  });

  const catchPokemon = () : void => {
    setFailed(false);
    setCatchLoading(true);
    const chance = Math.floor(Math.random() * 2);
    setTimeout(() => {
      if (chance === 0) {
        setCatchLoading(false);
        setOpen((o) => !o);
      } else {
        setCatchLoading(false);
        setFailed(true);
      }
    }, 1000);
  };

  const addPokemon = () : void => {
    setEmptyNickname(false);
    if (nickname !== '' && myPokemon.find((e) => e.nickname === nickname) === undefined) {
      setMyPokemon((prevPokemon) => [...prevPokemon, {
        id: data.pokemon.id,
        name: data.pokemon.name,
        nickname,
        image: data.pokemon.sprites.front_default,
      }]);
      closeModal();
    } else {
      setEmptyNickname(true);
    }
  };

  if (loading) return <Loading />;

  if ((!loading && data.pokemon.id === null) || error) return <Error />;

  return (
    <>
      <Container>
        <Header>
          <PokemonName>
            {data.pokemon.name.toUpperCase()}
          </PokemonName>
          <PokemonSprites src={data.pokemon.sprites.front_default} />
          <PokemonTypes>
            {data.pokemon.types.map((pokemon: IState['pokemonTypeMap']) => (
              <Type>
                <span>
                  {pokemon.type.name.toUpperCase()}
                </span>
              </Type>
            ))}
          </PokemonTypes>
        </Header>
        {catchLoading
          ? (
            <LoadingContainer style={{}}>
              <PropagateLoader color="#EDEDED" />
            </LoadingContainer>
          )
          : (
            <Button
              className="catch-button"
              margin="20px 0"
              text="Catch!"
              color="#DA0037"
              fontColor="#EDEDED"
              onClick={catchPokemon}
            />
          )}
        {failed
                    && (
                    <Failed>
                      <span>
                        The pokemon ran away :(
                        {' '}
                        <br />
                        Try again!
                      </span>
                    </Failed>
                    )}
        <PokemonMoveContainer>
          <h2>
            Move List
          </h2>
          <PokemonMoves>
            {data.pokemon.moves.map((pokemon: IState['pokemonMoveMap']) => (
              <Move>
                <span>
                  {pokemon.move.name.toUpperCase()}
                </span>
              </Move>
            ))}
          </PokemonMoves>
        </PokemonMoveContainer>
      </Container>

      <Popup
        overlayStyle={{ background: 'rgba(0,0,0,0.5)' }}
        open={open}
        closeOnDocumentClick={false}
        onClose={closeModal}
      >
        <ModalContainer>
          <ModalText>
            <h2>
              Caught!
            </h2>
            <span>
              Congratulations, you caught the wild
              {' '}
              <b>{data.pokemon.name.toUpperCase()}</b>
              ! You can give it a name to add it to your pokemon list or release it if you want.
            </span>
          </ModalText>
          <ModalInput
            onChange={(e) => setNickname(e.target.value)}
            placeholder="The name is..."
          />
          {emptyNickname
                        && (
                        <Failed className="failed-modal">
                          <span>
                            Pokemon name cannot be empty or pokemon name already exists!
                          </span>
                        </Failed>
                        )}
          <Button
            margin="10px 0"
            text="Accept Name"
            color="#171717"
            fontColor="#EDEDED"
            onClick={addPokemon}
          />
          <Button
            margin="10px 0"
            text="Release"
            color="#DA0037"
            fontColor="#EDEDED"
            onClick={closeModal}
          />
        </ModalContainer>
      </Popup>
    </>
  );
};

export default PokemonDetail;
