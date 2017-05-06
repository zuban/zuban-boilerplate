/**
 *
 * Header
 *
 */

import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styles from './header.css';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className={styles.header} >
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">EdHunter</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Вход</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Регистрация</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
