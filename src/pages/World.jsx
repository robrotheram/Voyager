import React from 'react';
import Nav from '../components/Nav';
import SideNav from '../components/SideNav';
import CardWorldData from '../cards/CardWorldData';
import CardLeaflet from '../cards/CardLeaflet';
import CardTimeline from '../cards/CardTimeline';



const World = React.createClass({
    getInitialState: function () {
        return { checked: false };
    },
    onChildChanged: function(newState) {
        this.setState({ checked: newState });
    },
    render(){
        return (
            <div>
                <Nav initialChecked={this.state.checked} callbackParent={this.onChildChanged} />
                <div id="wrapper" className={this.state.checked ? 'toggled' : ''}>
                    <SideNav/>
                    <div id="page-content-wrapper" className="wrapper-content">
                        <ul className="navbar navbar-dark stylish-color world-controls">
                            <ul className="nav navbar-nav">
                                <li className="nav-item">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-primary waves-effect waves-light">Overworld</button>
                                        <button type="button" className="btn btn-primary dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item waves-effect waves-light" href="#">Nether</a>
                                            <a className="dropdown-item waves-effect waves-light" href="#">The End</a>
                                            <a className="dropdown-item waves-effect waves-light" href="#">Resouce</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item waves-effect waves-light" href="#">Creative</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav float-lg-right">
                                <li className="nav-item">
                                    <form className="form-inline waves-effect waves-light time-form">
                                        <a className="btn btn-primary waves-effect waves-light left"><i className="fa fa-angle-left"></i></a>
                                        <div className="md-form custom-frm form-group">
                                            <input type="text" id="form91" className="form-control validate custom-time-input" defaultValue="10/12/2016   10:33"/>
                                        </div>
                                        <a className="btn btn-primary waves-effect waves-light right"><i className="fa fa-angle-right"></i></a>
                                    </form>
                                </li>
                            </ul>
                        </ul>


                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <CardWorldData color="river"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7">
                                <CardLeaflet/>
                            </div>
                            <div className="col-lg-5">
                                <CardTimeline/>
                            </div>
                        </div>
                        <div className="footer"></div>
                      </div>
                   </div>
               </div>
           </div>
        );
    }
});

export default World;
