module.exports = {
	generate: function(){
		var timestamp = {};

		Date.prototype.getUnixTime = function() { 

			return this.getTime()/1000|0 
		};

		Date.now = function(){
			return  new Date();
		}

		Date.time = function(){
			return new Date.now().getUnixTime();
		}

		return Date.time();
	}
}