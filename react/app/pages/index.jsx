import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory, withRouter } from 'react-router'
import Nav from '../componetents/Nav.jsx'
import SideNav from '../componetents/SideNav.jsx'
import CardTitles from '../cards/CardTitles.jsx'
import SimpleChart from '../componetents/SimpleChart.jsx'
import CardD3Map from '../cards/CardD3Map.jsx'
import CardStats from '../cards/CardStats.jsx'


import '../../styles/index.scss'
const Index = React.createClass({
    getInitialState: function () {
        return { checked: false };
    },
    onChildChanged: function(newState) {
        this.setState({ checked: newState });
    },
    render(){
        return(
            <div>
                <header id="top">
                    <div className="header-content">
                        <div className="header-content-inner">
                            <h1 id="homeHeading">MDAT</h1>
                            <br/>
                            <p> Minecraft Sever Data Anylitic Tool </p>
                            <br/>
                            <a href="#/register" className="btn river btn-xl btn-rounded">Reister</a>
                            <a href="#/dashboard" className="btn turquoise btn-xl btn-rounded">Sign-In</a>
                        </div>
                    </div>
                </header>

            </div>
        )
    }
});

export default Index;