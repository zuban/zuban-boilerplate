/**
*
* LoginHeader
*
*/

import React from 'react';
// import styled from 'styled-components';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

class LoginHeader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppBar title="slink">
        <Navigation type="horizontal">
        </Navigation>
      </AppBar>
    );
  }
}

LoginHeader.propTypes = {

};

export default LoginHeader;
