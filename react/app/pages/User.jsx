import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory, withRouter } from 'react-router'
import Nav from '../componetents/Nav.jsx'
import SideNav from '../componetents/SideNav.jsx'
import CardTitles from '../cards/CardTitles.jsx'
import CardWorldData from '../cards/CardWorldData.jsx'
import CardLeaflet from '../cards/CardLeaflet.jsx'
import CardTimeline from '../cards/CardTimeline.jsx'


import style from '../../styles/Server.scss'
import widget from '../../styles/widget.scss'
import overlay from '../../styles/overlay.scss'

const User = React.createClass({
    getInitialState: function () {
        return { checked: false };
    },
    onChildChanged: function(newState) {
        this.setState({ checked: newState });
    },
    render(){
        return(
            <div>
                <Nav initialChecked={this.state.checked} callbackParent={this.onChildChanged}  />
                <div id="wrapper" className={this.state.checked ? 'toggled' : ''}>
                    <SideNav/>
                    <div id="page-content-wrapper" className="wrapper-content">
                        <div className="widget-header cover overlay" >
                            <img className="cover-image" src="images/bg.png"/>
                            <div className="overlay-panel overlay-background vertical-align">
                                <div className="vertical-align-middle">
                                    <a className="" href="javascript:void(0)">
                                        <img  className="widget-avatar" width="80px" height="80px" src="images/mc/Minecraft%20Main%20Character.png" alt="" />
                                    </a>
                                    <div className="font-size-20 margin-top-10">MACHI</div>
                                    <div className="font-size-14">machidesign@163.com</div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid user-content">
                        <br/>
                        <div className="row ">
                            <div className="col-lg-12">
                                <h1>Edit Profile</h1>
                            </div>
                        </div>
                            <div className="row">
                                <div className="col-md-12 personal-info">
                                    <form className="form-horizontal" role="form">
                                        <table className="table borderless">
                                            <tbody>
                                                <tr>
                                                    <td>Profile Name:</td>
                                                    <td><input className="form-control" type="text" defaultValue="Jane"/></td>
                                                </tr>
                                                <tr>
                                                    <td>Group:</td>
                                                    <td><input className="form-control" type="text" defaultValue=""/></td>
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
        )
    }
});

export default User;