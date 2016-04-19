/**
 * Created by dcreey on 4/12/2016.
 */

var expect = require("expect");
var random = require('../services/randomService.js');
var timer = require('../services/timerService.js');

var TIMEOUT = 50000;
var N = 1000000;
var T = 10;
var QUEUETYPE = "CustomQueue";

var timings = [];

describe("Fill a custom queue with N random objects and one known object of higher priority.", function() {
    this.timeout(TIMEOUT);
    it("Should loop through N pushes then N pops T times each in separate PQ instances", function(done) {
        var p = new Promise(function(res,rej){
            loop(function(){ res(); });
        })
        p.then(function(){
            var sum = timings.reduce(function(a, b) { return a + b; });
            console.log("Avg:" + (sum / timings.length));
            expect(timings.length).toBe(10);
            done();
        })
    })
})

var loop = function(callback){
    console.time("loop" + (timings.length + 1));
    timer.start();
    loopFunction(function(){
        console.timeEnd("loop"  + (timings.length + 1));
        timings.push(timer.end());
        if (timings.length < T) loop(callback);
        else callback();
    });
}

var loopFunction = function(callback) {
    var n = N;
    var p = new Promise(function(res,rej){ res(random.randomQueue(n, QUEUETYPE)); })
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