import React from 'react';
import { connect } from 'react-redux'
import Gravatar from 'react-gravatar';

import store from '../store';
import * as Actions from '../actions/auth';

const User = React.createClass({
    getInitialState() {
        return { errors: null };
    },
    componentDidMount(){
        store.dispatch({type:"REQ_RESET"});
    },
    updateForm(){
        this.refs.email.value = this.props.auth.email;
    },
    componentDidUpdate(){
        this.updateForm();
    },
    checkPassword(str) {
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        return re.test(str);
    },
    handleSubmit(event) {
        event.preventDefault();
        const email = this.refs.email.value;
        const pass = this.refs.pass.value;
        const pass2 = this.refs.pass2.value;
        var token = this.props.auth.token;

        if((pass!=undefined) && (pass != "")) {
            if (pass != pass2) {
                return this.setState({errors: "Passwords Do Not Match"});
            }
            if (!this.checkPassword(pass)) {
                return this.setState({errors: "Password too week"});
            }
            store.dispatch(Actions.updateUser(token, email, pass))
        }else{
            store.dispatch(Actions.updateEmail(token, email))
        }
    },
    render(){
        return (
            <div>
                <div className="widget-header cover overlay" >
                    <div className="overlay-panel overlay-background vertical-align">
                        <div className="vertical-align-middle">
                            <a className="">
                                <Gravatar className="widget-avatar" width="80px" height="80px" size={100} email={this.props.auth.email} />
                            </a>
                            <div className="font-size-20 margin-top-10">{this.props.auth.username}</div>
                            <div className="font-size-14">{this.props.auth.email}</div>
                        </div>
                    </div>
                </div>
                <div className="card content">
                    <div className="card-header white-text cyan server-heading">
                        <h1>Update Profile</h1>
                        <ul className="panel-info" style={{float:"left"}}>
                            <li>
                                {this.props.api.fetching && (
                                    <span className="label label-info">Updating</span>
                                )}
                                {this.props.api.error && (
                                    <span className="label label-danger">Update failed</span>
                                )}
                                {this.props.api.complete && (
                                    <span className="label label-success">Update Success</span>
                                )}
                            </li>
                        </ul>

                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit} className="form-horizontal" role="form">
                            <table className="table borderless">
                                <tbody>
                                <tr>
                                    <td>Email</td>
                                    <td>
                                        <input type="text" ref="email" id="form1" className="form-control" defaultValue={this.props.auth.email} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Password </td>
                                    <td>
                                        <input type="password" ref="pass" id="form1" className="form-control" placeholder="password" />
                                    </td>
                                </tr>

                                <tr>
                                    <td>Password</td>
                                    <td>
                                        <input type="password" ref="pass2" id="form1" className="form-control" placeholder="password" />
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="form-group">
                                <div className="col-md-3 col-lg-offset-3">
                                    <input type="submit" className="btn btn-primary" defaultValue="Update"/>
                                </div>
                                <div className="col-md-3">
                                    <button onClick={this.updateForm} className="btn btn-default btn-block">Cancel</button>
                    </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
});
const mapStateToProps = store => {
    return { auth: store.User, api: store.api }
};
export default connect(mapStateToProps)(User);