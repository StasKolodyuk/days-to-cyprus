var topWords = [
	"Привет - Я",
	"Вы танцуете? - Есис хоревете?",
	"Налейте мне еще! - Вале ке ало!",
	"Ты пахнешь как протухшая фета - Еси миризис сан вромики фета"
];

function daysToCyprus() {
	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	var cyprusDate = new Date(2016, 08, 05);
	var today = new Date();

	return Math.round(Math.abs((cyprusDate.getTime() - today.getTime())/(oneDay)));
}

(function appendDays() {
	document.getElementById('days').innerHTML = daysToCyprus();
}) ();

(function appendWord() {
	document.getElementById('word').innerHTML = topWords[Math.floor(topWords.length * Math.random())] + document.getElementById('word').innerHTML;
}) ();
