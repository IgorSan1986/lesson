/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	private: false
// };

// for (let i = 0; i < 2; i++) {
// 	const answer1 = prompt('Один из последних просмотренных фильмов?', ''),
// 		answer2 = prompt('На сколько оцените его?', '');

// 	if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50) {
// 		personalMovieDB.movies[answer1] = answer2;
// 		console.log('done');
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// }

// if (personalMovieDB.count < 10) {
// 	console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 	console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
// 	console.log("Вы киноман");
// } else {
// 	console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);


// const answer1 = prompt('Один из последних просмотренных фильмов?', ''),
// 		answer2 = prompt('На сколько оцените его?', '');

// let numberOfQuestion = 0;
// while (numberOfQuestion < 2) {
// 	const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
// 		rateFilm = prompt('На сколько оцените его?', '');
// 	personalMovieDB.movies[lastFilm] = rateFilm;
// 	numberOfQuestion++;

// }
// console.log(personalMovieDB);

// ====================== Третий практикум =================

// let numberOfFilms;

// function start() {
// 	numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

// 	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');
// 	}
// }

// start();

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	private: false
// };

// function rememberMyFilms() {
// 	for (let i = 0; i < 2; i++) {
// 		const answer1 = prompt('Один з останніх переглянутих фільмів?', ''),
// 			answer2 = prompt('На скільки Ви його оціните?', '');

// 		if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50) {
// 			personalMovieDB.movies[answer1] = answer2;
// 			console.log('done');
// 		} else {
// 			console.log('error');
// 			i--;
// 		}
// 	}
// }

// rememberMyFilms();

// function detectPersonalLevel() {
// 	if (personalMovieDB.count < 10) {
// 		console.log("Ви подивились доволі мало фільмів");
// 	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 		console.log("Ви класичний глядач");
// 	} else if (personalMovieDB.count >= 30) {
// 		console.log("Ви кіноман");
// 	} else {
// 		console.log("Відбулась помилка");
// 	}
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
// 	if (!hidden) {
// 		console.log(personalMovieDB);
// 	}
// }

// showMyDB(personalMovieDB.private);

// function writeYourGenres() {
// 	for (let i = 1; i <= 3; i++) {
// 		personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
// 	}
// }

// writeYourGenres();

// ++++++++++++++ Функция вычисления объема куба и площади всей поверхности куба +++++++
function calculateVolumeAndArea(a) {
	if (typeof (a) !== 'number' || a < 0 || !Number.isInteger(a)) {
		return 'При вычислении произошла ошибка';
	}

	const s = 6 * (a * a),
		v = a * a * a;

	return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
}

console.log(calculateVolumeAndArea(15));

//++++++++++++++++ Функция вычисления билета для купе по номеру ++++++++++++++++++
function getCoupeNumber(ticket) {
	if (typeof (ticket) !== 'number' || ticket < 0 || !Number.isInteger(ticket)) {
		return 'Ошибка. Проверьте правильность введенного номера места';
	}

	if (ticket === 0 || ticket > 36) {
		return "Таких мест в вагоне не существует";
	}

	for (let i = 4; i <= 36; i = i + 4) {
		if (ticket <= i) {
			return Math.ceil(i / 4);
		}
	}
}
console.log(getCoupeNumber(36));

//++++++++++++++ Функция принимает в себя целое число минут и возвращает время в нужном формате строки


function getTimeFromMinutes(time) {
	if (typeof (time) !== 'number' || time < 0 || !Number.isInteger(time)) {
		return 'Ошибка. Проверьте данные';
	}

	const hour = Math.floor(time / 60);
	const minutes = time % 60;

	if (hour === 0 || hour !== 1 || hour > 4) {
		return `Это ${hour} часов и ${minutes} минут`;
	} else if (hour !== 1 || hour >= 2 && hour <= 4) {
		return `Это ${hour} часа и ${minutes} минут`;
	} else {
		return `Это ${hour} час и ${minutes} минут`
	}
}

console.log(getTimeFromMinutes(200));

