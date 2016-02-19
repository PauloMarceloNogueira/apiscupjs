var Storage = {
    set : function(key, value) {
        this.values[key] = value;
    },
    get : function(key) {
        return this.values[key];
    }
}