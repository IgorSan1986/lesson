// массів з корістувачами (користувач об'єкт) у якіх користувач пароль
// зробити функцію входу в акк.
// вхід функції: логін та пароль
// вихід: 
//1) Логін неправильний
//2) Пароль неправильний
//3) Вхід виконано

const users = [
	{
		login: 'Vasya',
		password: '123'
	},
	{
		login: 'Vanya',
		password: '999'
	},
	{
		login: 'Ihor',
		password: '555'
	},
	{
		login: 'Sviat',
		password: '777'
	},
	{
		login: 'Biden',
		password: '456'
	}
];

function login(login, password) {
	for (const user of users) {
		if (user.login === login) {
			if (user.password === password) {
				console.log('Вхід виконано');
			} else {
				console.log('Пароль неправильний');
			}
			return;
		}
	}
	console.log('Логін неправильний');
}

login('Sviat', 777);
