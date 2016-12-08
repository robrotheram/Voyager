import React from 'react';
import ReactDOM from 'react-dom';
import style from '../../styles/Sidenav.scss'
import badge from '../../styles/badge.scss'
var CoverOverlay = React.createClass({
    render: function() {
        return (
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
        );
    }
});

export default CoverOverlay