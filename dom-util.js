//const fs = require('fs');
//const data = fs.readFileSync('./test/fixtures/broccoli.json', 'utf-8');
//const broccoli = JSON.parse(data);

const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  // if (!(node && node.childNodes.length > 0)) {
  if (node.childNodes) {
    let children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      visitAllNodes(children[i], callback);
    }
  }
  callback(node);
};

//var count = 0;
//visitAllNodes(broccoli, () => {count++;});
//console.log(count);


const flattenTreeToArray = function(parentNode) {
  const result = [];
  visitAllNodes(parentNode, (node) => {
    result.push(node);
  });
  return result;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};



const countYourBroccoli = function(node) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  if (node.childNodes.length === 0) {
    return 1;
  }

  let descendantCount = 0;
  for (let i = 0; i < broccoli.childNodes.length; i++) {
    const smallerBroccoli = broccoli.childNodes[i];
    descendantCount += countYourBroccoli(smallerBroccoli);
  }

  return 1 + descendantCount;
};


/*
const eatYourBroccoli = function(broccoli) {
    broccoli.children.forEach(smallerBroccoli => eatYourBroccoli(smallerBroccoli));
    console.log(`I ate broccoli of size: ${broccoli.size}!`);
};


const countYourBroccoli = function(broccoli) {
    if (broccoli.children.length === 0) {
        // "leaf node" -- this is the base case, the smallest broccoli.
        // Return 1 to include this leaf node in the count.
        return 1;
    }

    let descendantCount = 0;
    for (let i = 0; i < broccoli.children.length; i++) {
      const smallerBroccoli = broccoli.children[i];
      descendantCount += countYourBroccoli(smallerBroccoli);
    }

    // count this level plus all the lower levels
    return 1 + descendantCount;
};

// Perform recursive depth-first search to print the nodes in the given DOM tree.
const printDom = function(node, level = 0) {
  if (!(node && node.tagName)) {
    return;
  }
  const indent = '\t'.repeat(level);
  const msg = `${indent}${node.tagName}`;
  console.log(msg);

  node.childNodes.forEach(node => {
    printDom(node, level + 1);
  });
};

// e.g., printDom(document.body);

Node.hasChildNodes()
Returns a Boolean indicating if the element has any child nodes, or not.

*/