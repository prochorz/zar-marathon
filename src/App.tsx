import React from 'react';
import cx from 'classnames';

import Style from './App.module.scss';

const App = () => {
  return <div className={cx(Style.header, 'color')}>Hi</div>;
};

export default App;
