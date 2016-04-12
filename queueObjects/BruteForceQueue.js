/**
 * Created by dcreey on 4/10/2016.
 */

var Node = require('./Node');

function PriorityQueue (arr) {
    this.heap = [null];
    if (arr) for (i=0; i< arr.length; i++)
        this.push(arr[i].data, arr[i].priority);
}

PriorityQueue.prototype = {
    push: function (data, priority) {
        var node = new Node(data, priority);
        this.heap.push(node);
    },

    pop: function() {
        if (this.isEmpty()) throw error;
        var index = 0;
        var bestNode = this.heap[1];
        for (var i in this.heap) {
            if (this.heap[i] != null)
            if (this.heap[i].priority > bestNode.priority) {
                bestNode = this.heap[i];
                index = i;
            }
        }

        this.heap.splice(index, 1);
        return bestNode;
    },

    isEmpty: function() {
        return this.heap.length == 0;
    },

    size: function() { return this.heap.length - 1; }
}

var BruteForceQueue = PriorityQueue;

module.exports = BruteForceQueue;