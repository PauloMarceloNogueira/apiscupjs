var get = require('./../actions/get')
var Build = require('./build')
var Session = require("./../server/session")

function Route(server){
	this.server = server
}


Route.prototype.create = function(){

	this.server.app.get('/:params', function(req,res){
		var params = req.param('params')
		var build = new Build(params)

		var call = build.construct()
		var monitoring;

		if (call.monitoring){
			monitoring = call.monitoring
		}else{
			monitoring = '' 
		}
		get.show(call.action,monitoring,call.params,function(data){
			res.send(JSON.stringify(data))
		})
	})	

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
			
			var result = {
					message : "success",
					publickey: publickey,
					privatekey: privatekey
			}
			
			req.session.set(result);
			
			res.send(JSON.stringify(result))

			
		});

	

}


module.exports = Route