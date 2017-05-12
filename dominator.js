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
  var flatNodes = flattenTreeToArray(root);
  flatNodes = _.reject(flatNodes, (node) => node.nodeType === 3);
  //console.log(flatNodes);
  flatNodes = _.filter(flatNodes, (node) => {
    let attributes = node.attributes;
    return _.some(attributes, (attribute) => _.indexOf(attribute.value.split(' '), className) > -1);
  });
  return flatNodes;
  
  /*_.each(flatNodes, (node) => {
    let attributes = node.attributes;
    console.log("----", node, attributes, "----");
    _.each(attributes, (attribute) => {
      //console.log(attribute.name);
      console.log(attribute.value);
    });
  });*/
  //console.log(flatNodes);

/*  flatNodes = _.filter(flatNodes, (node) => node.class === className);
  console.log(flatNodes);
  return flatNodes;*/
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
