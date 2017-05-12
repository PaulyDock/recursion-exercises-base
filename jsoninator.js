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
]

const stringify = function(obj) {
  if (Object.prototype.toString.call(obj) === '[object Array]') {
    return true;
  }
  return false;
};

_.each(testCases, (entry) => console.log(entry, "-", stringify(entry)));

module.exports = {
  stringify: stringify
};