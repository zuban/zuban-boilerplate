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
import image from './sample.png';
export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <LandingHeader />
        <div>
          <div className={styles.textCenter}>
            <h2 className={styles.mainTitle}>How it works</h2>
          </div>
          <div className="row middle-xs">
            <div style={{margin: '0 auto'}} >
              <div>
                <ol>
                  <li><h3 className={styles.listLanding}>Use a smartpen</h3></li>
                  <li><h3 className={styles.listLanding}>Tag #content while writing</h3></li>
                  <li><h3 className={styles.listLanding}>Upload your books to Slink</h3></li>
                  <li><h3 className={styles.listLanding}>Clean up tags and transcription</h3></li>
                  <li><h3 className={styles.listLanding}>Navigate your notes by tags and search</h3></li>
                  <li><h3 className={styles.listLanding}>Collaborate by sharing tags</h3></li>
                </ol>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}
