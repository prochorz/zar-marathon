import React, { PropsWithChildren } from 'react';
import { useRoutes } from 'hookrouter';

import { PHome } from '../components/pages/p-home';
import { PEmpty } from '../components/pages/p-empty';
import { PPokedex } from '../components/pages/p-pokedex';
import { PPokemon, Props as PokemonProps } from '../components/pages/p-pokemon';

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

interface IMenu {
  name: string;
  title: string;
  url: string;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export const GENERAL_MENU: IMenu[] = [
  {
    name: 'home',
    title: 'Home',
    url: LinkEnum.HOME,
    component: () => React.createElement(PHome),
  },
  {
    name: 'pokedex',
    title: 'Pokédex',
    url: LinkEnum.POKEDEX,
    component: () => React.createElement(PPokedex),
  },
  {
    name: 'legendaries',
    title: 'Legendaries',
    url: LinkEnum.LEGENDARIES,
    component: () => React.createElement(PPokedex),
  },
  {
    name: 'documentation',
    title: 'Documentation',
    url: LinkEnum.DOCUMENTATION,
    component: () => React.createElement(PEmpty),
  },
];

const SECOND_ROUTES: IMenu[] = [
  {
    name: 'home',
    title: 'Pokemon',
    url: LinkEnum.POKEMON,
    component: ({ id }: PokemonProps) => React.createElement(PPokemon, { id }),
  },
];

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce<IAccMenu>((acc, item) => {
  acc[item.url] = item.component;
  return acc;
}, {});

export default function useRouter() {
  const match = useRoutes(routes);

  return { match };
}
