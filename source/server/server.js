function Server(config){
	
	this.port = config.port
	var express = require('express');
	var app = express()
	this.app = app
}


module.exports = Server