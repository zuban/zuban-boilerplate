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
import { Card } from 'react-toolbox/lib/card';
import styles from './signup.css';
import { Link } from 'react-router';
const validate = (values) => {
  const errors = {};
  const requiredFields = ['username', 'email'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const renderTextField = (props) => (
  <Input
    type="text"
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
      <Card className={styles.signupForm} >
        <h1 className={styles.signupHeader}>Signup to Slink!</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <Field name="name" component={renderTextField} label="Name" />
          </div>
          <div>
            <Field name="about" component={renderTextField} label="About" />
          </div>
          <div>
            <Field name="email" component={renderTextField} label="Email" />
          </div>
          <div>
            <Field name="password" component={renderTextField} label="Password" />
          </div>
          <div>
            <Button type="button" label="Signup" raised primary disabled={pristine || submitting} />{' '}
          </div>
        </form >
      </Card>
    );
  }
}

SignupForm.propTypes = {};

export default reduxForm({
  form: 'signupForm',  // a unique identifier for this form
  validate,
})(SignupForm);
