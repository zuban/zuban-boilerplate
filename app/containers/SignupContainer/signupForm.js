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


const renderTextField = (props) => (
  <Input
    type="text"
    label={props.label}
    error={props.touched && props.error}
    {...props.input}
  />
);
const renderReqiuredTextField = (props) => (
  <Input
    type="text"
    label={props.label}
    required
    error={props.touched && props.error}
    {...props.input}
  />
);
const renderPasswordField = (props) => (
  <Input
    type="password"
    label={props.label}
    required
    error={props.touched && props.error}
    {...props.input}
  />
);

class SignupForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (

      <form onSubmit={handleSubmit}>
        <div>
          <Field name="username" component={renderReqiuredTextField} label="Name" />
        </div>
        <div>
          <Field name="about" component={renderTextField} label="About" />
        </div>
        <div>
          <Field name="email" component={renderReqiuredTextField} label="Email" />
        </div>
        <div>
          <Field name="password" component={renderPasswordField} label="Password" />
        </div>
        <div>
          <Button type="submit" label="Signup" raised primary disabled={pristine || submitting} />{' '}
        </div>
      </form >

    );
  }
}

SignupForm.propTypes = {};

export default reduxForm({
  form: 'signupForm',  // a unique identifier for this form
})(SignupForm);
