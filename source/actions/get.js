var request = require('request');

module.exports = {


	show: function(action, monitoring, params, callback) {
		console.log(monitoring)
		var generate = require('../signature/generate');
		console.log(params,'NO GET')
		var url = 'http://' + generate.generate().url + '/'+ action +'/' + monitoring + params+ generate.generate().params;


	 	request(url,function(err,response,body){
	 		var data = JSON.parse(body);

	 		if (err){
	 			return callback(data.data)
	 		}
			return callback(data.data)
	 	})
	}

}