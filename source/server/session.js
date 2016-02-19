var md5 = require('js-md5')

function Session(server, storage){
    server.app.use(this.createCookie);
    this.storage = storage;
}

Session.prototype.checkCookie = function(req,res,next){
    this.req = req
    this.res = res
    this.next = next
    this.sessionkey = req.cookie.Sessionkey
    
    if(!this.sessionkey){
        this.sessionkey = this.createCookie()
    }
    
    this.req.session = this
}

Session.prototype.createCookie = function(){
    var sessionkey = this.generateSessionKey()
    this.res.cookie('Sessionkey', this.sessionkey)
    
    this.storage.set(this.sessionkey, {});
    
    return sessionkey;
}

Session.prototype.generateSessionKey = function(){
	return md5.create();
}

Session.prototype.set = function (key, value){
	var obj = this.storage.get(this.sessionkey);
	obj[key] = value;
	
    this.storage.set(this.sessionkey, obj);
}

Session.prototype.get = function(key){
    return this.storage.get(this.sessionkey)[key] || undefined;
}

module.exports = Session