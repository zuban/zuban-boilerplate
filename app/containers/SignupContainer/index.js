/*
 *
 * SignupContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectSignupContainer from './selectors';
import LoginHeader from '../../components/LoginHeader';
import Footer from '../../components/Footer';
import SignupForm from './signupForm';
export class SignupContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="SignupContainer"
          meta={[
            { name: 'description', content: 'Description of SignupContainer' },
          ]}
        />
        <LoginHeader />
        <SignupForm />
        <Footer />
      </div>
    );
  }
}

SignupContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SignupContainer: makeSelectSignupContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
