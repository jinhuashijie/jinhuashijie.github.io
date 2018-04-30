import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App';
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'



ReactDOM.render((
    <Router history={browserHistory}>
    {/* ... */}
    	<Route path="/" component={App}>
            <Route path="/about" component={About}/>
            <Route path="/repos" component={Repos}/>
            {/* Repo Route */}
            <Route path="/repos/:userName/:repoName" component={Repo}/>
            <Route path="/repos" component={Repos}>
			    <Route path="/repos/:userName/:repoName" component={Repo}/>
			</Route>
        </Route>
    </Router>
), document.getElementById('app'))




