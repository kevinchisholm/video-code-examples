// require the dateTools module.
var dateTools = require('dateTools');


//demonstrate the getDay method
console.log('TEST 1: ' + dateTools.getDay(0)); //TEST 1: Monday
console.log('TEST 2: ' + dateTools.getDay(6)); //TEST 2: Sunday

//demonstrate the getMonth method
console.log('TEST 3: ' + dateTools.getMonth(0)); //TEST 3: January
console.log('TEST 4: ' + dateTools.getMonth(11)); //TEST 4: December

//demonstrate the getDays method
console.log('TEST 5: ' + dateTools.getDays()); //TEST 5: All seven days

//demonstrate the getMonths method
console.log('TEST 6: ' + dateTools.getMonths()); //TEST 6: All 12 months