/**
*
* Toolbar
*
*/

import React from 'react';
// import styled from 'styled-components';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import { Link } from 'react-router';
import styles from './styles.css';
import inputStyles from './inputStyles.css';
class Toolbar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppBar title="Documents view">
        <Input onChange={this.props.onChageText} theme={inputStyles} icon="search" type="text" name="name" />
        <Navigation style={{ color: 'rgb(255, 255, 255)' }}type="horizontal" >

          <IconMenu theme={styles} icon="more_vert" position="topRight" menuRipple>
            <MenuItem value="profile" icon="person" caption="Profile" />
            <MenuItem value="help" icon="help" caption="Help" />
            <MenuItem value="about" icon="about" caption="About" />
            <MenuDivider />
            <MenuItem value="signout" icon="exit_to_app" caption="Logout" />
          </IconMenu>
          <Link to={'/upload'}>
            <Button icon="file_upload" label="Upload" raised />
          </Link>
        </Navigation>
      </AppBar>
    );
  }
}

Toolbar.propTypes = {

};

export default Toolbar;
