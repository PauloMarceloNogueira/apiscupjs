var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var settings = require('./src/settings.js');
var config = require('./src/config');
var get = require('./actions/get')


app.listen(port);

app.use(function(req, res, next) {

  res.header( 'Access-Control-Allow-Origin', 'http://localhost:7788')
  res.header( 'Access-Control-Allow-Credentials', true)
  res.header( 'Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header( 'Access-Control-Allow-Headers', 'Content-Type')
  next();
});

if(settings.keys){

	app.get('/modules',function(req,res){

		modules = [
			{
				path : 'monitorings',
				name : 'Monitoramentos'
			},
			{
				path : 'searches',
				name : 'Buscas',
				params : [{
					'name':'Monitoramento',
					'key' : 'monitoramento'
				}]
			},
			{
				path: 'mentions',
				name: 'Itens'
			},

			{
				path: "tags",
				name: "Tags"
			}
		]

		res.send(JSON.stringify(modules));
	})

	app.get('/monitorings/', function(req,res){
		
		params = {}
		get.show('monitorings','',params,function(data){
			res.send(JSON.stringify(data))
		})
	})

	app.get('/searches/:monitoramento', function(req,res){
		var monitoramento = req.param('monitoramento')
		var id = req.param('id');
		params = {
			second : id
		}
		get.show('searches',monitoramento,params,function(data){
			res.send(JSON.stringify(data))
		})
		

	})


	app.get('/mentions/:monitoramento/:searches', function(req,res){
		var monitoramento = req.param('monitoramento')
		var searches = req.param('searches')
		params = {
			searches_ids : searches
		}
		get.show('mentions',monitoramento, params,function(data){
			res.send(JSON.stringify(data))
		})
		

	})

}


console.log('Server started on PORT ' + port);