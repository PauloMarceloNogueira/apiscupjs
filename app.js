var Server = require('./source/server/server')
var Config = require('./source/server/config')
var Header = require('./source/server/headers')
var Routes = require('./source/routes/routes')
var Session = require("./source/server/session")

var storage = require("./source/server/storage")
var config = new Config() 
var server = new Server(config)
var header = new Header(server)
var routes = new Routes(server)
var session = new Session(server, storage)

routes.create()

server.app.listen(server.port,function(){
	console.log('Run on localhost:'+server.port)	
})
