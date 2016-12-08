import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styles/Nav.scss'

var Nav = React.createClass({
    getInitialState: function() {
        // we ONLY set the initial state from the props
        return { checked: this.props.initialChecked };
    },
    onTextChanged: function() {
        var newState = !this.state.checked;
        this.setState({ checked: newState });
        this.props.callbackParent(newState); // hey parent, I've changed!
    },
    render: function() {
        return (
            <header>
                <nav className="navbar navbar-fixed-top scrolling-navbar double-nav primary-color navbar-dark">
                    <div className="float-xs-left">
                        <a onClick={this.onTextChanged}  className=" navbar-brand button-collapse menu-toggle"><i className="fa fa-bars"></i></a>
                    </div>
                    <div onClick={this.onTextChanged} className=" navbar-brand breadcrumb-dn">
                        <p>MDAT</p>{this.props.text}
                    </div>
                </nav>
            </header>
        );
    }
});

export default Nav