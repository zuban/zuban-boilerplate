/**
 * Created by sergeyzubov on 17/03/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable';
import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';
import FormSelect from './formSelect';
import FormUsers from './formUsers';
import styles from './styles.css';
const renderTextField = (props) => (
  <Input
    type="text"
    label={props.label}
    error={props.touched && props.error}
    {...props.input}
  />
);

let TagModalForm = (props) => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    modalFiles,
    deleteTag,
  } = props;
  return (
    <form
      className={styles.classForm}
      onSubmit={handleSubmit}
    >
      <div>
        <Field
          name="modalTagName"
          component={renderTextField}
          placeholder="Edit label"
          label="Label"
        />
      </div>
      <div>
        <Field
          name="modalTagDescription"
          component={renderTextField}
          placeholder="Edit description"
          label="Description"
        />
      </div>
      <div className={styles.formRow}>
        <Field
          label="Select Documents"
          name="modalSelectedFiles"
          options={modalFiles}
          component={FormSelect}
        />
      </div>
      <div className={styles.formRow}>
        <Field
          label="Select Users"
          name="modalUsers"
          component={FormUsers}
        />
      </div>

      <div>
        <Button type="submit" label="SAVE" raised primary disabled={pristine || submitting} />{' '}
      </div>
    </form>
  );
};

TagModalForm = reduxForm({
  form: 'tagModalForm',
})(TagModalForm);

// You have to connect() to any reducers that you wish to connect to yourself
TagModalForm = connect(
  (state, props) => ({
    initialValues: {
      modalTagName: props.modalTagName,
      modalTagDescription: props.modalTagDescription,
      modalSelectedFiles: props.modalSelectedFiles,
      modalUsers: props.modalUsers,
    },
  })
)(TagModalForm);

export default TagModalForm;
