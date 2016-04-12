/**
 * Created by dcreey on 4/11/2016.
 */

var expect = require("expect");
var random = require('../services/randomService.js');

var n = 5000;
var div = n/10;

describe("Fill a custom queue with N random objects and one known object of higher priority.", function() {
    var p = new Promise(function(res,rej){ res(random.randomQueue(n, "BruteForceQueue")); })

    it("Should pop the known node with highest priority", function() {
        p.then(function(queue){
            var lastPriority;
            while (n > 0) {
                var node = queue.pop();
                if (node.priority > lastPriority) {
                    console.log("failure: Priority Out of Order");
                    fail("Priority Out of Order");
                }
                lastPriority = node.priority;
                if (n%div == 0)
                    console.log(queue.size());
                n--;
            }
            expect(queue.size()).toBe(1);
        });
    })
})
