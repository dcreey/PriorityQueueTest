/**
 * Created by dcreey on 4/10/2016.
 */

var expect = require("expect");
var random = require('../services/randomService.js');

var N = 10000000;
var QUEUETYPE = "CustomQueue";

describe("Fill a custom queue with N random objects and one known object of higher priority.", function() {
    var queue = random.randomQueue(N, QUEUETYPE);

    it("Should pop the known node with highest priority", function() {
        var node = queue.pop();
        expect(node.priority).toBe(100);
    });
})