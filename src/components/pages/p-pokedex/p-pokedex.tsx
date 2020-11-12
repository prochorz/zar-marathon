import React from 'react';
import cx from 'classnames';

import s from './p-pokedex.module.scss';

import { TMain } from '../../templates/t-main';
import { OPokedexList } from '../../unique-organisms/o-pokedex-list';

export interface Props {
  render?: () => JSX.Element[] | JSX.Element;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const PPokedex: React.FC<Props> = (props) => {
  const { className } = props;
  const ctxClass = cx(s['p-pokedex'], className);

  return (
    <TMain>
      <div className={ctxClass}>
        <OPokedexList />
      </div>
    </TMain>
  );
};

export default PPokedex;
