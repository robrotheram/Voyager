import React from 'react';
import CardTitles from '../cards/CardTitles';
import SimpleChart from '../components/SimpleChart';
import CardD3Map from '../cards/CardD3Map';
import CardStats from '../cards/CardStats';

const Players = React.createClass({
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 personal-info">
                        <div className="card" style={{"padding":"15px"}}>
                            <div className="row" style={{"max-height":"170px", "overflow-y":"auto", "margin":"0px", "padding-top":"15px" }}>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                                <div className="col-sm-1" style={{"text-align": "center"}}>
                                    <img width="100%" style={{"vertical-align":"super", "max-width":"100px"}} src="https://mcapi.ca/avatar/Yive"/>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header white-text river server-heading">
                                <h1>Players</h1>
                                <a  className="btn turquoise btn-xl  panel-search-form">Sign-In</a>
                                <a  className="btn turquoise btn-xl  panel-search-form">Sign-In</a>
                                <a  className="btn turquoise btn-xl  panel-search-form">Sign-In</a>
                                <a  className="btn turquoise btn-xl  panel-search-form">Sign-In</a>
                                <a  className="btn turquoise btn-xl btn panel-search-form">Sign-In</a>
                            </div>

                            <hr/>



                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default Players;
