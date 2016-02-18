var request = require('request');

module.exports = {


	show: function(action, monitoring, params, callback) {
		var generate = require('../signature/generate');
		var url = generate.generate().url + '/' + generate.generate().version + '/'+ action +'/' + monitoring + params+ generate.generate().params;

		console.log(url)
	 	request(url,function(err,response,body){
	 		var data = JSON.parse(body);

	 		if (err){
	 			return callback(data.data)
	 		}
			return callback(data.data)
	 	})
	}

}