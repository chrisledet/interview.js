let number = require('../number');

let NodesFromArray = (values)=> {
  if (values.length < 1) { return null; }

  const head = new number.Node(values[0], null);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = new number.Node(values[i], null);
    current = current.next;
  }

  return head;
}

let PrettyPrint = (node)=> {
  let str = '';
  while (node) {
    str += node.value;
    if (node.next) {
      str += ' -> ';
    }
    node = node.next;
  }

  return str;
}

module.exports = { NodesFromArray: NodesFromArray, PrettyPrint: PrettyPrint };
