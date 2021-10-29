import React, { Component } from 'react'
import FormPage from './FormPage'
import LoginForm from './Form/LoginForm'
export default class Login extends Component {
    render() {
        return (
            <div className="login-cover">
                <div className="login">
                <FormPage title="Log in" form={LoginForm}/>
            </div>
            </div>
        )
    }
}
