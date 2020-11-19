import React from 'react';
import cx from 'classnames';

import s from './o-pokedex-list.module.scss';

import { MPokemonCard } from '../../molecules/m-pokemon-card';

import useGetData from '../../../hooks/useGetData';

import { IPokemons, PokemonRequest } from '../../../interface/pokemons';

export interface Props {
  render?: () => JSX.Element[] | JSX.Element;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  search?: string;
}

const OPokedexList: React.FC<Props> = (props) => {
  const { className, search } = props;
  const ctxClass = cx(s['o-pokedex-list'], className);

  const { data, isError, isLoading } = useGetData<IPokemons>('getPokemons', { name: search }, [search]);

  if (isError) {
    return <div>Shits happened..</div>;
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className={ctxClass}>
      {data &&
        data.pokemons.map((item: PokemonRequest) => {
          return <MPokemonCard key={item.id} data={item} />;
        })}
      {data && data.total}
    </div>
  );
};

export default OPokedexList;
