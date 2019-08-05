import './Auth.scss';

import React, { Component } from 'react';


export class Auth extends Component {
    state = {
        username: '',
        password: '',
    }

    componentDidMount() {
        if (localStorage.getItem('token')) {
            return this.props.history.replace('/');
        }
    }
    handleSignIn = () => {
        const { onSuccess } = this.props;
        const { username, password } = this.state;
        fetch('http://localhost:8888/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then(response => response.json())
            .then(data => {
                onSuccess(data);
            });
    }

    handleTextChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value,
        });
    }

    render() {
        const { username, password } = this.state;
        return (
            <div>
                <input onChange={this.handleTextChange} name="username" type="text" value={this.username} /><br />
                <input onChange={this.handleTextChange} name="password" type="text" value={this.password} /><br />
                <button onClick={this.handleSignIn}>Sign In</button>
            </div>
        );
    }
}