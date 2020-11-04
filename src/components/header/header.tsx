import React from 'react';
import cx from 'classnames';

import Style from './header.module.scss';

const MENU = [
  { key: 'menu-1', title: 'Home', url: 'Home' },
  { key: 'menu-2', title: 'Pokédex', url: 'Home' },
  { key: 'menu-3', title: 'Legendaries', url: 'Home' },
  { key: 'menu-4', title: 'Documentation', url: 'Home' },
];

const Logo = () => {
  return (
    <div>
      <a href="#" className={cx(Style['header--logo'])}>
        logo
      </a>
    </div>
  );
};

const Menu = () => {
  return (
    <ul className={Style['header--menu']}>
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
    <div className={cx(Style.header)}>
      <div className="container">
        <div className={cx(Style['header--inner'])}>
          <Logo />
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
