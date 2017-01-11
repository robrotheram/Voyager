import React from 'react';
import { connect } from 'react-redux'
import Nav from './components/Nav'
import SideNav from './components/SideNav'
import store from './store';
import * as navAction from './actions/nav';

var BaseLayout = React.createClass({
    getInitialState: function () {
        return { checked: false };
    },
    onChildChanged: function(newState) {
        this.setState({ checked: newState });
    },
    updateState:function () {
        if(this.props.nav.toggled){
            store.dispatch(navAction.toggleNav());
        }
    },

    render: function() {
        if(this.props.auth.authenticated)
        {
            return (
                <div className="app">
                    <Nav/>
                    <div id="wrapper" className={this.props.nav.toggled ? 'toggled' : ''}>
                        <SideNav/>
                        <div id="page-content-wrapper" className="wrapper-content" >
                            <div onClick={this.updateState} >
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else
            {
                return (
                    <div className="app">
                        {this.props.children}
                    </div>
                );
            }

    }
});
const mapStateToProps = store => {
    return { auth: store.User, nav: store.nav }
};
export default  connect(mapStateToProps)(BaseLayout);