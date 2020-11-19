import React, { useState } from 'react';
import cx from 'classnames';

import s from './a-input.module.scss';

export interface Props {
  render?: () => JSX.Element[] | JSX.Element;
  className?: string;
  onChange: (value: string) => void;
}

const AInput: React.FC<Props> = (props) => {
  const { onChange, className } = props;
  const [value, setValue] = useState<string>('');

  const ctxClass = cx(s['a-input'], className);

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    onChange(event.target.value);
  }

  return (
    <div className={ctxClass}>
      <input type="text" value={value} onChange={onChangeHandler} />
    </div>
  );
};

export default AInput;
