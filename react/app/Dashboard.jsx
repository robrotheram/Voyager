import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory, withRouter } from 'react-router'
import Nav from './componetents/Nav.jsx'
import SideNav from './componetents/SideNav.jsx'
import CardTitles from './componetents/CardTitles.jsx'
import SimpleChart from './componetents/SimpleChart.jsx'

import style from '../styles/dashboard.scss'

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
                    <div id="page-content-wrapper" className="wrapper-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3">
                                <CardTitles color="turquoise" img="Minecraft%20Main%20Character" title="title" value="123"/>
                            </div>
                            <div className="col-lg-3">
                               <CardTitles color="river" img="Minecraft%20Pickaxe-100" title="title" value="123"/>
                            </div>
                            <div className="col-lg-3">
                               <CardTitles color="alizarine" img="Crafting%20Table-100" title="title" value="123"/>
                            </div>
                            <div className="col-lg-3">
                                <CardTitles color="amethyste" img="Center%20Direction" title="title" value="123"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <SimpleChart color="emeralde"/>
                            </div>
                            <div className="col-lg-4">
                                <SimpleChart color="cyan"/>
                            </div>
                            <div className="col-lg-4">
                                <SimpleChart color="bluegrey"/>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7">
                                <SimpleChart color="amethyste"></SimpleChart>
                            </div>
                            <div className="col-lg-5">
                                <SimpleChart color="amethyste"></SimpleChart>
                            </div>

                        </div>
                      </div>
                   </div>
               </div>
           </div>
        )
    }
});

export default Dashboard;