import React from 'react';
import mc_img from '../images/mc/Minecraft Skeleton.png';
import store from '../store';
import { connect } from 'react-redux'
import Gravatar from 'react-gravatar';

var CoverOverlay = React.createClass({
    render: function() {
        return (
            <div className="cover overlay">
                <img className="cover-image" src="http://getbootstrapadmin.com/remark/material/center/assets/examples/images/dashboard-header.jpg" alt="..."/>
                <div className="overlay-panel vertical-align overlay-background">
                    <div className="vertical-align-middle">
                        <a className="avatar avatar-lg">
                            <Gravatar email={this.props.auth.email} />
                        </a>
                        <div className="site-menubar-info">
                            <h5 className="site-menubar-user">{this.props.auth.username}</h5>
                            <p className="site-menubar-email">{this.props.auth.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

const mapStateToProps = store => {
    return { auth: store.auth,}
};
export default connect(mapStateToProps)(CoverOverlay);

