import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import s from './a-parallax.module.scss';

export interface Props {
  images: Array<string>;
  render?: () => JSX.Element[] | JSX.Element;
  className?: string;
}

const AParallax: React.FC<Props> = (props) => {
  const { images, className } = props;
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const ctxClass = cx(s['a-parallax'], className);

  const handlerMouseMove = (event: MouseEvent) => {
    setX(event.screenX);
    setY(event.screenY);
  };

  const translate = (index: number) => {
    const offset = 0.01 * (index + 2);
    return `translate(${x * offset}px, ${y * offset}px)`;
  };

  useEffect(() => {
    document.addEventListener('mousemove', handlerMouseMove);
    return () => document.removeEventListener('mousemove', handlerMouseMove);
  }, [x, y]);

  return (
    <div className={ctxClass}>
      {images.map((item, index) => {
        const key = `parallax${index}`;
        return (
          <div
            key={key}
            className={s['parallax--item']}
            style={{
              transform: translate(index),
            }}>
            <img src={item} alt="img" />
          </div>
        );
      })}
    </div>
  );
};

export default AParallax;
