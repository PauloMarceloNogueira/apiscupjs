var request = require('request');

module.exports = {


	show: function(action, monitoring, params, callback) {
		var generate = require('../sig/generate');
		
		var paramsUrl = "";
		var i = 0;
		if(Object.keys(params).length === 0){
			paramsUrl = "";

		} else {
			for(var key in params){
				if(i === 0){
					paramsUrl += '?' + key + '=' + params[key] 
				}else{
					paramsUrl += '&' + key + '=' + params[key]
				}
				
				i++

			}

		}

		var url = 'http://' + generate.generate().url + '/'+ action +'/' + monitoring + paramsUrl + generate.generate().params;


	 	request(url,function(err,response,body){
	 		var data = JSON.parse(body);

	 		if (err){
				console.log('Error : ' + data.data.cod_error);
				console.log('\n');
				console.log('Message :' + data.data.message);
	 			return callback(data.data.message)
	 		}
			return callback(data.data)
	 	})
	}

}