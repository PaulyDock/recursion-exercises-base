const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...

const testCases = [
9,
null,
true,
false,
'Hello world',
[],
[8],
[8, 'hi'],
[1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
[8, [[], 3, 4]],
[[[['foo']]]],
{},
{'a': 'apple'},
[{'a': 'b'}, {'c': 'd'}],
{'a': ['b', 'c']}
];


const stringify = function(obj) {
  var stringifiedObj = '';

  switch (Object.prototype.toString.call(obj)) {
    
    case '[object Number]':
      //return obj;
      stringifiedObj += obj;
      break;

    case '[object Null]':
      stringifiedObj += `${obj}`;
      break;
    
    case '[object Boolean]':
      stringifiedObj += `${obj}`;
//      return `\"${obj}\"`;
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
//      return '{ ' + stringedObj + ' }';
      break;

    case '[object Array]':
      resArr = _.map(obj, (entry) => stringify(entry));
      stringifiedObj += '[' + `${resArr}` + ']';
//      return '[' + `${resArr}` + ']';
      break;

    default:
//      return `"${obj}"`;
      return obj;
      break;

  }

  return stringifiedObj;
};

//console.log(testCases.hasChildNodes());
//_.each(testCases, (entry) => console.log(entry, '-', entry.hasChildNodes()));
//_.each(testCases, (entry) => console.log(entry, '-', Object.prototype.toString.call(entry)));
//_.each(testCases, (entry) => console.log(entry, "-", stringify(entry)));

module.exports = {
  stringify: stringify
};