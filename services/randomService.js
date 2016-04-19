
var Node = require('../queueObjects/Node.js');
var BruteForceQueue = require('../queueObjects/BruteForceQueue.js');
var CustomQueue = require('../queueObjects/CustomQueue.js');
var BinaryHeapQueue = require('../queueObjects/BinaryHeapQueue.js');

var random = {
    int:function(low, high){
        return Math.floor(Math.random() * (high - low) + low);
    },
    //Insert 1 node with priority equal to 100.
    //Insert n nodes with random priority less than 100.
    randomQueue:function(n, queueType){
        var queue;
        if (queueType === "BruteForceQueue") queue = new BruteForceQueue();
        else if(queueType === "CustomQueue") queue = new CustomQueue();
        else if (queueType === "BinaryHeapQueue") queue = new BinaryHeapQueue();

        queue.push("100", 100);

        for (var i = 0; i < n; i++)
        {
            var randomInt = random.int(0,99);
            queue.push(randomInt.toString(), randomInt);
        }

        return queue;
    }
}

module.exports = random;