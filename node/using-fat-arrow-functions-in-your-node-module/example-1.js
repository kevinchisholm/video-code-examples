//create a tools object
var tools = {
	message: 'Hello from this.message!',
	asyncTask: function () {
		
        //simulate an asynchronous task
        setTimeout( function () {
			console.log('THE MESSAGE IS: ' + this.message);
		}, 1000);
	}
};

//call asyncTask
tools.asyncTask();