'use strict';
//================= Сінтаксис ======================
// console.log("Hello");

// console.log('sting' * 9);

// const person = `Alex`;

// console.log(person);

// let zero = null;
// console.log(zero);

// let und;
// console.log(und);

// const obj = {
// 	name: "Victor",
// 	age: 25,
// 	isMarried: false
// };

// console.log(obj.name);
// console.log(obj['name']);

// let literal = {
// 	a: 1,
// 	b: 2,
// 	v: 4,
// 	abc: {
// 		def: {}
// 	}
// };
// console.log(literal.b);
// console.log(literal.v);

// literal.c = 3;
// console.log(literal["c"]);

// literal['d'] = 5;
// console.log(literal);

// let arr = ['plum.png', 'orange.jpeg', literal, []];
// console.log(arr[2]);
// console.log(arr);

//let result = confirm("Are you here?");
//console.log(result);

// const answer = +prompt("Вам есть 18?", "18");// получить число в ответе от пользователя
// console.log(typeof (answer));
// console.log(answer + 5);

// const answers = [];
// answers[0] = prompt('Как Ваше имя? ', '');
// answers[1] = prompt('Как Ваша фамилия? ', '');
// answers[2] = prompt('Сколько Вам лет? ', '');

// document.write(answers);

// =================== IF ===========================

// if (4 == 9) {
// 	console.log('Ok!');
// } else {
// 	console.log('Error');
// }

// const num = 50;

// if (num < 49) {
// 	console.log('Error');
// } else if (num > 100) {
// 	console.log('Много');
// } else {
// 	console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

// ================== SWITCH CASE ===========================

// switch (num) { //switch работает только на строгое сравнение
// 	case 49:
// 		console.log('Error!');
// 		break;
// 	case 100:
// 		console.log('Error!');
// 		break;
// 	case 50:
// 		console.log('Yes!');
// 		break;
// 	default:
// 		console.log('Не в этот раз');
// }

// const hamburger = 5,
// 	fries = 1;

// if (hamburger && fries) {
// 	console.log('Я сыт!');
// } else {
// 	console.log('Я голоден!');
// }


// const hamburger = 3,
// 	fries = 1,
// 	cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'dsfdfs');

// if (hamburger === 3 && cola && fries) {
// 	console.log('Все сыты!');
// } else {
// 	console.log('Мы уходим.');
// }

// const hamburger = 0,
// 	fries = null,
// 	cola = 0;

// if (hamburger || cola || fries) {
// 	console.log('Все довольны!');
// } else {
// 	console.log('Мы уходим.');
// }

// console.log(hamburger || cola || fries);

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);


// const hamburger = 3,
// 	fries = 3,
// 	cola = 0,
// 	nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
// 	console.log('Мы довольны!');
// } else {
// 	console.log('Мы уходим.');
// }

// console.log(hamburger === 3 && cola === 2);
// console.log(fries === 3 && nuggets);

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
// 	console.log('Done!')
// }


// ==================== Цикли =========================

//+++++++++++++++++++ WHILE, DO WHILE +++++++++++++++++++++
// let num = 50;

// while (num <= 55) {
// 	console.log(num);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// }
// while (num <= 55);

// +++++++++++++++++ FOR +++++++++++++++++++

// for (let i = 1; i < 8; i++) {
// 	console.log(num);
// 	num++;
// }

// for (let i = 1; i < 8; i++) {
// 	if (i === 6) {
// 		continue;
// 	}
// 	if (i === 8) {
// 		break;
// 	}
// 	console.log(i);
// }


/// Выведите не чётные числа +++++++++
// for (let i = 0; i < 10; i++) {

// 	// если true, пропустить оставшуюся часть тела цикла
// 	if (i % 2 == 0) continue;

// 	console.log(i); // 1, затем 3, 5, 7, 9
// }

// Выведите чётные числа +++++++++++++
// for (let i = 2; i <= 10; i++) {
// 	if (i % 2 == 0) {
// 		console.log(i);
// 	}
// }


// outer: for (let i = 0; i < 3; i++) {

// 	for (let j = 0; j < 3; j++) {

// 		let input = prompt(`Значение на координатах (${i},${j})`, '');

