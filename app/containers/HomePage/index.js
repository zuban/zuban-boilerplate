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
import { Link } from 'react-router';
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
            <h2 className={styles.mainTitle}>How it works</h2>
          </div>
          <div className="row middle-xs">
            <div style={{ margin: '0 auto' }}>
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
          <div className={styles.textCenter}>
            <h2 className={styles.mainTitle}>What do I need to use Slink?</h2>
          </div>
          <div className={styles.textCenter}>
            <p className={styles.listLanding}>You need to use a smartpen and N-coded notebook and create an account in
              Slink.</p>
            <p className={styles.listLanding}>Smartpen is a ballpoint pen that records your handwriting on paper and
              transfers it to your mobile phone.</p>
            <p className={styles.listLanding}>Currently supported models include:
            </p>
            <div className={`row ${styles.listLanding}`}>
              <div className="col-sm-6">
                <Link className={styles.link} to={'http://www.neosmartpen.com/'}>Neo Smartpen</Link>&nbsp;
                <Link
                  className={styles.link}
                  to={'https://neosmartpen.freshdesk.com/support/solutions/articles/14000055348-faq'}
                >(Neo Smartpen
                  FAQ)</Link>
              </div>
              <div className="col-sm-6">
                <Link className={styles.link} to={'http://www.moleskine.com/microsites/smartwritingset'}>Moleskine
                  Pen+</Link>&nbsp;
                <Link className={styles.link} to={'http://www.moleskine.com/microsites/smartwritingset/description'}>(description)</Link>
              </div>
            </div>
          </div>
          <div className={styles.textCenter}>
            <h2 className={styles.mainTitle}>How do I get my notebooks (old and current) uploaded into Slink?</h2>
          </div>
          <div className="row middle-xs">
            <div style={{ margin: '0 auto', maxWidth: '500px' }}>
              <div>
                <ul>
                  <li><h3 className={styles.listLanding}>Connect to Adobe Creative Cloud to sync your pages (as SVG
                    files) to your computer as soon as you sync the pen with phone</h3></li>
                </ul>
                <ol>
                  <li><h3 className={styles.listLanding}>Register an adobe cloud id at&nbsp;
                    <Link className={styles.link} to={'https://accounts.adobe.com/'}>https://accounts.adobe.com</Link>
                  </h3></li>
                  <li><h3 className={styles.listLanding}>Download desktop sync&nbsp;
                    <Link className={styles.link} to={'https://www.adobe.com/creativecloud/desktop-app.html'}>https://www.adobe.com/creativecloud/desktop-app.html</Link>. Install it, run and login</h3></li>
                  <li><h3 className={styles.listLanding}>In NeoNotes app:</h3>
                    <ol>
                      <li><h3 className={styles.listLanding}>Go to Settings {'=>'} Authentication center, add Adobe
                        account</h3></li>
                      <li><h3 className={styles.listLanding}>Go to Auto Save Options {'=>'} turn on Adobe Creative
                        Cloud</h3></li>
                    </ol>
                  </li>
                </ol>
                <ul>
                  <li><h3 className={styles.listLanding}>Upload your pages (as SVG files) to Slink</h3></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.textCenter}>
            <h2 className={styles.mainTitle}>What are the main benefits of using Slink?</h2>
          </div>
          <div className="row middle-xs">
            <div style={{ margin: '0 auto', maxWidth: '500px' }}>
              <div>
                <ol>
                  <li><h3 className={styles.listLanding}>Slink sync handwritten data from smartpen to user’s online
                    account and makes data transcribed, organized, and searchable.</h3></li>
                  <li><h3 className={styles.listLanding}>Pages are organized by tags related to e.g. topics, notebooks,
                    and collaboration groups.</h3></li>
                  <li><h3 className={styles.listLanding}>Tags are initially generated automatically based on tags
                    written on paper (“#”and “@”) and can be managed by the user.</h3></li>
                  <li><h3 className={styles.listLanding}>Pages are shared with other users by using tags.</h3></li>
                  <li><h3 className={styles.listLanding}>Text and tag editors provide a convenient tool for rapid text
                    clean up and manual tagging.</h3></li>
                </ol>
              </div>
            </div>
          </div>
          <div className={styles.textCenter}>
            <h2 className={styles.mainTitle}>How do I share my pages with other users?</h2>
          </div>
          <div className={styles.textCenter}>
            <p className={styles.listLanding}>By sharing tags. Another user can be added to a list of users to whom the
              pages with this tag become visible. This allows flexible page, topic, project or book level sharing
              between groups of users, individual users, and public. Writing a shared tag on a page will share it
              automatically.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
