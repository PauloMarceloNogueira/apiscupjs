var settings = {}
exports.set = function(publickey,privatekey,callback){
	settings.keys = {
		publickey: publickey,
		privatekey: privatekey
	};

	settings.params = {
		version : '1.1'
	};

	settings.domains = {
		qa : 'qa.scup.net/',
		prod : 'api.scup.com/',
		local : 'localdev.scup.com/'
	};

	 
	

	
}