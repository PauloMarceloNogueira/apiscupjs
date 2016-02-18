var get = require('./../actions/get')

function Route(server){
	this.server = server
}

Route.prototype.create = function(){

	this.server.app.get('/modules',function(req,res){
		modules = [
			{
				path : 'config',
				name : 'Configuração'
			},
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
			}
		]

		res.send(JSON.stringify(modules));
	})

	this.server.app.get('/config/:publickey/:privatekey', function(req,res,next){
			var publickey = req.param('publickey')
			var privatekey = req.param('privatekey')

			global.publickey = publickey;
			global.privatekey = privatekey;

			var result = {
					message : "success",
					publickey: publickey,
					privatekey: privatekey
			}
			res.send(JSON.stringify(result))

			
		});

	this.server.app.get('/monitorings/', function(req,res){
			
			params = {}
			get.show('monitorings','',params,function(data){
				res.send(JSON.stringify(data))
			})
		})

	this.server.app.get('/searches/:monitoramento', function(req,res){
		var monitoramento = req.param('monitoramento')
		var id = req.param('id');
		params = {
			second : id
		}
		get.show('searches',monitoramento,params,function(data){
			res.send(JSON.stringify(data))
		})
		

	})

	this.server.app.get('/mentions/:monitoramento/:searches', function(req,res){
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


module.exports = Route