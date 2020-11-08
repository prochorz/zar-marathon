import React from 'react';
import cx from 'classnames';

import s from './a-button.module.scss';

export enum Color {
  green = 'green',
  yellow = 'yellow',
}

export enum Size {
  small = 'small',
  medium = 'medium',
}

export interface Props {
  render?: () => JSX.Element[] | JSX.Element;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isFullWidth?: boolean;
  color?: Color;
  size?: Size;
}

const AButton: React.FC<Props> = (props) => {
  const { children, isFullWidth = false, color = Color.green, size = Size.medium, onClick, className } = props;

  const ctxClass = cx(
    s['a-button'],
    {
      [s['button--full-width']]: isFullWidth,
      [s['button--small']]: size === Size.small,
      [s['button--medium']]: size === Size.medium,
      [s['button--green']]: color === Color.green,
      [s['button--yellow']]: color === Color.yellow,
    },
    className,
  );

  return (
    <button type="button" className={ctxClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default AButton;
