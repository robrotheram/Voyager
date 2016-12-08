import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory, withRouter, hashHistory } from 'react-router'



import auth from './auth.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from "./pages/Dashboard.jsx";
import World from './pages/World.jsx'
import Server from './pages/Server.jsx'
import Users from './pages/User.jsx'
import Index from './pages/index.jsx'

var MainLayout = React.createClass({

    getInitialState() {
        return {
            loggedIn: auth.loggedIn()
        }
    },

    updateAuth(loggedIn) {
        this.setState({
            loggedIn
        })
    },

    componentWillMount() {
        auth.onChange = this.updateAuth
        auth.login()
    },
    render: function() {
        let navlinks;
        if (this.state.loggedIn) {
            navlinks = (
                <ul>
                    <li><Link to="/logout">Log out</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/widgets">Widgets</Link></li>
                </ul>
            )
        }else{
            navlinks = (
                <ul>
                    <li><Link to="/login">Sign in</Link></li>
                </ul>
            )
        }

        return (
            <div className="app">
           
                <main>
                    {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
                </main>
            </div>
        )
    }
})
const Logout = React.createClass({
    componentDidMount() {
        auth.logout()
    },

    render() {
        return <p>You are now logged out</p>
    }
})

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

const Main = React.createClass({
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={MainLayout}>
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
        )
    }
});

export default Main;