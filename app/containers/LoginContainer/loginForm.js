/**
 *
 * LoginForm
 *
 */

import React from 'react';
// import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form/immutable';
import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';
import { Link } from 'react-router';


const renderTextField = (props) => (
  <Input
    type="text"
    label={props.label}
    required
    error={props.touched && props.error}
    {...props.input}
  />
);

class LoginForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="username" component={renderTextField} label="Username" />
        </div>
        <div>
          <Field name="email" component={renderTextField} label="Email" />
        </div>
        <div>
          <Button type='submit' label="Sign in" raised primary disabled={pristine || submitting} />{' '}
        </div>
        <p style={{color: 'rgb(120, 144, 156)'}}>Don't have an account? <Link style={{color: 'rgb(120, 144, 156)'}} to={'/signup'}>Sign up</Link></p>
        <p style={{color: 'rgb(120, 144, 156)'}}><Link style={{color: 'rgb(120, 144, 156)'}} to={'/remember'}>Forgot</Link> your password?</p>
      </form >

    );
  }
}

LoginForm.propTypes = {};

export default reduxForm({
  form: 'loginForm',  // a unique identifier for this form
})(LoginForm);
