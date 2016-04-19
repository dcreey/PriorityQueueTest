/**
 * Created by dcreey on 4/11/2016.
 */

var expect = require("expect");
var random = require('../services/randomService.js');

var N = 5000;
var DIV = N/10;
var QUEUETYPE = "BruteForceQueue";

describe("Fill a custom queue with N random objects and one known object of higher priority.", function() {
    var p = new Promise(function(res,rej){ res(random.randomQueue(N, QUEUETYPE)); })

    it("Should loop through N pushes then N pops", function() {
        var n = N;
        p.then(function(queue){
            var lastPriority;
            while (n > 0) {
                var node = queue.pop();
                if (node.priority > lastPriority) {
                    console.log("failure: Priority Out of Order");
                    fail("Priority Out of Order");
                }
                lastPriority = node.priority;
                if (n%DIV == 0)
                    console.log(queue.size());
                n--;
            }
            expect(queue.size()).toBe(1);
        });
    })
})