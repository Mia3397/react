import React, { useState } from 'react';
import { Input, Button } from 'antd';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import connect from './connect';
import text from '../../constants/text';
import './Login.scss';

const filledNames = {
  name: 'name',
  password: 'password',
  email: 'email'
};

const Login = ({ signIn, history }) => {
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleAction = {
    [filledNames.name]: setUserName,
    [filledNames.email]: setEmail,
    [filledNames.password]: setPassword
  };


  const onChange = ({ target: { name, value } }) => {
    handleAction[name](value);
  };

  const handleCancel = () => {
    R.forEach((func) => func(null), R.values(handleAction));
  };

  const onSignIn = () => {
    signIn(userName, email, password);
    history.push('/home/musicians');
  };

  return (
    <div className="wrapper login">
      <h1>Sign in</h1>
      <div className="sign_in">
        <Input
          placeholder={text.placeholderForUserInput}
          value={userName}
          name={filledNames.name}
          onChange={onChange}
        />
        <Input
          placeholder={text.placeholderForEmailInput}
          value={email}
          name={filledNames.email}
          onChange={onChange}
        />
        <Input.Password
          placeholder={text.placeholderForPasswordInput}
          value={password}
          name={filledNames.password}
          onChange={onChange}
        />
        <div className="sign_in_actions">
          <Button onClick={handleCancel}>
            {text.buttonCancel}
          </Button>
          <Button type="primary" onClick={onSignIn}>
            {text.buttonSignIn}
          </Button>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  signIn: PropTypes.func.isRequired
};

export default connect(Login);
