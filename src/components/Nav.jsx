import React from 'react';

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
                        <a onClick={this.onTextChanged} className=" navbar-brand button-collapse menu-toggle"><i className="fa fa-bars"></i></a>
                    </div>
                    <div onClick={this.onTextChanged} className=" navbar-brand breadcrumb-dn">
                        <p>MDAT</p>{this.props.text}
                    </div>
                    <ul className="nav navbar-nav float-lg-right padding-right-10">
                        <li className="nav-item "><a href="#/logout" id="show_login" className="nav-link waves-effect waves-light"><span className="hidden-sm-down">Log Out </span><i className="fa fa-sign-out"></i></a></li>
                    </ul>
                </nav>
            </header>
        );
    }
});
export default Nav;
