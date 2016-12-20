import React from 'react';
import { connect } from 'react-redux'
import Nav from './components/Nav'
import SideNav from './components/SideNav'

var BaseLayout = React.createClass({
    getInitialState: function () {
        return { checked: false };
    },
    onChildChanged: function(newState) {
        this.setState({ checked: newState });
    },
    render: function() {
        if(this.props.auth.authenticated)
        {
            return (
                <div className="app">
                    <Nav initialChecked={this.state.checked} callbackParent={this.onChildChanged}/>
                    <div id="wrapper" className={this.state.checked ? 'toggled' : ''}>
                        <SideNav/>
                        <div id="page-content-wrapper" className="wrapper-content">
                            {this.props.children}
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
    return { auth: store.auth }
};
export default  connect(mapStateToProps)(BaseLayout);