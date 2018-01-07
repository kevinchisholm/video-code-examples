var del = require('delete');

//delete the built files
del.sync(['build/js/*.js']);
del.sync(['build/css/*.css']);