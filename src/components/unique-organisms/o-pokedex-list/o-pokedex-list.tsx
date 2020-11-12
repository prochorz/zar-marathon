import React, { useLayoutEffect, useState } from 'react';
import cx from 'classnames';

import s from './o-pokedex-list.module.scss';

import { MPokemonCard } from '../../molecules/m-pokemon-card';

export interface Props {
  render?: () => JSX.Element[] | JSX.Element;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

function usePokemons() {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  async function getPokemons() {
    try {
      setIsLoading(true);
      const res = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
      const result = await res.json();
      setData(result);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useLayoutEffect(() => {
    getPokemons();
  }, []);

  return {
    data,
    isError,
    isLoading,
  };
}

const OPokedexList: React.FC<Props> = (props) => {
  const { className } = props;
  const {
    data: { total, pokemons },
    isError,
    isLoading,
  } = usePokemons();

  const ctxClass = cx(s['o-pokedex-list'], className);

  if (isError) {
    return <div>Shits happened..</div>;
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className={ctxClass}>
      {pokemons.map((item: any) => {
        return <MPokemonCard key={item.id} data={item} />;
      })}
      {total}
    </div>
  );
};

export default OPokedexList;
