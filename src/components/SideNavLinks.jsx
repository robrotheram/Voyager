import React from 'react';
var SideNavLinks = React.createClass({
    render: function() {
        return (
        <ul className="site-menu">
            <li className="site-menu-item has-sub">
                <a href="#/dashboard">
                    <span className="site-menu-title">Overview Dashboard</span>
                    <div className="site-menu-badge">
                        <span className="badge badge-success">3</span>
                    </div>
                </a>
            </li>
            <li className="site-menu-item has-sub">
                <a href="#/world">
                    <span className="site-menu-title">Per World</span>
                    <span className="fa fa-angle-right site-menu-arrow"></span>
                </a>
            </li>
            <li className="site-menu-item has-sub">
                <a href="#/world">
                    <span className="site-menu-title">Per Player</span>
                    <span className="fa fa-angle-right site-menu-arrow"></span>
                </a>
            </li>
            <li className="site-menu-item has-sub">
                <a href="#/server">
                    <span className="site-menu-title">Server Settings</span>
                    <span className="fa fa-angle-right site-menu-arrow"></span>
                </a>
            </li>
            <li className="site-menu-item has-sub">
                <a href="#/users">
                    <span className="site-menu-title">Profile Settings</span>
                    <span className="fa fa-angle-right site-menu-arrow"></span>
                </a>
            </li>
        </ul>
        );
    }
});

export default SideNavLinks;
