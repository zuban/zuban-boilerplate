/**
 *
 * Footer
 *
 */

import React from 'react';
import styles from './footer.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <p
        className={styles.footerText}>
        Hand crafted with love by the slink team
      </p>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
