function daysToCyprus() {
	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	var cyprusDate = new Date(2016, 08, 05);
	var today = new Date();

	return Math.round(Math.abs((cyprusDate.getTime() - today.getTime())/(oneDay)));
}

(function appendDays() {
	document.getElementById('days').innerHTML = daysToCyprus();
}) ();