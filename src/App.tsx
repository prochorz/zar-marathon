import React from 'react';
import cx from 'classnames';

import './custom.css';
import Style from './App.modules.scss';

const App = (): JSX.Element => {
    return (
        <div className={cx(Style.header, 'color')}>
            Hi
        </div>
    )
}

export default App;