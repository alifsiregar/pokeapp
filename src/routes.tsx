import Error from './components/Error';
import {
  Home,
  PokemonDetail,
  MyPokemon,
} from './pages';

export const routes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    name: 'My Pokemon',
    path: '/my-pokemon',
    exact: false,
    component: MyPokemon,
  },
  {
    name: 'Pokemon Detail',
    path: '/pokemon/:name',
    exact: false,
    component: PokemonDetail,
  },
  {
    name: 'Error Page',
    exact: false,
    component: Error,
  },
];
