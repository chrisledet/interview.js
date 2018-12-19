class Node {
    constructor(value, nextNode) {
        this.value = value; // value of the node
        this.next = nextNode; // reference to next node in list
    }

    getNextNode() {
        return this.next;
    }

    hasNextNode() {
        return this.getNextNode() !== null;
    }
};

/*
    You are given two non-empty linked lists representing two non-negative integers.
    The digits are stored in reverse order and each of their nodes contain a single digit.

    Add the two numbers and return it as a linked list.

    Example:
    - leftNode:     (0) -> (2)          // represents number: 20
    - rightnode:    (0) -> (8)          // represents number: 80
    - return node:  (0) -> (0) -> (1)   // represents number: 100
*/
Add = function(leftNode, rightNode) {
    // TODO: implement
    // return Node object of leftNode + rightNode
};

module.exports = {
    Node: Node,
    Add: Add,
};
