import React from 'react';
import {Router, Route, IndexRoute, Link, hashHistory, browserHistory, withRouter} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from "./pages/Dashboard";
import World from './pages/World';
import Server from './pages/Server';
import Users from './pages/User';
import Index from './pages/Index';
import store from './store';
import BaseLayout from './BaseLayout';

const Logout = withRouter(
    React.createClass({
        componentDidMount() {
            store.dispatch({type:"LOG_OUT"});
            this.props.router.push('');
        },

        render() {
            return (<p>You are now logged out</p>);
        }
    })
);

function requireAuth(nextState, replace) {
    var state = store.getState().auth;
    if (!state.authenticated) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}
const history = syncHistoryWithStore(hashHistory, store)
const Navigation = React.createClass({
    render: function() {
        return (
            <Router history={history}>
                <Route path="/" component={BaseLayout}>
                    <Route path="login" component={Login} />
                    <Route path="logout" component={Logout} />
                    <Route path="register" component={Register} />
                    <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
                    <Route path="world" component={World} onEnter={requireAuth} />
                    <IndexRoute component={Index}/>
                    <Route path="users" onEnter={requireAuth} component={Users} />
                    <Route path="server" onEnter={requireAuth} component={Server} />
                    <Route path='*' component={Login} />
                </Route>
            </Router>
        );
    }
});
export default Navigation;
