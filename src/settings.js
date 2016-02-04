(function(){

	var settings = {};

	settings.keys = {
		publickey: '', // Insert Your Public Key
		privatekey: '' // Insert Your Private Key
	};

	settings.params = {
		version : '1.1'
	};

	settings.domains = {
		qa : 'qa.scup.net/',
		prod : 'api.scup.com/',
		local : 'localdev.scup.com/'
	};

	module.exports = settings;
	
})();