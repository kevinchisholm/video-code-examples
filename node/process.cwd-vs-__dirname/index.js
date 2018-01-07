let tools = require('./tools/tools');
let subTools = require('./tools/subTools/subTools');

//show directories (A)
console.log('A: process.cwd() -> ' + process.cwd());
console.log('A: __dirname -> ' + __dirname);

//show directories (B)
tools.showDirectories();

//show directories (C)
subTools.showDirectories();

