/**
 * Created by dcreey on 4/11/2016.
 */
var Node = require('./Node');
var Heap = require('heap');

function PriorityQueue (arr) {
    this.heap = new Heap(comparator);
    if (arr) for (i=0; i< arr.length; i++)
        this.push(arr[i].data, arr[i].priority);
}

PriorityQueue.prototype = {
    push: function (data, priority) {
        var node = new Node(data, priority);
        this.heap.push(node);
    },

    pop: function() {
        var bestNode = this.heap.pop();
        return bestNode;
    },

    size: function() { return this.heap.size(); }
}

var comparator = function(a, b) {
    return b.priority - a.priority;
    /*if (a.priority === b.priority) return 0;
    return a.priority > b.priority ? 1 : -1;*/
}

var BinaryHeapQueue = PriorityQueue;

module.exports = BinaryHeapQueue;