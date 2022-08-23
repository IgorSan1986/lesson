'use strict';

// let num = 20;

// function showFirstMessage(text) {
// 	console.log(text);
// 	let num = 10;
// 	console.log(num);
// }

// showFirstMessage('Hello World!');

// function calc(a, b) {
// 	return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 15));


// function ret() {
// 	let num = 50;
// 	return num;
// }

// let anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
// 	console.log('Hello');
// };

// logger();

// const calculator = (a, b) => a + b;


// let c = 4
// function addX(x) {
// 	return function (n) {
// 		return n + x
// 	}
// }
// const addThree = addX(3)
// let d = addThree(c)
// let d1 = addThree(c)
// console.log('example partial application', d, d1)


// function createCounter() {
// 	let counter = 0
// 	const myFunction = function () {
// 		counter = counter + 1
// 		return counter
// 	}
// 	return myFunction
// }
// const increment = createCounter()
// const c1 = increment()
// const c2 = increment()
// const c3 = increment()
// console.log('example increment', c1, c2, c3)


//======================= Универсальность =================
// const usdCurr = 28,
// 	eurCurr = 32;

// function convert(amount, curr) {
// 	console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

//========================== Return ========================

// const usdCurr = 28,
// 	eurCurr = 32,
// 	discount = 0.9;

// function convert(amount, curr) {
// 	return curr * amount;
// }

// function promotion(result) {
// 	console.log(result * discount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// promotion(convert(500, usdCurr));

// const res = convert(500, eurCurr);
// promotion(res);

// function test() {
// 	for (let i = 0; i < 5; i++) {
// 		console.log(i);
// 		if (i === 3) return
// 	}
// 	console.log('Done');
// }
// test();

// function doNothing() { };
// console.log(doNothing() === undefined);


// function sayHello(name) {
// 	return `Привет, ${name}!`;
// }

// sayHello('Антон');

// function getMathResult(num, times) {
// 	if (typeof (times) !== 'number' || times <= 0) {
// 		return num;
// 	}

// 	let str = '';

// 	for (let i = 1; i <= times; i++) {
// 		if (i === times) {
// 			str += `${num * i}`;
// 			// Тут без черточек в конце
// 		} else {
// 			str += `${num * i}---`;
// 			// Это тоже самое, что и
// 			// str = str + num * i + "---"
// 		}
// 	}

// 	return str;
// }

// getMathResult();
// console.log(getMathResult(10, 5));

// ====================== Методы и свойства строк и чисел ======================

// const str = 'application';

// console.log(str.toUpperCase()); // все буквы БОЛЬШИЕ
// console.log(str.toLowerCase()); // все буквы с маленькой буквы
// console.log(str.length);

// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));

// const logg = 'Doing my first application!';

// console.log(logg.indexOf('application'));
// console.log(logg.slice(15, 26));
// console.log(logg.substring(15, 26));
// console.log(logg.substr(15, 11)); // сколько символов необходимо вырезать

// const num = 12.2;
// const numPx = '12.2px'
// console.log(Math.round(num));
// console.log(parseInt(numPx));
// console.log(parseFloat(numPx));
