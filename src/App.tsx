import React from 'react';
import cx from 'classnames';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PHome } from './components/pages/p-home';
import { PPokedex } from './components/pages/p-pokedex';
import { OHeader } from './components/unique-organisms/o-header';
import { OFooter } from './components/unique-organisms/o-footer';

import Style from './App.module.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className={cx(Style.wrapper)}>
        <div className={cx(Style.content)}>
          <OHeader />
        </div>
        <Switch>
          <Route path="/" exact component={PHome} />
          <Route path="/pokedex" component={PPokedex} />
        </Switch>
        <div className={cx(Style.footer)}>
          <OFooter />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
