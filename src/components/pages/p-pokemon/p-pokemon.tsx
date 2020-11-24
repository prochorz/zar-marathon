import React from 'react';
import cx from 'classnames';

import s from './p-pokemon.module.scss';
import useGetData from '../../../hooks/useGetData';
import { PokemonRequest } from '../../../interface/pokemons';

export interface Props {
  id: string | number;
  className?: string;
}

const PPokemon: React.FC<Props> = (props) => {
  const { id, className } = props;
  const ctxClass = cx(s['p-pokemon'], className);
  const { data, isLoading } = useGetData<PokemonRequest>('getPokemon', { id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div className={ctxClass}>{data?.name}</div>;
};

export default PPokemon;
