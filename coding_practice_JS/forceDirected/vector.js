/**
 * Created by jason on 15/8/18.
 */
(function(){
    function vector(x, y){
        this.x = x;
        this.y = y;
    }
    vector.prototype = {
        constructor: vector,
        square: function(){
            return this.x * this.x + this.y * this.y;
        },
        length: function(){
            return Math.sqrt(this.square());
        },
        add: function(v){
            return new vector(this.x + v.x, this.y + v.y);
        },
        minus: function(v){
            return new vector(this.x - v.x, this.y - v.y);
        },
        mul: function(l){
            return new vector(this.x * l, this.y * l);
        },
        normalize: function(l){
            if(l === undefined){
                l = 1;
            }
            return this.mul(l/this.length());
        }
    };
    vector.fromPoints = function(p1, p2){
        return vector(p2.x - p1.x, p2.y - p1.y);
    };
    window.vector = vector; //vec into window!
})();