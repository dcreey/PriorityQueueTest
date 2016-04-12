/**
 * Created by dcreey on 4/12/2016.
 */
Date.now();

var timer = {
    start:function(){
        this.startTime = Date.now();
    },
    end:function(){
        var startTime = this.startTime;
        this.startTime = null;
        return Date.now() - startTime;
    }
}

module.exports = timer;