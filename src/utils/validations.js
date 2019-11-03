import * as R from 'ramda';
import api from '../methods/api';
import text from '../constants/text';

const getUsernameByITunes = (username) => api.getMusic({
  term: username,
  entity: 'song'
});

export const asyncValidate = (values) => getUsernameByITunes(values.username).then((res) => {
  const inCorrectUserName = R.pipe(
    R.path(['data', 'results']),
    R.filter(R.propEq('artistName', values.username)),
    R.length
  )(res);
  if (!inCorrectUserName) {
    // eslint-disable-next-line no-throw-literal
    throw { username: 'Incorrect username' };
  }
});

export const validate = ({ username, email, password }) => {
  const errors = {};
  if (!username) {
    errors.username = text.errorRequired;
  }
  if (!email) {
    errors.email = text.errorRequired;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = text.errorEmail;
  }
  if (!password) {
    errors.password = text.errorRequired;
  } else if (password.length < 8) {
    errors.password = text.errorPassword;
  }
  return errors;
};
