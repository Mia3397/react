import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import RenderField from '../RenderField/RenderField';
import { validate, asyncValidate } from '../../../utils/validations';
import text from '../../../constants/text';
import './Form.scss';


const Form = ({ reset, handleSubmit, pristine, submitting, invalid }) => (
  <form onSubmit={handleSubmit}>
    <Field
      component={RenderField}
      name="username"
      type="text"
      label={text.placeholderForUserInput}
    />
    <Field
      component={RenderField}
      name="email"
      type="email"
      label={text.placeholderForEmailInput}
    />
    <Field
      component={RenderField}
      name="password"
      type="password"
      label={text.placeholderForPasswordInput}
    />

    <div className="sign_in_actions">
      <button
        type="button"
        onClick={reset}
        disabled={pristine || submitting}
      >
        {text.buttonCancel}
      </button>
      <button type="submit" disabled={invalid}>
        {text.buttonSignIn}
      </button>
    </div>
  </form>
);

Form.propTypes = {
  reset: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
};


export default reduxForm({
  form: 'loginForm',
  validate,
  asyncValidate,
  asyncBlurFields: ['username']
})(Form);
