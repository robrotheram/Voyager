import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory, withRouter } from 'react-router'
import Nav from './componetents/Nav.jsx'
import SideNav from './componetents/SideNav.jsx'

const Dashboard = React.createClass({
    getInitialState: function () {
        return { checked: false };
    },
    onChildChanged: function(newState) {
        this.setState({ checked: newState });
    },

    render(){
        return(
           <div>
               <Nav initialChecked={this.state.checked} callbackParent={this.onChildChanged}  />
               <div id="wrapper" className={this.state.checked ? 'toggled' : ''}>
                   <SideNav/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>

                   <div>Are you checked ? {this.state.checked ? 'yes' : 'no'}</div>
               </div>
           </div>
        )
    }
});

export default Dashboard;