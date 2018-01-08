//omit the first two argument (node and the path to showArgs-3.js)
var args = process.argv.slice(2);

//inspect the arguments
args.forEach(function(val, index, array) {
  console.log('Argument # ' + index + ': ' + val);
});