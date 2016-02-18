var Config = require('../server/config')

module.exports = {
	
	generate : function(cb){

		var hash = require('./generateHashMD5');

		var settings = require('../server/settings');

		var url = {};
		var version 
		var config = new Config()
		url = config.domain;
		version = config.version;
		params = '&publickey=' + publickey + '&time=' + hash.generate().time + '&signature='+hash.generate().hash;

		if(publickey){
			data = {
				url : url,
				version : version,
				params : params
			}

		}else{
			return ""
		}


		return data
	}
}




