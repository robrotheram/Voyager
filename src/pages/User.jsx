import React from 'react';
import Nav from '../components/Nav';
import SideNav from '../components/SideNav';
import { connect } from 'react-redux'
import store from '../store';
import Gravatar from 'react-gravatar';
import bg from '../images/rivendell1.jpg';

const User = React.createClass({
    getInitialState: function () {
        return { checked: false };
    },
    onChildChanged: function(newState) {
        this.setState({ checked: newState });
    },

    render(){
        return (
            <div>
                <Nav initialChecked={this.state.checked} callbackParent={this.onChildChanged} />
                <div id="wrapper" className={this.state.checked ? 'toggled' : ''}>
                    <SideNav/>
                    <div id="page-content-wrapper" className="wrapper-content">
                        <div className="widget-header cover overlay" >
                            <img className="cover-image" src={"./dist/styles/"+bg} />
                            <div className="overlay-panel overlay-background vertical-align">
                                <div className="vertical-align-middle">
                                    <a className="">
                                        <Gravatar className="widget-avatar" width="80px" height="80px" email={this.props.auth.email} />
                                    </a>
                                    <div className="font-size-20 margin-top-10">{this.props.auth.username}</div>
                                    <div className="font-size-14">{this.props.auth.email}</div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid user-content">
                        <br/>
                        <div className="row ">
                            <div className="col-lg-12">
                                <h1>Edit User Profile</h1>
                            </div>
                        </div>
                            <div className="row">
                                <div className="col-md-12 personal-info">
                                    <form className="form-horizontal" role="form">
                                        <table className="table borderless">
                                            <tbody>
                                                <tr>
                                                    <td>User Name:</td>
                                                    <td><input className="form-control" type="text" defaultValue="Jane"/></td>
                                                </tr>
                                                <tr>
                                                    <td>Email:</td>
                                                    <td><input className="form-control" type="text" defaultValue="janesemail@gmail.com"/></td>
                                                </tr>
                                                <tr>
                                                    <td>Password:</td>
                                                    <td> <input className="form-control" type="password" defaultValue="11111122333"/></td>
                                                </tr>
                                                <tr>
                                                    <td>Confirm password:</td>
                                                    <td><input className="form-control" type="password" defaultValue="11111122333"/></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="form-group">
                                            <div className="col-md-3 col-lg-offset-3">
                                                <input type="button" className="btn btn-primary" defaultValue="Save Changes"/>
                                            </div>
                                            <div className="col-md-3">
                                                    <input type="reset" className="btn btn-default" defaultValue="Cancel"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
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