import React from 'react';
import cx from 'classnames';

import Style from './a-svg-icon.module.scss';

import { dynamicIcons } from './modules.svgr';

interface Props {
  path: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const ASvgIcon: React.FC<Props> = (props) => {
  const { onClick = () => {}, className = '', path } = props;
  const TagName = dynamicIcons[path || 'frame'];
  const localClassName = cx(Style['a-svg-icon'], 'svg-icon', className);

  return <TagName className={localClassName} onClick={onClick} />;
};

export default ASvgIcon;
