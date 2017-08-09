/*
 *
 * Java
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

export class Java extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ height: '100%' }}>
        <nav id="topNav" className="navbar fixed-top navbar-toggleable-sm">
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
              <span>☰</span>
            </button>
            <a className="navbar-brand page-scroll" href="#first">EdHunter</a>
            <div className="collapse navbar-collapse" id="collapsingNavbar">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    className="nav-link page-scroll" data-toggle="modal" title="A free Bootstrap theme"
                    href="/login"
                  >Войти/Зарегистрироваться</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section id="team" className="bg-light-gray bg-inverse" style={{ color: '#fff' }}>
        </section>
      </div>
    );
  }
}

Java.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Java);
