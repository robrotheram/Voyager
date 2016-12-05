import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory, withRouter } from 'react-router'



import auth from './auth.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Dashboard from "./Dashboard.jsx";

var Home = React.createClass({
    render: function() {
        return (<h1>Welcome to the Home Page</h1>);
    }
});

var Users = React.createClass({
    render: function() {
        return (<h1>Welcome to the Users Page</h1>);
    }
});

var Widgets = React.createClass({
    render: function() {
        return (<h1>Welcome to the xczczxczxczxczxczxc Page</h1>);
    }
});

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
            <Router history={browserHistory}>
                <Route path="/" component={MainLayout}>
                    <Route path="login" component={Login} />
                    <Route path="logout" component={Logout} />

                    <Route path="register" component={Register} />
                    <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
                    <IndexRoute component={Home} onEnter={requireAuth}/>
                    <Route path="users" onEnter={requireAuth} component={Users} />
                    <Route path="widgets" onEnter={requireAuth}  component={Widgets} />
                    <Route path='*' component={Login} />
                </Route>
            </Router>
        )
    }
});

export default Main;