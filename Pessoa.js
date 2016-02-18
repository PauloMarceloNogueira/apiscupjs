function Pessoa (name){
	this.name = name
}

Pessoa.prototype.anda = function(){
	console.log(this.name + ' esta andando')
}

module.exports = Pessoa