function Build(params){

	this.params = params
}

Build.prototype.construct = function(){
	
	var params = this.params.split('|')
	var parameters = []

	for (var i = 2; i <= (params.length - 1); i++) {
		parameters += '&'+params[i]
	};

	if(params[0]){
		actionParameters = params[0]
	}else{
		actionParameters = ""
	}

	if(params[1]){
		monitoringParameters = params[1]
	}else{
		monitoringParameters = ""
	}

	params = {
		action : actionParameters,
		monitoring : monitoringParameters,
		params : parameters
	}

	console.log(params,'aqui')
	return params
}

module.exports = Build