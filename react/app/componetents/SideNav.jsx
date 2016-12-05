import React from 'react';
import ReactDOM from 'react-dom';
import style from '../../styles/Sidenav.scss'
var SideNav = React.createClass({
    render: function() {
        return (
            <div id="sidebar-wrapper" className="wrapper-content">
                <div className="site-menubar-header">
                    <div className="cover overlay">
                        <img className="cover-image" src="http://getbootstrapadmin.com/remark/material/center/assets/examples/images/dashboard-header.jpg" alt="..."/>
                        <div className="overlay-panel vertical-align overlay-background">
                            <div className="vertical-align-middle">
                                <a className="avatar avatar-lg" href="javascript:void(0)">
                                    <img width="120px" src="images/mc/Minecraft%20Main%20Character.png" alt="" />
                                </a>
                                <div className="site-menubar-info">
                                    <h5 className="site-menubar-user">Machi</h5>
                                    <p className="site-menubar-email">machidesign@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-menubar-body scrollable scrollable-inverse is-enabled scrollable-vertical" >
                    <div className="scrollable-container">
                        <div className="scrollable-content" >
                            <ul className="site-menu">
                                <li className="site-menu-item has-sub">
                                    <a href="dashboard.html">
                                        <span className="site-menu-title">Overview Dashboard</span>
                                        <div className="site-menu-badge">
                                            <span className="badge badge-success">3</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="site-menu-item has-sub">
                                    <a href="world.html">
                                        <span className="site-menu-title">Per World</span>
                                        <span className="fa fa-angle-right site-menu-arrow"></span>
                                    </a>
                                </li>
                                <li className="site-menu-item has-sub">
                                    <a href="server.html">
                                        <span className="site-menu-title">Server Settings</span>
                                        <span className="fa fa-angle-right site-menu-arrow"></span>
                                    </a>
                                </li>
                                <li className="site-menu-item has-sub">
                                    <a href="users.html">
                                        <span className="site-menu-title">Profile Settings</span>
                                        <span className="fa fa-angle-right site-menu-arrow"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="scrollable-bar scrollable-bar-vertical scrollable-bar-hide" draggable="false"><div className="scrollable-bar-handle"></div></div></div>
            </div>
        );
    }
});

export default SideNav