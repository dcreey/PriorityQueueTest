/**
 * Created by dcreey on 4/11/2016.
 */
var expect = require("expect");
var random = require('../services/randomService.js');

var n = 10000000;

describe("BinaryHeapQueue: Fill a custom queue with N random objects and one known object of higher priority.", function() {
    var p = new Promise(function(res,rej){ res(random.randomQueue(n, "BinaryHeapQueue")); })

    it("Should pop the known node with highest priority", function() {
        p.then(function(queue){
            var node = queue.pop();
            expect(node.priority).toBe(100);
        });
    })
})


