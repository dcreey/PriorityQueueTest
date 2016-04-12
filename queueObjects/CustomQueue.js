/**
 * Created by dcreey on 4/10/2016.
 * Modified version of GRIFFnDOOR's PQ
 * https://jsfiddle.net/GRIFFnDOOR/r7tvg/
 */

var Node = require('./Node');

function PriorityQueue (initCapacity) {
    initCapacity++;
    this.heap = [null];
    this.n = 0;
    if (initCapacity)
        for (var i=0; i< initCapacity; i++){
            this.heap.push(i);
            this.n++;
        }

}

PriorityQueue.prototype = {
    push: function(data, priority) {
        var node = new Node(data, priority);
        this.heap.push(node);
        this.n++;
        this.bubble(this.n);
    },

    // removes and returns the data of highest priority
    pop: function() {
        var topVal = this.heap[1];
        this.heap[1] = this.heap.pop();
        this.n--;
        this.sink(1);
        return topVal;
    },

    // bubbles node i up the binary tree based on
    // priority until heap conditions are restored
    bubble: function(i) {
        while (i > 1 && this.isHigherPriority(i >> 1, i)) {
            var parentIndex = i >> 1; // <=> floor(i/2)

            this.swap(i, parentIndex);
            i = parentIndex;
        }   },

    // does the opposite of the bubble() function
    sink: function(i) {
        try{
            while (i*2 <= this.n) {
                var j = 2*i;

                if (j < this.n && this.isHigherPriority(j, j+1)) j++;
                if (!this.isHigherPriority(i,j)) break;

                this.swap(i, j);
                i = j;
            }
        }
        catch (ex){
            console.log(ex);
        }
    },

    // swaps the addresses of 2 nodes
    swap: function(i,j) {
        var temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    },

    // returns true if node i is higher priority than j
    isHigherPriority: function(i,j) {
        return this.heap[i].priority < this.heap[j].priority;
    },
    size: function() { return this.n; }
}

var CustomQueue = PriorityQueue;

module.exports = CustomQueue;
