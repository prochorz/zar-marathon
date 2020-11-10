import React from 'react';
import cx from 'classnames';

import s from './o-pokedex-list.module.scss';

import { MPokemonCard } from '../../molecules/m-pokemon-card';

import { pokemons } from './mocked';

export interface Props {
  render?: () => JSX.Element[] | JSX.Element;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const OPokedexList: React.FC<Props> = (props) => {
  const { className } = props;

  const ctxClass = cx(s['o-pokedex-list'], className);

  return (
    <div className={ctxClass}>
      {pokemons.map((item) => {
        return <MPokemonCard key={item.id} data={item} />;
      })}
    </div>
  );
};

export default OPokedexList;
