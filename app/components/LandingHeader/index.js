/**
 *
 * LandingHeader
 *
 */

import React from 'react';
// import styled from 'styled-components';

import { Button } from 'react-toolbox/lib/button';
import { Link } from 'react-router';

import styles from './landingHeader.css';
class LandingHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className={styles.firstBlock}>
          <div>
          </div>
        </div>
        <div className={styles.firstBlockText}>
          <h1 className={styles.slogan} >Slink</h1>
          <h3 className={styles.about}>Productivity solution for smartpens</h3>
          <p className={styles.description}>Handwritting on paper is transcribed, organized by handwritten tags and accessible in the cloud.
          </p>
          <Link to={'/login'}>
            <Button raised label="LOGIN" />
          </Link>{'  '}
          <Link to={'/signup'}>
            <Button raised label="SIGNUP" />
          </Link>
          <div style={{ marginTop: '5px' }}>
            <Link to={'/demo'}>
              <Button raised label="DEMO" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

LandingHeader.propTypes = {};

export default LandingHeader;
