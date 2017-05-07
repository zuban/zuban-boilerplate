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
import styles from './login.css';
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

class LoginForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div>
          <Field name="username" component={renderTextField} label="Username" />
        </div>
        <div>
          <Field name="email" component={renderTextField} label="Email" />
        </div>
        <div>
          <Button type="button" label="Submit" raised primary disabled={pristine || submitting} />{' '}
          <Button type="button" label="Clear Values" raised primary disabled={pristine || submitting} onClick={reset} />
        </div>
        <p> Want to <Link to={'/singup'}>signup?</Link></p>
        <p><Link to={'/reset-password'}>Forgotten</Link> your password?</p>
      </form >
    );
  }
}

LoginForm.propTypes = {};

export default reduxForm({
  form: 'loginForm',  // a unique identifier for this form
  validate,
})(LoginForm);
