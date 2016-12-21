import React from 'react';
import { connect } from 'react-redux'
import store from '../store';
import * as serverAction from '../actions/ServerAction';


const Server = React.createClass({
    componentDidMount(){
        //store.dispatch(Actions.getServers(this.props.auth.token, this.props.router));
    },
    componentDidUpdate(){
        this.updateForm();
    },
    updateForm(){
        this.refs.server_name.value = this.props.Server.server;
        this.refs.ip_address.value = this.props.Server.ip_address;
        this.refs.description.value = this.props.Server.description;
        this.refs.public_key.value = this.props.Server.public_key;
    },
    handleSubmit(event) {
        event.preventDefault();
        var server_name_old = this.props.Server.server;
        var server_name = this.refs.server_name.value;
        var description = this.refs.description.value;
        var ip_address = this.refs.ip_address.value;
        var token = this.props.auth.token;
        store.dispatch(serverAction.update(token,server_name_old,server_name, description,ip_address));

    },
    regenKey(event) {
        event.preventDefault();
        var server_name = this.props.Server.server;
        console.log(serverAction)
        store.dispatch(serverAction.regenAPI(this.props.auth.token, server_name, this.props.router))
    },
    render(){
        var api = [];
        console.log("---data---",this.props);
        if(this.props.Server != undefined) {
            // if (this.props.api.data.servers.length > 0) {
            //     api = this.props.api.data.servers;
            // }
            api = this.props.Server;
            console.log("*****data---",api.server_name);
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
                    <div className="widget-header cover overlay" >

                        <div className="overlay-panel overlay-background vertical-align">
                        </div>
                    </div>

                    <div className="card content">
                        <div className="card-header white-text river server-heading">
                            <h1>Servers</h1>

                            <ul className="panel-info">
                                <li>
                                    {getStatus(api.status)}
                                </li>
                            </ul>

                        </div>
                        <div className="panel-body">
                            <form onSubmit={this.handleSubmit} className="form-horizontal" role="form">
                                <table className="table borderless">
                                    <tbody>
                                    <tr>
                                        <td>Server Name</td>
                                        <td>
                                            <input type="text" ref="server_name" className="form-control" id="inputRounded" defaultValue={api.server} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Description</td>
                                        <td>
                                            <input type="text" ref="description" id="form1" className="form-control" defaultValue={api["description"]} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ip address / Hostname </td>
                                        <td>
                                            <input type="text" ref="ip_address" id="form1" className="form-control" defaultValue={api["ip_address"]} />
                                        </td>
                                    </tr>

                                    {api["public_key"] != undefined &&
                                        <tr>
                                            <td>API Key</td>
                                            <td style={{display: "inline-flex", width: "100%"}}>
                                                <input type="text" ref="public_key" id="form1" className="form-control" defaultValue={api["public_key"]} readOnly />
                                                <button style={{margin: "0 5px 0 0"}} className="btn btn-primary"><span className="fa fa-copy"></span></button>
                                                <button onClick={this.regenKey} className="btn btn-success">Regen</button>
                                            </td>
                                        </tr>
                                    }
                                    </tbody>
                                </table>
                                <div className="form-group">
                                    <div className="col-md-3 col-lg-offset-3">
                                        <input type="submit" className="btn btn-primary" defaultValue={api["server"] != undefined ? 'Update Server' : 'Add Server'}/>
                                    </div>
                                    <div className="col-md-3">
                                        <button onClick={this.updateForm} className="btn btn-default btn-block">Cancel</button>
                                        
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        );
    }
});


const mapStateToProps = store => {
    console.log(store)
    return { auth: store.User, Server:store.Server }
};
export default connect(mapStateToProps)(Server);

