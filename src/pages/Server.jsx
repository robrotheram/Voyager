import React from 'react';
import Nav from '../components/Nav';
import SideNav from '../components/SideNav';

const Server = React.createClass({
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
                        <div className="container-fluid">
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
                                            <button className="btn btn-success panel-search-form">Add Server</button>
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
                                                <tr>
                                                    <td>
                                                        <span className="label label-success">Active</span>
                                                    </td>
                                                    <td>
                                                        <input type="text" className="form-control" id="inputRounded"/>
                                                    </td>
                                                    <td>
                                                        <input type="text" id="form1" className="form-control" disabled/>
                                                    </td>
                                                    <td>
                                                        <input type="text" id="form1" className="form-control" disabled/>
                                                    </td>
                                                    <td>
                                                        <button className="btn label-success td-button"><i className="fa fa-pencil"></i></button>

                                                        <button className="btn label-primary td-button"><i className="fa fa-trash"></i></button>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
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
});

export default Server;
