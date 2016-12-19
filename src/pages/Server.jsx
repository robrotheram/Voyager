import React from 'react';
import Nav from '../components/Nav';
import SideNav from '../components/SideNav';
import { connect } from 'react-redux'
import store from '../store';
import bg from '../images/rivendell1.jpg';
import Gravatar from 'react-gravatar';
import * as Actions from '../actions/auth';
import { Router, Route, IndexRoute, Link, browserHistory, withRouter } from 'react-router';

const Server = withRouter(
    React.createClass({
        getInitialState: function () {
            return { checked: false };
        },
        onChildChanged: function(newState) {
            this.setState({ checked: newState });
        },
        componentDidMount(){
            store.dispatch(Actions.getServers(this.props.auth.token, this.props.router));
        },
        componentDidUpdate(){
        },
        handleSubmit(event) {
            event.preventDefault();
            const server_name = this.refs.server_name.value;
            console.log(server_name)
        },
        render(){
            var api = [];
            console.log("---data---",this.props.api.data.servers);
            if(this.props.api.data.servers != undefined) {
                if (this.props.api.data.servers.length > 0) {
                    api = this.props.api.data.servers;
                }
            }
            function getStatus(status) {
                switch (status){
                    case "ALIVE": return (<span className="label label-success">Active</span>)
                    case "INACTIVE": return (<span className="label label-warning">Inactive</span>)
                    case "DEAD": return (<span className="label label-danger">Dead</span>)
                }
            }
            function add(event) {
                api.push({})
                console.log(api.length);
            }
            return (
                <div>
                    <Nav initialChecked={this.state.checked} callbackParent={this.onChildChanged} />
                    <div id="wrapper" className={this.state.checked ? 'toggled' : ''}>
                        <SideNav/>
                        <div id="page-content-wrapper" className="wrapper-content">
                            <div className="widget-header cover overlay" >

                                <div className="overlay-panel overlay-background vertical-align">
                                </div>
                            </div>
                            <div className="container-fluid user-content">
                                <div className="row">
                                    <div className="col-md-12 personal-info">
                                        <div className="card">
                                            <div className="card-header white-text river server-heading">
                                                <h1>Servers</h1>
                                                <form className="panel-search-form" role="search">
                                                    <div className="input-search">
                                                        <i className="fa fa-search" aria-hidden="true"></i>
                                                        <input type="text" className="form-control search" id="inputSearch" name="search" placeholder="Search List"/>
                                                        <i className="icon md-refresh"></i>
                                                    </div>
                                                </form>
                                                <button className="btn btn-success panel-search-form" onClick={add} >Add Server</button>
                                                <ul className="panel-info">
                                                    <li>
                                                        <div className="num">23</div>
                                                        <p>Dead</p>
                                                    </li>
                                                    <li>
                                                        <div className="num">8</div>
                                                        <p>Inactive</p>
                                                    </li>
                                                    <li>
                                                        <div className="num">5</div>
                                                        <p>Alive</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="panel-body">
                                                <form onSubmit={this.handleSubmit}>
                                                <table className="table table-responsive">
                                                    <thead>
                                                    <tr>
                                                        <th>Status</th>
                                                        <th>Server Name</th>
                                                        <th>Ip address </th>
                                                        <th>API Key</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        api.map(function(server) {
                                                            return (
                                                                <tr key={server["server_name"]}>
                                                                    <td>
                                                                        {getStatus(server["status"])}
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" ref="server_name" className="form-control" id="inputRounded" defaultValue={server["server_name"]} />
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" ref="ip_address" id="form1" className="form-control" defaultValue={server["ip_address"]} />
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" ref="public_key" id="form1" className="form-control" defaultValue={server["public_key"]} />
                                                                    </td>
                                                                    <td>
                                                                        <button className="btn label-success td-button"><i className="fa fa-pencil"></i></button>

                                                                        <button className="btn label-primary td-button"><i className="fa fa-trash"></i></button>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })
                                                    }
                                                    </tbody>
                                                </table>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       </div>
                   </div>
               </div>
            );
        }
    })
);


const mapStateToProps = store => {
    console.log(store)
    return { auth: store.auth, api:store.api }
};
export default connect(mapStateToProps)(Server);

