var Session = require("./../server/session")

module.exports = {

	generate : function(){
		
		var session = new Session();
		
		var key = session.get();
		
		var timeStamp = require('./generateTimestamp');

		var settings = require('../server/settings');

		md5 = require('js-md5')
		var hash = md5.create();

		var stringToHash = timeStamp.generate() + key.privatekey;

		hash.update(stringToHash);

		data = {
			hash : hash.hex(),
			time : timeStamp.generate()
		}

		return data;

	}
	


}