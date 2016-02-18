module.exports = {
	
	generate : function(cb){

		var hash = require('./generateHashMD5');

		var settings = require('../settings');

		var url = {};

		url = settings.domains.prod + settings.params.version + '/';

		params = '&publickey=' + publickey + '&time=' + hash.generate().time + '&signature='+hash.generate().hash;

		data = {
			url : url,
			params : params
		};

		return data
	}
}




