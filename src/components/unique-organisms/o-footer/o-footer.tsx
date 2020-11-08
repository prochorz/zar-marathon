import React from 'react';
import cx from 'classnames';

import Style from './o-footer.module.scss';

const Footer = () => {
  return (
    <div className={cx(Style.footer)}>
      <div className="container">
        <div className={cx(Style['footer--inner'])}>
          <p>
            Make with
            <span aria-label="love" role="img">
              {' '}
              ❤️{' '}
            </span>
          </p>
          <a href="/">Ours Team️</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
