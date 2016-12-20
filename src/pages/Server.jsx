import React from 'react';
import { connect } from 'react-redux'
import store from '../store';
import * as Actions from '../actions/auth';



const Server = React.createClass({
    componentDidMount(){
        //store.dispatch(Actions.getServers(this.props.auth.token, this.props.router));
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
            // if (this.props.api.data.servers.length > 0) {
            //     api = this.props.api.data.servers;
            // }
            api = this.props.api.data.servers;
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
                                            <input type="text" ref="server_name" className="form-control" id="inputRounded" defaultValue={api.server_name} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ip address </td>
                                        <td>
                                            <input type="text" ref="ip_address" id="form1" className="form-control" defaultValue={api["ip_address"]} />
                                        </td>
                                    </tr>
                                    {api["public_key"] != undefined &&
                                        <tr>
                                            <td>API Key</td>
                                            <td style={{display: "inline-flex", width: "100%"}}>
                                                <input type="text" ref="public_key" id="form1" className="form-control" defaultValue={api["public_key"]} readOnly /> <button className="btn btn-success">Regen</button>
                                            </td>
                                        </tr>
                                    }
                                    </tbody>
                                </table>
                                <div className="form-group">
                                    <div className="col-md-3 col-lg-offset-3">
                                        <input type="button" className="btn btn-primary" defaultValue={api["server_name"] != undefined ? 'Update Server' : 'Add Server'}/>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="reset" className="btn btn-default" defaultValue="Cancel"/>
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
    return { auth: store.auth, api:store.api }
};
export default connect(mapStateToProps)(Server);

