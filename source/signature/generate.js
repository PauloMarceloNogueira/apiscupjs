module.exports = {
	
	generate : function(cb){

		var hash = require('./generateHashMD5');

		var settings = require('../server/settings');

		var url = {};

		url = settings.domains.prod + settings.params.version + '/';

		params = '&publickey=' + publickey + '&time=' + hash.generate().time + '&signature='+hash.generate().hash;

		if(publickey){
			data = {
				url : url,
				params : params
			}

		}else{
			return ""
		}


		return data
	}
}




