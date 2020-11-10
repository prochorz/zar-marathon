import React from 'react';
import { useRoutes } from 'hookrouter';

import { PHome } from '../components/pages/p-home';
import { PEmpty } from '../components/pages/p-empty';
import { PPokedex } from '../components/pages/p-pokedex';

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
    url: '/',
    component: () => React.createElement(PHome),
  },
  {
    name: 'pokedex',
    title: 'Pokédex',
    url: '/pokedex',
    component: () => React.createElement(PPokedex),
  },
  {
    name: 'legendaries',
    title: 'Legendaries',
    url: '#',
    component: () => React.createElement(PPokedex),
  },
  {
    name: 'documentation',
    title: 'Documentation',
    url: '#',
    component: () => React.createElement(PEmpty),
  },
];

const routes = GENERAL_MENU.reduce<IAccMenu>((acc, item) => {
  acc[item.url] = item.component;
  return acc;
}, {});

export function getUrl(name: string): string {
  const item = GENERAL_MENU.find((item) => item.name === name);
  return item ? item.url : '/';
}

export default function useRouter() {
  const match = useRoutes(routes);

  return { match };
}
