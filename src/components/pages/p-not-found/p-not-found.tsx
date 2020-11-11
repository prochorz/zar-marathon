import React from 'react';
import cx from 'classnames';
import { navigate } from 'hookrouter';

import s from './p-not-found.module.scss';

import { TMain } from '../../templates/t-main';
import { AButton } from '../../atoms/a-button';

import { LinkEnum } from '../../../hooks/useRouter';

export interface Props {
  render?: () => JSX.Element[] | JSX.Element;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const PNotFound: React.FC<Props> = (props) => {
  const { className } = props;

  const ctxClass = cx(s['p-not-found'], className);

  return (
    <TMain>
      <div className={ctxClass}>
        404
        <AButton onClick={() => navigate(LinkEnum.HOME)}>Go home</AButton>
      </div>
    </TMain>
  );
};

export default PNotFound;
