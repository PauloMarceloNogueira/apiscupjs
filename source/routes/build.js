function Build(params){

	this.params = params
}

Build.prototype.construct = function(){
	
	var p = {}
	var params = this.params.split('|')
	var parameters = []
	console.log('COUNT',params.length)
	for (var i = 2; i <= (params.length - 1); i++) {
		parameters += '&'+params[i]
	};

	params = {
		action : params[0],
		monitoring : params[1],
		params : parameters
	}
	return params
}

module.exports = Build