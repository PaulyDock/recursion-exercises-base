const fs = require('fs');
const data = fs.readFileSync('./test/fixtures/broccoli.json', 'utf-8');
const broccoli = JSON.parse(data);

const visitAllNodes = function(node, callback) {
  if (node.childNodes) {
    let children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      visitAllNodes(children[i], callback);
    }
  }
  callback(node);
};

const flattenTreeToArray = function(parentNode) {
  const result = [];
  visitAllNodes(parentNode, (node) => result.push(node));
  return result;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};