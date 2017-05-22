/*
 *
 * LoginContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { Button, IconButton } from 'react-toolbox/lib/button';
import { Card } from 'react-toolbox/lib/card';

import makeSelectLoginContainer from './selectors';
import LoginHeader from '../../components/LoginHeader';
import Footer from '../../components/Footer';
import LoginForm from './loginForm';
import styles from './login.css';
import { login } from './actions';

export class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  onSubmitLogin(formArgs) {
    this.props.login(formArgs.get('username'), formArgs.get('password'));
  }

  render() {
    const { loginErrorMessage, infoMessage } = this.props.loginContainer;

    return (
      <div>
        <Helmet
          title="Slink: login"
          meta={[
            { name: 'description', content: 'Description of LoginContainer' },
          ]}
        />
        <LoginHeader />
        <Card className={styles.loginForm}>
          <Button
            label="SIGN IN WITH FACEBOOK"
            raised
            primary
          />
          <h3
            style={{ textAlign: 'center' }}
            className={styles.loginHeader}
          >or</h3>

          {loginErrorMessage ? <h3 style={{ color: 'red', fontWeight: 'normal', margin: '0' }}>{loginErrorMessage}</h3> : null}

          <LoginForm onSubmit={(formArgs) => this.onSubmitLogin(formArgs)} />
        </Card>
        <Footer />
      </div>
    );
  }
}

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginContainer: makeSelectLoginContainer(),
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
