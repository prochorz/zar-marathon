import React from 'react';
import cx from 'classnames';

import s from './p-home.module.scss';

import ImageBalls from '../../../assets/images/balls.png';
import ImageClouds from '../../../assets/images/clouds.png';
import ImagePikachu from '../../../assets/images/pikachu.png';

import { TMain } from '../../templates/t-main';
import { AParallax } from '../../atoms/a-parallax';
import { AButton, Color, Size } from '../../atoms/a-button';

export interface Props {
  className?: string;
}

const PHome: React.FC<Props> = (props) => {
  const { className } = props;

  const ctxClass = cx(s['p-home'], className);

  return (
    <TMain>
      <div className={ctxClass}>
        <AParallax images={[ImageClouds, ImageBalls, ImagePikachu]} />
        <AButton onClick={console.warn} isFullWidth>
          full width btn
        </AButton>
        <AButton onClick={console.warn} color={Color.yellow}>
          yellow btn
        </AButton>
        <AButton onClick={console.warn} size={Size.small}>
          small btn
        </AButton>
      </div>
    </TMain>
  );
};

export default PHome;
