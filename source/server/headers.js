function Header(server){
	server.app.use(function(req, res, next) {
		  res.header( 'Access-Control-Allow-Origin', 'http://localhost:7788')
		  res.header( 'Access-Control-Allow-Credentials', true)
		  res.header( 'Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
		  res.header( 'Access-Control-Allow-Headers', 'Content-Type')
		  res.header('teste','paulo')
		  next();
		});
}

module.exports = Header