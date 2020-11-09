import React from 'react';
import cx from 'classnames';

import s from './m-pokemon-card.module.scss';

import { AHeading } from '../../atoms/a-heading';

interface IPokemonItemCard {
  name_clean: string;
  abilities: string[];
  stats: {
    attack: number;
    defense: number;
    [key: string]: number;
  };
  types: string[];
  img: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}

export interface Props {
  render?: () => JSX.Element[] | JSX.Element;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  data: IPokemonItemCard;
}

const MPokemonCard: React.FC<Props> = (props) => {
  const { className, data } = props;

  const ctxClass = cx(s['m-pokemon-card'], className);

  return (
    <div className={ctxClass}>
      <div className={s.infoWrap}>
        <AHeading size="xs" className={s.titleName}>
          {data.name_clean}
        </AHeading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{data.stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{data.stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>Fire</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={data.img} alt={data.name_clean} />
      </div>
    </div>
  );
};

export default MPokemonCard;
