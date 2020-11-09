import React from 'react';
import cx from 'classnames';

import s from './p-empty.module.scss';

import { TMain } from '../../templates/t-main';

export interface Props {
  render?: () => JSX.Element[] | JSX.Element;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const PEmpty: React.FC<Props> = (props) => {
  const { className } = props;

  const ctxClass = cx(s['p-empty'], className);

  return (
    <TMain>
      <div className={ctxClass}>Is Empty Page</div>
    </TMain>
  );
};

export default PEmpty;
