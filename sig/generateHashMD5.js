module.exports = {

	generate : function(){
		var timeStamp = require('./generateTimestamp');

		var settings = require('../src/settings');

		md5 = require('js-md5')
		var hash = md5.create();

		var stringToHash = timeStamp.generate() + privatekey;

		hash.update(stringToHash);

		data = {
			hash : hash.hex(),
			time : timeStamp.generate()
		}

		return data;

	}
	


}