const _ = require('underscore'); // the real one! :)

const stringify = function(obj) {
  var stringifiedObj = '';

  switch (Object.prototype.toString.call(obj)) {
    case '[object Number]':
      stringifiedObj += obj;
      break;

    case '[object Null]':
      stringifiedObj += `${obj}`;
      break;
    
    case '[object Boolean]':
      stringifiedObj += `${obj}`;
      break;

    case '[object String]':
      stringifiedObj += '\"' + obj + '\"';
      break;

    case '[object Object]':
      let stringedObj = '';
      _.each(obj, (value, key) => {
        stringifiedPropValue = stringify(value);
        stringifiedKey = stringify(key);
        stringedObj += `${stringifiedKey}:${stringifiedPropValue}`;
      });
      stringifiedObj += '{' + stringedObj + '}';
      break;

    case '[object Array]':
      resArr = _.map(obj, (entry) => stringify(entry));
      stringifiedObj += '[' + `${resArr}` + ']';
      break;

    default:
      return obj;
      break;
  }

  return stringifiedObj;
};

module.exports = {
  stringify: stringify
};