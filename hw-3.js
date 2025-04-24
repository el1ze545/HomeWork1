///1 задание////

let i = 1;

while (i <= 2) {
    console.log('Привет');
    i++;
}

///2 задание////

let i = 1;

do {
    console.log(i);
    i++;

} while (i <= 5);

///3 задание////

let i = 7;

do {
    console.log(i);
    i++;

} while (i <= 22);

///4 задание////

const obj = {
    Коля : '200',
    Вася : '300',
    Петя : '400'
}

for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

///5 задание////

let n = 1000;
let count = 0;

do {
    n /= 2;
    num++;

} while (n >= 50);

console.log('Результат деления:', n);
console.log('Количество итераций:', num);

///6 задание////

const firstFriday = 1;

for (let day = firstFriday; day <= 31; day += 7) {
    console.log('Сегодня пятница, ${day}-е число. Необходимо подготовить отчет');
}
