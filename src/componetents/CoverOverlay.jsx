import React from 'react';
var CoverOverlay = React.createClass({
    render: function() {
        return (
            <div className="cover overlay">
                <img className="cover-image" src="http://getbootstrapadmin.com/remark/material/center/assets/examples/images/dashboard-header.jpg" alt="..."/>
                <div className="overlay-panel vertical-align overlay-background">
                    <div className="vertical-align-middle">
                        <a className="avatar avatar-lg">
                            <img width="120px" src="src/images/mc/Minecraft Main Character.png" alt="" />
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

export default CoverOverlay;
