import React from 'react';
import cx from 'classnames';

import s from './p-pokedex.module.scss';

export interface Props {
  render?: () => JSX.Element[] | JSX.Element;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const PPokedex: React.FC<Props> = (props) => {
  const { children, className } = props;

  const ctxClass = cx(s['p-pokedex'], className);

  return <div className={ctxClass}>{children}</div>;
};

export default PPokedex;
