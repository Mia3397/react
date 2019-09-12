import React, {Component} from 'react';
import Input from '../../components/Input/Input';
import './Repositories.css';

class Repositories extends Component {
    state = {
        email: '',
        name: ''
    };

    onChange = ({target}) => {
        const {name, value} = target;
        this.setState({
            [name]: value
        })
    };


    render() {
        const {email, name} = this.state;
        return (
            <div className="wrapper">
                <h1>Repositories</h1>
                <div className="input-wrapper">
                    <Input
                        name="email"
                        onChange={this.onChange}
                        placeholder="Email"
                        value={email}

                    />
                    <Input
                        name="name"
                        onChange={this.onChange}
                        placeholder="Name"
                        value={name}
                    />
                </div>

            </div>
        )
    }
}

export default Repositories;