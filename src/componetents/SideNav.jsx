import React from 'react';
import CoverOverlay from './CoverOverlay';
import SideNavLinks from './SideNavLinks';


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
export default SideNav;
