var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
	months = ['January', 'February', 'March', 'April', 'May', 'June', 
	'July', 'August', 'September', 'October', 'November', 'December'];

function getDays () {
	return days;
};

function getMonths () {
	return months;
};

function getDay (dayNumber) {
	return (Number.isInteger(dayNumber) && (dayNumber <= (days.length - 1))) ? days[dayNumber] : '';
};

function getMonth (monthNumber) {
	return (Number.isInteger(monthNumber) && (monthNumber <= (months.length - 1))) ? months[monthNumber] : '';
};

// export the module
module.exports = {
	getDays: getDays,
	getMonths: getMonths,
	getDay: getDay,
	getMonth: getMonth
};
