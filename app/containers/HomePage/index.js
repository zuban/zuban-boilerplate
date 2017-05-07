/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

// components
import LandingHeader from '../../components/LandingHeader';
import Footer from '../../components/Footer';
import styles from './home.css';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <LandingHeader />
        <div>
          <div className={styles.textCenter}>
            <h2>What is GitHub Pages?</h2>
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}
