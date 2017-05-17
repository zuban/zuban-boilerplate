/**
 *
 * LoginHeader
 *
 */

import React from 'react';
// import styled from 'styled-components';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import { Link } from 'react-router';

class LoginHeader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppBar
        title={<Link style={{ textDecoration: 'none' }} to={'/'}>
          <h2>Slink<p
            style={{
              display: 'inline-block',
              fontSize: '0.8em',
              fontWeight: '300',
            }}
          >&nbsp; beta</p></h2>
        </Link>}
      >
        <Navigation type="horizontal">
        </Navigation>
      </AppBar>
    );
  }
}

LoginHeader.propTypes = {};

export default LoginHeader;
