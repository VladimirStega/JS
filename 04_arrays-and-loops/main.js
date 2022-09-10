// Задание 1

// n = 0, m = 100, count = 100;
// n = 2, m = 5, count = 50;
// n = 100, m = -5, count = 70;
// n = -3, m = -10, count = 42.


let numb = [];
let n = -3;
let m = -10;
let count = 42;

for (let i = 0; i < count; i++) {
	numb.push(Math.round(Math.random() * (m - n) + n));
}

console.log(numb);



// Задание 2

// 'Привет, мир!' → '!рим ,тевирП';
// '1' → '1';
// '' → ''.

let str = "Привет, мир!";
let strRev = "";
for (let i = str.length - 1; i >= 0; i--) {
	strRev += str[i];
}

console.log(strRev);


// Задание 3

// Для roadMines = [true, true, true, true, true, true, true, true, true, true] вывод: танк переместился на 1, танк повреждён, танк переместился на 2, танк уничтожен.
// Для roadMines = [true, false, false, false, false, false, false, false, false, true] вывод: танк переместился на 1, танк повреждён, танк переместился на 2, 3, 4, 5, 6, 7, 8, 9, 10, танк уничтожен.
// Для roadMines = [false, false, false, true, false, false, false, false, false, false] вывод: танк переместился на 1, 2, 3, 4, танк повреждён, танк переместился на 5, 6, 7, 8, 9, 10.
// Для roadMines = [false, false, false, false, false, false, false, false, false, false] вывод: танк переместился на 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.

let roadMines = [false, false, false, false, false, false, false, false, false, false];
let position = 0;
let life = 2;

for (let position in roadMines) {
	console.log(`Танк переместился на ${parseInt(position) + 1}`);

	if (roadMines[position]) {
		lives--;
		if (lives == 1)
			console.log("Танк повреждён");
		else if (lives == 0) {
			console.log("Танк уничтожен");
			break;
		}
	}
}


// Задание 4

let weekday = []
let weekdays = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let currentWeekday = 'среда';
let weekdayIndex = weekdays.indexOf(currentWeekday);
for (let day = 1; day <= 31; day++) {
	weekday = weekdays[(day + weekdayIndex - 1) % 7];
	console.log(`${day} января, ${weekday}`);

};
