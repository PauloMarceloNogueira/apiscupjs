Server = require('./source/server/server')
Config = require('./source/server/config')
Header = require('./source/server/headers')
Routes = require('./source/routes/routes')

var config = new Config() 
var server = new Server(config)
var header = new Header(server)
var routes = new Routes(server)

routes.create()

server.app.listen(server.port,function(){
	console.log('Run on localhost:'+server.port)	
})




