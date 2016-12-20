import React from 'react';
import { connect } from 'react-redux'
import Gravatar from 'react-gravatar';

const User = React.createClass({
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
                    <div className="card-header white-text emeralde server-heading">
                        <h1>Update Profile</h1>

                        <ul className="panel-info">
                            <li>

                            </li>
                        </ul>

                    </div>
                    <div className="panel-body">
                        <form className="form-horizontal" role="form">
                            <table className="table borderless">
                                <tbody>
                                <tr>
                                    <td>Username</td>
                                    <td>
                                        <input type="text" ref="server_name" className="form-control" id="inputRounded" defaultValue={this.props.auth.username} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>
                                        <input type="text" ref="ip_address" id="form1" className="form-control" defaultValue={this.props.auth.email} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Password </td>
                                    <td>
                                        <input type="text" ref="ip_address" id="form1" className="form-control" placeholder="password" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Password</td>
                                    <td>
                                        <input type="text" ref="ip_address" id="form1" className="form-control" placeholder="password" />
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="form-group">
                                <div className="col-md-3 col-lg-offset-3">
                                    <input type="button" className="btn btn-primary" defaultValue="Update"/>
                                </div>
                                <div className="col-md-3">
                                    <input type="reset" className="btn btn-default" defaultValue="Cancel"/>
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
    return { auth: store.auth }
};
export default connect(mapStateToProps)(User);