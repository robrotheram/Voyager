import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory, withRouter } from 'react-router';
import * as Actions from '../actions/auth';
import { connect } from 'react-redux'
import store from '../store';

const Register = withRouter(
    React.createClass({
        getInitialState() {
            return { errors: null };
        },
        checkPassword(str) {
            var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
            return re.test(str);
        },
        componentDidMount() {
            store.dispatch({type:"REGISTERED_RESET"})
        },

        handleSubmit(event) {
            event.preventDefault();
            const username = this.refs.username.value;
            const email = this.refs.email.value;
            const pass = this.refs.pass.value;
            const pass2 = this.refs.pass2.value;
            if (pass != pass2){
                return this.setState({ errors: "Passwords Do Not Match" });
            }
            if(!this.checkPassword(pass)){
                return this.setState({ errors: "Password too week" });
            }
            store.dispatch(Actions.authRegistered(username,email,pass))
        },
        render() {
            return (
                <div className="jumbotron box-shadow">

                    <div className="container">
                        <img src="src/images/logo.png" width="170px"/>
                        <h2>MDAT Register</h2>
                        {this.state.errors && (
                            <span className="label label-danger">{this.state.errors}</span>
                        )}
                        {this.props.register.registered && (
                            <span className="label label-success">You are now registered please sign in</span>
                        )}
                        {this.props.register.error != "" && (
                            <span className="label label-danger">{this.props.register.error}</span>
                        )}


                    </div>

                    <div className="box">
                        <form className="login-form" onSubmit={this.handleSubmit}>
                            <input type="text" ref="username" placeholder="username" defaultValue="Test"/>
                            <input type="email" ref="email" placeholder="email" defaultValue="joe@example.com"/>
                            <input type="password" ref="pass" placeholder="password" defaultValue="Test123"/>
                            <input type="password" ref="pass2" placeholder="password"  defaultValue="Test123"/>
                            <div className="row">
                                <div className="col-md-6">
                                    <button type="submit" className="btn btn-primary login-btn btn-block">Register</button>
                                </div>
                                <div className="col-md-6">
                                    <a href="#/login" className="btn btn-success login-btn btn-block" >Sign in </a>
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
    console.log(store);
    return { register: store.register, api: store.api }
};
export default connect(mapStateToProps)(Register);
