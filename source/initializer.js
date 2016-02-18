
module.exports = {
	initializerExpress : function(){
		var express = require('express');
		var app = express();
		return app;
	
	},

	init : function(){
	
		if (this.dependencies === undefined){
			var port = process.env.PORT || 8081
			var settings = require('./settings')
			var express = require('express')
			var app = express()


			this.dependencies = {
				port : port,
				settings : settings,
				app : app

			}
		}

		return this.dependencies
	}

}

