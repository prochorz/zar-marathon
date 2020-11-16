import React, { useState } from 'react';
import cx from 'classnames';

import s from './p-pokedex.module.scss';

import { TMain } from '../../templates/t-main';
import { AInput } from '../../atoms/a-input';
import { OPokedexList } from '../../unique-organisms/o-pokedex-list';

export interface Props {
  render?: () => JSX.Element[] | JSX.Element;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const PPokedex: React.FC<Props> = (props) => {
  const { className } = props;
  const [search, setSearch] = useState<string>('');

  const ctxClass = cx(s['p-pokedex'], className);

  return (
    <TMain>
      <div className={ctxClass}>
        <AInput onChange={setSearch} />
        <OPokedexList search={search} />
      </div>
    </TMain>
  );
};

export default PPokedex;
