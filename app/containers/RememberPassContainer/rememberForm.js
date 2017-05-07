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
import styles from './remember.css';
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

class RememberForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form className={styles.rememberForm} onSubmit={handleSubmit}>
        <div>
          <Field name="email" component={renderTextField} label="Email" />
        </div>
        <div>
          <Button type="button" label="Send instructions" raised primary disabled={pristine || submitting} />{' '}
        </div>
      </form >
    );
  }
}

RememberForm.propTypes = {};

export default reduxForm({
  form: 'rememberForm',  // a unique identifier for this form
  validate,
})(RememberForm);
