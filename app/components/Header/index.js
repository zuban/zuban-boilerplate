/**
 *
 * Header
 *
 */

import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <FlatButton label="Default" />
        <FlatButton label="Primary" primary />
        <FlatButton label="Secondary" secondary />
        <FlatButton label="Disabled" disabled />
        <br />
        <br />
        <FlatButton label="Full width" fullWidth />
      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
