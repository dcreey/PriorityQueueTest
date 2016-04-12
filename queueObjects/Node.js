/**
 * Created by dcreey on 4/10/2016.
 */
function Node (data, priority) {
    this.data = data;
    this.priority = priority;
}

Node.prototype.toString = function(){return this.priority}

module.exports = Node;