const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  var flatNodes = flattenTreeToArray(root);
  //console.log(flatNodes);
  flatNodes = _.reject(flatNodes, (node) => node.nodeType === 3);
  //console.log(flatNodes);
  flatNodes = _.filter(flatNodes, (node) => node.id === id);
  //console.log(flatNodes);
  return flatNodes[0];

//  flatNodes = _.map(flatNodes, (node) => node.parentNode);
//  console.log(flatNodes);

//  for (let i = 0; i < 20; i++) {
//    let curNode = flatNodes[i];
//    console.log(curNode.tagName, curNode.src);
//  }
};

const getElementsByClassName = function(root, className) {
  // Your code here
};

const getElementsByTagName = function(root, tagName) {
  // Your code here
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
