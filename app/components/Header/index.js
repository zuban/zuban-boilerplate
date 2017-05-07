/**
 *
 * Header
 *
 */

import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { cyan50 } from 'material-ui/styles/colors';
import slinkIcon from './webpack.svg';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppBar
        title={<div><object style={{ verticalAlign: 'middle' }} type="image/svg+xml" data={slinkIcon} />slink</div>}
        style={{ color: cyan50 }}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementRight={<FlatButton primary label="Login" />}
      />
    );
  }
}

Header.propTypes = {};

export default Header;
