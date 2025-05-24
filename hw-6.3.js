///Задание_1///
let str = 'js';
let newStr = str.toUpperCase();
console.log(newStr);

///Задание_2///
const array = ['Человек', 'Белый снег', 'Белый цвет', 'СашА БЕЛЫЙ', 'Не белый'];
const secondWord = 'Белый';

array.forEach(newArray => {
    if (newArray.toLowerCase().startsWith(secondWord.toLowerCase())) {
        console.log(newArray);
    }
}); 

///Задание_3///
const number = 32.58884;

const mathFloorNumber = Math.floor(number);
const mathCeilNumber = Math.ceil(number);
const mathRoundNumber = Math.round(number);

console.log(`Число, округлённое до:\n
    Меньшего целого: ${mathFloorNumber}\n
    Большего целого: ${mathCeilNumber}\n
    Ближайшего целого: ${mathRoundNumber}`);

///Задание_4///
const numbersArray = [52, 53, 49, 77, 21, 32];

const maxNumber = Math.max(...numbersArray);
const minNumber = Math.min(...numbersArray);

console.log(`Минимальное значение: ${minNumber}\nМаксимальное значение: ${maxNumber}`);

///Задание_5///
function randomNumber() {
    const number = Math.floor(Math.random() * 10) + 1;
    console.log(number);
}

randomNumber();

///Задание_6///
function generateRandomNumbersArray () {
    let num = Number(prompt('Введите число'));
    const array = [];

    for (let i = 0; i < num / 2; i++) {
        const randomNumber = Math.floor(Math.random() * num);
        array.push(randomNumber);
    }

    alert(`Массив случайных чисел: ${array}`);
}

///Задание_7///
function randomNumberInRange () {
    let firstNum = Number(prompt('Введите первое число'));
    let secondNum = Number(prompt('Введите второе число'));

    if (isNaN(firstNum) || isNaN(secondNum)) {
        alert('Пожалуйста, введите число!');
        return;
    } 

    if (firstNum === secondNum) {
        alert('Вы ввели одинаковые числа!');
        return;
    }

    if (firstNum > secondNum) {
        [firstNum, secondNum] = [secondNum, firstNum];
    }

    const randomNumber = Math.floor(Math.random() * (secondNum - firstNum + 1)) + firstNum;

    alert(`Случайное число в заданном диапазоне: ${randomNumber}`);
}

randomNumberInRange();

///Задание_8///
const currentDate = new Date();
console.log(currentDate);

///Задание_9///
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate.toLocaleDateString());

///Задание_10///
function currentDateAndTime () {
    const myDate = new Date();
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        
    let fullDate = 'Дата: ' + myDate.getDate() + ' ' + months[myDate.getMonth()] + ' ' + myDate.getFullYear() + '- это ' + days[myDate.getDay()];
    let fullTime = 'Время: ' + myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds();

    console.log(fullDate);
    console.log(fullTime);
}

currentDateAndTime();