import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory, withRouter } from 'react-router';
import store from '../store';
import { connect } from 'react-redux'

import {bindActionCreators} from 'redux';
import * as Actions from '../actions/auth';

const Login = withRouter(
    React.createClass({
        getInitialState() {
            return {
                error: false
            };
        },
        componentDidUpdate() {
            if(this.props.auth.authenticated){

                this.props.router.replace('dashboard');

            }
        },
        handleSubmit(event) {
            event.preventDefault();
            const email = this.refs.email.value;
            const pass = this.refs.pass.value;
            store.dispatch(Actions.authLogin(email,pass));
        },
        render() {
            return (
                <div className="jumbotron box-shadow">
                    <div className="container">
                        <img src="src/images/logo.png" width="170px"/>
                        <h2>MDAT Login</h2>
                        {this.props.auth.error && (
                            <span className="label label-danger">Bad login: {this.props.auth.msg}</span>
                        )}
                    </div>
                    {this.props.api.fetching && (
                        <div className="sk-folding-cube">
                            <div className="sk-cube1 sk-cube"></div>
                            <div className="sk-cube2 sk-cube"></div>
                            <div className="sk-cube4 sk-cube"></div>
                            <div className="sk-cube3 sk-cube"></div>
                        </div>
                    )}
                    <div className="box">
                        <form className="login-form" onSubmit={this.handleSubmit}>
                            <input type="text" ref="email" placeholder="username" defaultValue="bob3"/>
                            <input type="password" ref="pass" placeholder="pass" defaultValue="pass" />
                            <div className="row">
                                <div className="col-md-6">
                                    <button type="submit" className="btn btn-primary login-btn btn-block">sign in</button>
                                </div>
                                <div className="col-md-6">
                                    <a href="#/register" className="btn btn-success  login-btn btn-block" >Create Account </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    })
);
const mapStateToProps = store => {
    return { auth: store.auth, api: store.api }
};
export default connect(mapStateToProps)(Login);
