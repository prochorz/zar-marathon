import React from 'react';
import cx from 'classnames';

import s from './t-main.module.scss';

import { OHeader } from '../../unique-organisms/o-header';
import { OFooter } from '../../unique-organisms/o-footer';

export interface Props {
  render?: () => JSX.Element[] | JSX.Element;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const TMain: React.FC<Props> = (props) => {
  const { children, className } = props;

  const ctxClass = cx(s['t-main'], className);

  return (
    <div className={ctxClass}>
      <div className={cx(s.content)}>
        <OHeader />
      </div>
      <div className="container">{children}</div>
      <div className={cx(s.footer)}>
        <OFooter />
      </div>
    </div>
  );
};

export default TMain;
