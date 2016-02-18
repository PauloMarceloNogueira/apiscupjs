var initializer = require('./source/initializer')

var get = require('./source/actions/get')

var init = initializer.init()

var headers = require('./source/modules/headers')

var routes = require('./source/modules/routes')

init.app.listen(init.port);

headers.setHeaders()

if(init.settings.keys){

	routes.createRoutes()

}


console.log('Server started on PORT ' + init.port);