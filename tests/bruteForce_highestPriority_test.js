/**
 * Created by dcreey on 4/10/2016.
 */
var expect = require("expect");
var random = require('../services/randomService.js');

var N = 10000;
var QUEUETYPE = "BruteForceQueue";

describe("Fill a custom queue with N random objects and one known object of higher priority.", function() {
    var p = new Promise(function(res,rej){ res(random.randomQueue(N, QUEUETYPE)); })

    it("Should pop the known node with highest priority", function() {
        p.then(function(queue){
            var node = queue.pop();
            expect(node.priority).toBe(100);
        });
    })


})
