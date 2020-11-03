import React from 'react';
import cx from 'classnames';

import Header from './components/header';
import Footer from './components/footer';

import Style from './App.module.scss';

const App = () => {
  return (
    <div className={cx(Style.wrapper)}>
      <div className={cx(Style.content)}>
        <Header />
      </div>
      <div className={cx(Style.footer)}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
