///Задача_1///
const array = [1, 5, 4, 10, 0, 3];


for (let i = 0; i < array.length; i++) {
    console.log(array[i]);

    if (array[i] === 10) {
        break;
    }
    
}

///Задача_2///
const array = [1, 5, 4, 10, 0, 3];
const index = array.indexOf(4);
console.log(index);

///Задача_3///
const array = [1, 3, 5, 10, 20];
const numbers = array.join(' ');
console.log(numbers);

///Задача_4///
const rows = 3;
const columns = 3;
const array = [];

for (let i = 0; i < rows; i++) {
    array[i] = [];

    for (let j = 0; j < columns; j++) {
        array[i][j] = 1;
    }
    
}

console.log(array);

///Задача_5///
const firstArray = [1, 1, 1];
const secondArray = [2, 2, 2];

const thirdArray = firstArray.concat(secondArray);
console.log(thirdArray);

///Задача_6///
const array = [9, 8, 7, 'a', 6, 5];

array.sort();
const secondArray = array.filter(item => item !== 'a');
console.log(secondArray);

///Задача_7///
const numbers = [9, 8, 7, 6, 5];

for (let i = 0; i < numbers.length; i++) {
    let userInput  = (prompt('Попробуй угадать число из массива'));

    if (userInput === null) {
        alert('Игра завершена');
        break;
    }

    let userAnswer = Number(userInput);

    if (isNaN(userAnswer)) {
        alert('Пожалуйста, введите число!');
        continue;
    }

    if (numbers.includes(userAnswer)) {
        alert('Угадал');
    } else {
        alert('Не угадал');
    }

}

///Задача_8///
const row = 'abcdef';
console.log(row);

const rowArray = row.split('');

const reverseRowArray = rowArray.reverse();

const complete = reverseRowArray.join('');
console.log(complete);

///Задача_9///
const numbers = [
    [1, 2, 3],
    [4, 5, 6]
];

const firstArray = numbers[0];
console.log(firstArray);

const secondArray = numbers[1];
console.log((secondArray));

const thirdArray = firstArray.concat(secondArray);
console.log(thirdArray);

///Задача_10///
let arrayLength = 6;
const randomArray = [];

while (randomArray.length < arrayLength) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    randomArray.push(randomNumber);
}

console.log(randomArray);

const arraySum = [];

for (let i = 0; i < randomArray.length - 1; i++) {
    arraySum.push(randomArray[i] + randomArray[i + 1]);
}

console.log(arraySum);

///Задача_11///
function sqrNumbers () {
    const firstArray = [3, 5, 15, 10, 24, 2];
    console.log(firstArray);

    const secondArray = firstArray.map(item => item * item);
    console.log(secondArray);
}

///Задача_12///
function returnsWordsLength () {
    const words = ["red", "blue", "green", "yellow", "orange", "purple"];
    const wordsLength = [];

    for (let i = 0; i < words.length; i++) {
        wordsLength.push(words[i].length);
    }

    console.log(wordsLength);
}

///Задача_13///
function negativeNumbers () {
    const numbers = [-20, 15, 23, -32, -10, -23, 5, 45, -100, -65];
    numbers.sort((a, b) => a - b);
    console.log(numbers);

    const filterNumbers = numbers.filter(item => item < 0);
    console.log(filterNumbers);
}

///Задача_14///
let arrayLength = 10;
const numbers = [];
const evenNumbers = [];

while (numbers.length < arrayLength) {
    const randomNumber = Math.floor(Math.random() * 10);
    numbers.push(randomNumber);

    if (randomNumber % 2 === 0) {
        evenNumbers.push(randomNumber);
    }
}

console.log("Исходный массив: ", numbers);
console.log("Массив с четными значениями: ", evenNumbers);

///Задача_15///
let arrayLength = 6;
const numbers = [];

while (numbers.length < arrayLength) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    numbers.push(randomNumber);
}

console.log("Исходный массив: ", numbers);

const arithmeticMean = numbers.reduce((sum, count) => sum / count);

console.log("Массив с четными значениями: ", evenNumbers);
console.log("Cреднее арифметическое элементов массива: ", arithmeticMean);
