
// 1234 -
// 4321_
// qaz - xsw
// _zxd


let password = '_zxd';

if (password.length >= 4 && (password.includes('-') || password.includes('_'))) {
  console.log('Пароль надежный');
} else {
  console.log('Пароль не надежный');
};





let name = 'Vladimir';
let surname = 'Putin';
let correctName = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
let correctSurname = surname.substr(0, 1).toUpperCase() + surname.substr(1).toLowerCase();
let result = correctName != name || correctSurname != surname ? 'Имя было преобразовано' : 'Имя осталось без изменений';
console.log(correctName, correctSurname, result);
