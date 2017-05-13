const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  var flatNodes = flattenTreeToArray(root);
  flatNodes = _.reject(flatNodes, (node) => node.nodeType === 3);
  flatNodes = _.filter(flatNodes, (node) => node.id === id);
  return flatNodes[0];
};

const getElementsByClassName = function(root, className) {
  var flatNodes = flattenTreeToArray(root);
  flatNodes = _.reject(flatNodes, (node) => node.nodeType === 3);
  flatNodes = _.filter(flatNodes, (node) => {
    let attributes = node.attributes;
    return _.some(attributes, (attribute) => _.indexOf(attribute.value.split(' '), className) > -1);
  });
  return flatNodes;
};

const getElementsByTagName = function(root, tagName) {
  var flatNodes = flattenTreeToArray(root);
  flatNodes = _.reject(flatNodes, (node) => node.nodeType === 3);
  flatNodes = _.filter(flatNodes, (node) => node.tagName === tagName);
  return flatNodes;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
