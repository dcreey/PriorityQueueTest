/**
 * Created by dcreey on 4/12/2016.
 */

var expect = require("expect");
var random = require('../services/randomService.js');
var timer = require('../services/timerService.js');

var t = 10;
var timings = [];

describe("Fill a custom queue with N random objects and one known object of higher priority.", function() {
    it("Should pop the known node with highest priority", function() {
        this.timeout(20000);
        setTimeout(20000);
        var p = new Promise(function(res,rej){
            loop(function(){ res(); });
        })
        p.then(function(){
            var sum = timings.reduce(function(a, b) { return a + b; });
            console.log("Avg:" + (sum / timings.length));
            expect(t).toBe(0);
            done(done);
        })
    })
})

var loop = function(callback){
    console.time("loop" + t);
    timer.start();
    loopFunction(function(){
        console.timeEnd("loop"  + t);
        timings.push(timer.end());
        t--;
        if (t > 0) loop(callback);
        else callback();
    });
}

var loopFunction = function(callback) {
    var n = 1000000;
    var div = n/10;
    var p = new Promise(function(res,rej){ res(random.randomQueue(n, "CustomQueue")); })
    p.then(function (queue) {

        var lastPriority;
        while (n > 0) {
            var node = queue.pop();
            if (node.priority > lastPriority) {
                console.log("failure: Priority Out of Order");
                fail("Priority Out of Order");
            }
            lastPriority = node.priority;
            n--;
        }
    }).then(function(){
        callback();
    });
}