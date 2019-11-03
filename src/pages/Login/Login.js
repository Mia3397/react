import React from 'react';
import PropTypes from 'prop-types';
import connect from './connect';
import Form from './Form/Form';
import './Login.scss';


const Login = ({ signIn, history }) => {
  const onSignIn = ({ username, email, password }) => {
    signIn(username, email, password);
    history.push('/home/musicians');
  };

  return (
    <div className="wrapper login">
      <h1>Sign in</h1>
      <Form onSubmit={onSignIn} />
    </div>
  );
};

Login.propTypes = {
  signIn: PropTypes.func.isRequired
};

export default connect(Login);
