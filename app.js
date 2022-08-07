'use strict';

console.log("Hello");

console.log('sting' * 9);

const person = `Alex`;

console.log(person);

let zero = null;
console.log(zero);

let und;
console.log(und);

const obj = {
	name: "Victor",
	age: 25,
	isMarried: false
};

console.log(obj.name);
console.log(obj['name']);

let literal = {
	a: 1,
	b: 2,
	v: 4,
	abc: {
		def: {}
	}
};
console.log(literal.b);
console.log(literal.v);

literal.c = 3;
console.log(literal["c"]);

literal['d'] = 5;
console.log(literal);

let arr = ['plum.png', 'orange.jpeg', literal, []];
console.log(arr[2]);
console.log(arr);

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

const category = "toys";
console.log(`https://someurl.com/${category}/5`);

