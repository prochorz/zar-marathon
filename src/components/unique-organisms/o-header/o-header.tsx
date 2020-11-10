import React from 'react';
import cx from 'classnames';
import { A, usePath } from 'hookrouter';

import s from './o-header.module.scss';

import { ASvgIcon } from '../../atoms/a-svg-icon';

import { GENERAL_MENU } from '../../../hooks/useRouter';

const Logo = () => {
  return (
    <div>
      <A href="/" className={cx(s['header--logo'])}>
        <ASvgIcon path="logo" />
      </A>
    </div>
  );
};

const Menu = () => {
  const path = usePath();

  return (
    <ul className={s['header--menu']}>
      {GENERAL_MENU.map((item) => {
        return (
          <li key={item.name}>
            <A
              href={item.url}
              className={cx({
                [s['--active']]: path === item.url,
              })}>
              {item.title}
            </A>
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
