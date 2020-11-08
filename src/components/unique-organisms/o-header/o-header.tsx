import React from 'react';
import cx from 'classnames';

import s from './o-header.module.scss';

import { ReactComponent as SVGLogo } from './assets/logo.svg';

interface IMenu {
  key: string;
  title: string;
  url: string;
}

const MENU: IMenu[] = [
  { key: 'menu-1', title: 'Home', url: '/' },
  { key: 'menu-2', title: 'Pokédex', url: '/pokedex' },
  { key: 'menu-3', title: 'Legendaries', url: '/home' },
  { key: 'menu-4', title: 'Documentation', url: '/home' },
];

const Logo = () => {
  return (
    <div>
      <a href="/" className={cx(s['header--logo'])}>
        <SVGLogo />
      </a>
    </div>
  );
};

const Menu = () => {
  return (
    <ul className={s['header--menu']}>
      {MENU.map((item) => {
        return (
          <li key={item.key}>
            <a href={item.url}>{item.title}</a>
          </li>
        );
      })}
    </ul>
  );
};

const Header = () => {
  return (
    <div className={cx(s.header)}>
      <div className="container">
        <div className={cx(s['header--inner'])}>
          <Logo />
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
