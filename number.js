class Node {
	constructor(val, nextNode) {
		this.value = val; // value of the node
		this.next = nextNode; // reference to next node in list
	}
};

/*
	You are given two non-empty linked lists representing two non-negative integers.
	The digits are stored in reverse order and each of their nodes contain a single digit.

	Add the two numbers and return it as a linked list.

	Example:
	- leftNode:  Node(1) -> Node(2) -> Node(3)    // represents 321
	- rightnode: Node(2) -> Node(8) -> Node(1)    // represents 182

	- return:    Node(3) -> Node(0) -> Node(5)    // represents 503
*/
Add = function(leftNode, rightNode) {
	// TODO: implemenet me!!!!
	// return Node object of sum
};

module.exports.Node = Node;
module.exports.Add = Add;
