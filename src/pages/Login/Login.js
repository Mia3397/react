import React from 'react';
import {Input, Button} from 'antd';
import PropTypes from 'prop-types';
import connect from './connect';
import text from '../../constants/text';
import './Login.scss';

class Login extends React.Component {
    state = {
        userName: null,
        email: null,
        password: null
    };

    onChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    };

    handleCancel = () => {
        this.setState({
            userName: null,
            email: null,
            password: null
        })
    };

    signIn = (name) => () => {
        this.props.history.push('/musicians');
        this.props.signIn(name);
    };

    render() {
        const {userName, email, password} = this.state;

        return (
            <div className="wrapper">
                <h1>Sign in</h1>
                <div className="sign_in">
                    <Input
                        placeholder={text.placeholderForUserInput}
                        value={userName}
                        name="userName"
                        onChange={this.onChange}
                    />
                    <Input
                        placeholder={text.placeholderForEmailInput}
                        value={email}
                        name="email"
                        onChange={this.onChange}
                    />
                    <Input.Password
                        placeholder={text.placeholderForPasswordInput}
                        value={password}
                        name="password"
                        onChange={this.onChange}
                    />
                    <div className="sign_in_actions">
                        <Button onClick={this.handleCancel}>
                            {text.buttonCancel}
                        </Button>
                        <Button type="primary" onClick={this.signIn(userName)}>
                            {text.buttonSignIn}
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    signIn: PropTypes.func.isRequired
};

export default connect(Login);