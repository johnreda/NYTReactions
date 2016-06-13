//REACT
var React = require('react');

//PULL IN OTHER COMPONENTS
var Main = require('../components/main');
var Search = require('../components/search');
var Saved = require('../components/saved');




//PULL ROUTER

var Router = require('react-router');
var Route = Router.Route;

var IndexRoute = Router.IndexRoute;

module.exports = (

	<Route path='/' component={Main}>

	<Route path='saved' component={Saved} />
	<Route path='search' component={Search} />
	<IndexRoute component={Search} />



	</Route>

);