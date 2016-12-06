import React from 'react';
import ReactDOM from 'react-dom';
import style from '../../styles/Sidenav.scss'
import badge from '../../styles/badge.scss'
var SideNavLinks = React.createClass({
    render: function() {
        return (
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
        );
    }
});

export default SideNavLinks