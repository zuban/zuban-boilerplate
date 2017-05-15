/*
 *
 * SignupContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { Card } from 'react-toolbox/lib/card';
import { Button, IconButton } from 'react-toolbox/lib/button';

import makeSelectSignupContainer from './selectors';
import LoginHeader from '../../components/LoginHeader';
import Footer from '../../components/Footer';
import SignupForm from './signupForm';
import styles from './signup.css';
import { signUp } from './actions';

export class SignupContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  onSubmitSignUp(formArgs) {
    this.props.signUp(formArgs.get('email'), formArgs.get('username'), formArgs.get('password'));
  }

  render() {
    const { signupErrorMessage } = this.props.signupContainer;
    return (
      <div>
        <Helmet
          title="Slink: signup"
          meta={[
            { name: 'description', content: 'Description of SignupContainer' },
          ]}
        />
        <LoginHeader />
        <Card className={styles.signupForm}>
          <Button
            label="SIGN UP WITH FACEBOOK"
            raised
            primary
          />
          <h3
            style={{ textAlign: 'center' }}
            className={styles.loginHeader}
          >or</h3>

          {signupErrorMessage ?
            <h3 style={{ color: 'red', fontWeight: 'normal', margin: '0' }}>{signupErrorMessage}</h3> : null}
          <SignupForm onSubmit={(formArgs) => this.onSubmitSignUp(formArgs)} />
        </Card>
        <Footer />
      </div>
    );
  }
}

SignupContainer.propTypes = {
  signUp: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signupContainer: makeSelectSignupContainer(),
});

const mapDispatchToProps = {
  signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
