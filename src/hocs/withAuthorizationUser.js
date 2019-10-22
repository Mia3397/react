import React from 'react';
import {Redirect} from 'react-router-dom';

const withAuthorizationUser = (Component) => {
    class WithAuthorizationUser extends React.Component {
        state = {
            userName: localStorage.user ? JSON.parse(localStorage.user).name : null
        };

        logout = () => {
            this.setState({
                userName: null
            }, () => {
                localStorage.removeItem('user');
                this.props.logout();
            });
        };

        render() {
            const { userName } = this.state;

            if (!userName) {
                return <Redirect to="/login" />
            }

            return <Component {...this.props} {...userName} logout={this.logout} />
        }
    }

    return WithAuthorizationUser;
};

export default withAuthorizationUser;