// 		// если пустая строка или Отмена, то выйти из обоих циклов
// 		if (!input) break outer; // (*)

// 		// сделать что-нибудь со значениями...
// 	}
// }

// alert('Готово!');

//Повторять цикл, пока ввод неверен ++++++++++

// let num;

// do {
// 	num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);

// Вывести простые числа ++++++++++++

// let n = 20;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

// 	for (let j = 2; j < i; j++) { // проверить, делится ли число..
// 		if (i % j == 0) continue nextPrime; // не подходит, берём следующее
// 	}

// 	console.log(i); // простое число
// }

//======================== Циклы в циклах  и Метки ========================

// for (let i = 0; i < 3; i++) {
// 	console.log(i);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(j);
// 	}
// }

// (function () {
// 	var result = '';
// 	var length = 10;

// 	for (var i = 1; i < length; i++) {
// 		for (var j = 0; j < i; j++) {
// 			result += "*";
// 		}

// 		result += '\n';
// 	}

// 	console.log(result);
// })();

// first: for (let i = 0; i < 3; i++) {
// 	console.log(`First level: ${i}`);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(`Second level: ${j}`);
// 		for (let k = 0; k < 3; k++) {
// 			if (k === 2) continue first;
// 			console.log(`Third level: ${k}`);
// 		}
// 	}
// }

// for (let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }

// let i = 2;
// while (i < 16) {
// 	i++;
// 	if (i % 2 === 0) continue;
// 	console.log(i);
// }

// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
// let arrayOfNumbers = [];
// for (let i = 5; i <= 10; i++) {
// 	arrayOfNumbers.push(i);
// }
// console.log(arrayOfNumbers)

// function firstTask() {
// 	const arr = [3, 5, 8, 16, 20, 23, 50];
// 	const result = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		result[i] = arr[i];
// 	}

// 	console.log(result);
// 	return result;
// }

// firstTask();


// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
//Для определения типа данных используйте typeof();
// function secondTask() {
// 	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// 	const data = [5, 10, 'Shopping', 20, 'Homework'];

// 	for (let i = 0; i < data.length; i++) {
// 		if (typeof (data[i]) === 'number') {
// 			data[i] *= 2;
// 		}
// 		if (typeof (data[i]) === 'string') {
// 			data[i] += ' - done';
// 		}
// 	}
// 	console.log(data);
// 	// Не трогаем
// 	return data;
// }

// secondTask();

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.

// function thirdTask() {
// 	const data = [5, 10, 'Shopping', 20, 'Homework'];
// 	const result = [];

// 	for (let i = 1; i <= data.length; i++) {
// 		result[i - 1] = data[data.length - i]
// 	}

// 	console.log(result);
// 	return result;
// }

// thirdTask();

//++++++++++++++++++ Елочка із 5 строк ++++++++++++++++++
const lines = 10;
let result = '';

// for (let i = 1; i <= lines; i++) {
// 	for (let j = 1; j <= lines - i; j++) {
// 		result += " ";
// 	}
// 	for (let k = 0; k < 2 * i - 1; k++) {
// 		result += "*";
// 	}
// 	result += "\n";
// }

// console.log(result);

//++++++++++++++++++ Елочка із 6 строк ++++++++++++++++++
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
// 	for (let j = 1; j <= lines - i; j++) {
// 		result += " ";
// 	}
// 	for (let k = 0; k < 2 * i + 1; k++) {
// 		result += "*";
// 	}
// 	result += "\n";
// }

// console.log(result);

// +++++++++++++++++ Или такая елочка (другой способ) +++++++++++++
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
// 	for (let j = 0; j < lines - i; j++) {
// 		result += " ";
// 	}
// 	for (let j = 0; j < 2 * i + 1; j++) {
// 		result += "*";
// 	}
// 	result += "\n";
// }

// console.log(result)


//++++++++++++++++++ Елочка через WHILE ++++++++++++++++++
// var i = 0,
// 	j = 0;
// // Желаемое количество строк
// var max = 5;
// var space = "",
// 	star = "";

// while (i < max) {
// 	space = "";
// 	star = "";
// 	for (j = 0; j < max - i; j++) space += " ";
// 	for (j = 0; j < 2 * i + 1; j++) star += "*";
// 	console.log(space + star);
// 	i++;
// }