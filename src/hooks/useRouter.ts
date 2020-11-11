import React from 'react';
import { useRoutes } from 'hookrouter';

import { PHome } from '../components/pages/p-home';
import { PEmpty } from '../components/pages/p-empty';
import { PPokedex } from '../components/pages/p-pokedex';

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

interface IMenu {
  name: string;
  title: string;
  url: string;
  component: () => JSX.Element;
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

const routes = GENERAL_MENU.reduce<IAccMenu>((acc, item) => {
  acc[item.url] = item.component;
  return acc;
}, {});

export default function useRouter() {
  const match = useRoutes(routes);

  return { match };
}
