import React from 'react';
import ReactDOM from 'react-dom';

import CoverOverlay from './CoverOverlay.jsx'
import SideNavLinks from './SideNavLinks.jsx'

import style from '../../styles/Sidenav.scss'
import badge from '../../styles/badge.scss'

var SideNav = React.createClass({
    render: function() {
        return (
            <div id="sidebar-wrapper" className="wrapper-content">
                <div className="site-menubar-header">
                    <CoverOverlay/>
                </div>
                <div className="site-menubar-body scrollable scrollable-inverse is-enabled scrollable-vertical" >
                    <div className="scrollable-container">
                        <div className="scrollable-content" >
                            <SideNavLinks/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default SideNav