var sayHi = [
	"Здравствуйте, здравствуй, привет    Я́сас, я́су, я",
	"До свидания    Я́су",
	"На здоровье!    Сти́н иги́я су!",
	"Как дела?    Ти канис?",
	"Вы танцуете?    Есис хоревете?",
	"Нет, я не танцую    О́хи, ден хоре́во",
	"Спасибо    Эфхаристо́",
	"Пожалуйста (просьба)    Паракало́",
	"Извините    Сигно́ми",
	"Как тебя зовут?    Мэ ле́не?",
	"Меня зовут...    То онома́ му и́нэ...",
	"Я не говорю по-гречески    Дэ милао́ элиника́",
	"Да, хорошо    Нэ, эндакси",
	"Нет    О́хи",
	"Сколько стоит обзорная экскурсия по городу?    Посо кани йирос тыс полис?",
	"Есть ли гид, говорящий по-русски?    Ипархи ксэнагос, пу милаи росика?",
	"Я иностранец и не знаю города. Не могли бы вы помочь мне найти...?    Имэ ксэнос кэ дэн кзэро тын боли. Та борусатэ на мэ воитысэтэ на вро...?",
	"Я заблудился. Помогите мне, пожалуйста    Хатыка. Воитыстэ мэ, паракало.",
	"Покажите, пожалуйста, на плане города место, где я сейчас нахожусь    Дэкстэ му, паракало, сто схедьяграма тыс полис то мэрос пу врискомэ тора",
	"Разрешите пройти    Эпитрэпстэ му на пэрасо"
];

var lol = [
	"Как вы говорите это называется? Метакса?    Пос ипате легете афто? Метакса?",
	"Налейте мне еще! И положите с собой пару бутылок    Вале ке ало, ке досе мази му дио букалья!",
	"Нет, я хорошо себя чувствую и да, я уверен, что хочу искупаться в фонтане    Охи, кала име, нэ, ке име сигурос оти фело на кано банио сто синдревани",
	"Вы уверены, что это шуба из настоящего песца?    Исте сигури оти афти и гуна ине апо тис поликис алепус?",
	"Поцелуй меня    Филисе ме",
	"Ты красив(а) как греческий бог(иня)    Исе оморфос сан еллиникос феос",
];

var numbers = [
	"Один    Эна",
	"Два    Дио",
	"Три    Триа",
	"Четыре    Тэссера",
	"Пять    Пэнде",
	"Шесть    Экси",
	"Семь    Эпта",
	"Восемь    Окто",
	"Девять    Энния",
	"Десять    Дэка",
	"Двадцать    Икоси",
	"Двадцать один    Икоси эна",
	"Двадцать два    Икоси дио (и т. д.)",
	"Тридцать    Трианда",
	"Сорок    Саранда",
	"Пятьдесят    Пенинда",
	"Шестьдесят    Эксинда",
	"Семьдесят    Евдоминда",
	"Восемьдесят    Огдонда",
	"Девяносто    Энэнинда",
	"Сто    Экато"
];

var cafe = [
	"Где здесь можно перекусить?    Эдо́ пу та бору́са на цимби́со?",
	"Принесите, пожалуйста, счет    Фэ́ртэ то логариасмо́, паракало́",
	"Спасибо за хорошее обслуживание    Эфхаристо́ я тын пэрипи́иси",
	"Приятного аппетита    Кали́ о́рэкси",
	"У вас есть меню на русском языке?    Эхэтэ эна каталого ста росика?",
	"Какое у вас фирменное блюдо?    Ты спэсиалитэ эхэтэ?",
	"Можно заказать что-нибудь другое?    Боро на парангило тыпота ало?",
	"Я отдохнул(а) очень хорошо!    Ксекура́стика поли́ кала́!"
];

var shop = [
	"Сколько стоит?    По́со ка́ни?",
	"Я хочу купить сувениры    Тэ́ло на агора́со мерика́ сувэни́р",
	"Слишком дорого    И́нэ поли́ акриво́",
	"Мне нужно обменять доллары на EUR    Хреазомэ на халасо доларья я эвро",
	"Сколько я вам должен?    Поса сас офило?",
	"Я хочу купить подарки    Тэло на агорасо мерика дора",
	"Могу я с этой суммы оформить tax free для туристов?    Боро на кано туристыко тэкс фри апафто то посо?"
];

var sayFuck = [
	"Каков хитрец!	Ти ексипнос!",
	"Вонючка	Вромиари",
	"Не раздражай меня	Ми ме екневризис",
	"У тебя поддельная шуба	И гуна су ине муфа",
	"Ты пахнешь как протухшая фета	Еси миризис сан вромики фета"
];


function createList(array, name) {
    var list = document.createElement('ol');
    for(var i = 0; i < array.length; i++) {
        var item = document.createElement('li');
        var link = document.createElement('a');
        link.setAttribute('href', "#");
        item.appendChild(link);
        //item.className = "label";
        link.appendChild(document.createTextNode(array[i]));
        list.appendChild(item);
    }

		var div = document.createElement('div');
		div.innerHTML = name;
		div.className = "label";
		div.appendChild(list);

    return div;
}

(function appendWord() {
		document.getElementById('container').appendChild(createList(sayFuck, "Saying Fuck You"));
		document.getElementById('container').appendChild(createList(sayHi, "Saying Hi"));
		document.getElementById('container').appendChild(createList(lol, "LOL"));
		document.getElementById('container').appendChild(createList(numbers, "Numbers"));
		document.getElementById('container').appendChild(createList(cafe, "In Cafe"));
		document.getElementById('container').appendChild(createList(sayHi, "In Shop"));
}) ();