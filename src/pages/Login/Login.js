import React from 'react';
import { SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import connect from './connect';
import api from '../../methods/api';
import Form from './Form/Form';
import text from '../../constants/text';
import './Login.scss';

const Login = ({ signIn, history }) => {
  const getUsernameByITunes = (username) => api.getMusic({
    term: username,
    entity: 'song'
  });

  const submitValidate = ({ username, email, password }) => getUsernameByITunes(username)
    .then((res) => {
      const inCorrectUserName = R.pipe(
        R.path(['data', 'results']),
        R.filter(R.propEq('artistName', username)),
        R.length
      )(res);
      if (!username) {
        throw new SubmissionError({
          username: text.errorRequired
        });
      } else if (!inCorrectUserName) {
        throw new SubmissionError({
          username: 'Incorrect username'
        });
      } else if (!email) {
        throw new SubmissionError({
          email: text.errorRequired
        });
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        throw new SubmissionError({
          email: text.errorEmail
        });
      } else if (!password) {
        throw new SubmissionError({
          password: text.errorRequired
        });
      } else if (password.length < 8) {
        throw new SubmissionError({
          password: text.errorPassword
        });
      } else {
        signIn(username, email, password);
        history.push('/home/musicians');
      }
    });

  return (
    <div className="wrapper login">
      <h1>Sign in</h1>
      <Form submitValidate={submitValidate} />
    </div>
  );
};

Login.propTypes = {
  signIn: PropTypes.func.isRequired
};

export default connect(Login);
