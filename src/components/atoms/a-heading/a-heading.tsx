import React from 'react';
import cx from 'classnames';

import s from './a-heading.module.scss';

export interface Props {
  className?: string;
  size?: string;
}

const AHeading: React.FC<Props> = (props) => {
  const { children, className } = props;

  const ctxClass = cx(s['a-heading'], className);

  return <div className={ctxClass}>{children}</div>;
};

export default AHeading;
