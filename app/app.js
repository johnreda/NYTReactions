
//DEPENDENCIES
var React = require('react');
var ReactDOM = require('react-dom');

//PROPERTIES ASSOCIATED WITH THE ROUTER
var Router = require('react-router').Router;


//Grabs the "ROUTES"
var routes = require('./config/routes');

ReactDOM.render(

	<Router>{routes}</Router>,
	document.getElementById('app')

)