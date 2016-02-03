(function(){

	var settings = {};

	settings.keys = {
		publickey: 'UsFwfgJ8',
		privatekey: 'wjDUg8Gm'
	};

	settings.params = {
		version : '1.1',
		monitoring : '114612'
	};

	settings.domains = {
		qa : 'qa.scup.net/',
		prod : 'api.scup.com/',
		local : 'localdev.scup.com/'
	};

	module.exports = settings;
	
})();