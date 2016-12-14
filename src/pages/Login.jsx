import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory, withRouter } from 'react-router';
import store from '../store';

const Login = withRouter(
    React.createClass({
        getInitialState() {
            return {
                error: false
            };
        },
        handleSubmit(event) {
            var auth = store.getState().auth;

            event.preventDefault();

            const email = this.refs.email.value;
            const pass = this.refs.pass.value;

            if(email=="joe@example.com" && pass =="password1"){
                store.dispatch({type:"LOG_IN"});
                const { location } = this.props;

                if (location.state && location.state.nextPathname)
                    this.props.router.replace(location.state.nextPathname);
                else
                    this.props.router.replace('#/dashboard');
            }else{
                return this.setState({ error: true });
            }
        },
        render() {
            return (
                <div className="jumbotron box-shadow">
                    <div className="container">
                        <img src="src/images/logo.png" width="170px"/>
                        <h2>MDAT Login</h2>
                        {this.state.error && (
                            <span className="label label-danger">Bad login check username and password</span>
                        )}
                    </div>
                    {this.state.loading && (
                        <div className="sk-folding-cube">
                            <div className="sk-cube1 sk-cube"></div>
                            <div className="sk-cube2 sk-cube"></div>
                            <div className="sk-cube4 sk-cube"></div>
                            <div className="sk-cube3 sk-cube"></div>
                        </div>
                    )}
                    <div className="box">
                        <form className="login-form" onSubmit={this.handleSubmit}>
                            <input type="email" ref="email" placeholder="email" defaultValue="joe@example.com"/>
                            <input type="password" ref="pass" placeholder="password" />
                            <div className="row">
                                <div className="col-md-6">
                                    <button type="submit" className="btn btn-primary login-btn btn-block">sign in</button>
                                </div>
                                <div className="col-md-6">
                                    <a href="register.html" className="btn btn-success  login-btn btn-block" >Create Account </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    })
);
export default Login;
