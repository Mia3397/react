import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuthorizationUser = (Component) => {
  class WithAuthorizationUser extends React.Component {
        state = {
          userName: localStorage.user ? JSON.parse(localStorage.user).name : null
        };

        logout = () => {
          const { logout } = this.props;
          this.setState({
            userName: null
          }, () => {
            localStorage.removeItem('user');
            logout();
          });
        };

        render() {
          const { userName } = this.state;

          if (!userName) {
            return <Redirect to="/login" />;
          }

          // eslint-disable-next-line react/jsx-props-no-spreading
          return <Component {...this.props} userName={userName} logout={this.logout} />;
        }
  }

  return WithAuthorizationUser;
};

export default withAuthorizationUser;
