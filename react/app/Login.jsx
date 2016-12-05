import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory, withRouter } from 'react-router';
import '../styles/Login.scss'
import '../styles/label.scss'

import auth from './auth.jsx'
const Login = withRouter(
    React.createClass({
        getInitialState() {
            return {
                error: false
            }
        },

        handleSubmit(event) {
            event.preventDefault()

            const email = this.refs.email.value
            const pass = this.refs.pass.value

            auth.login(email, pass, (loggedIn) => {
                if (!loggedIn)
                    return this.setState({ error: true })

                const { location } = this.props

                if (location.state && location.state.nextPathname) {
                    this.props.router.replace(location.state.nextPathname)
                } else {
                    this.props.router.replace('/')
                }
            })
        },

        render() {
            return (

                <div className="jumbotron">
                    <div className="container">
                        <img src="images/logo.png" width="170px"/>
                        <h2>MDAT Login</h2>
                        {this.state.error && (
                            <span className="label label-danger">Bad login check username and password</span>
                        )}

                    </div>

                        <div className="box">
                            <form onSubmit={this.handleSubmit}>

                                <input type="email"  ref="email" placeholder="email" defaultValue="joe@example.com"/>
                                <input type="password" ref="pass" placeholder="password"  className="customform"/>
                                <button type="submit" className="btn btn-default waves-effect btn-rounded">sign in</button>
                                <a href="register.html" className="btn btn-cyan waves-effect btn-rounded" >Create Account </a>
                                </form>
                        </div>





                </div>

            )
        }
    })
);

export default Login;