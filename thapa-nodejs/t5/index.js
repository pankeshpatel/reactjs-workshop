// Path module provide utilities 
// for working file and directory path
const path = require('path');

// It will reterieve the directory path...
console.log(path.dirname('/Users/pankeshpatel/reactjs-workshop/thapa-nodejs/t5/index.js'));
console.log(path.extname('/Users/pankeshpatel/reactjs-workshop/thapa-nodejs/t5/index.js'));
console.log(path.basename('/Users/pankeshpatel/reactjs-workshop/thapa-nodejs/t5/index.js'));

const myPath = path.parse('/Users/pankeshpatel/reactjs-workshop/thapa-nodejs/t5/index.js');
console.log(myPath.name);