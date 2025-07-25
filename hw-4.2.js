/// Задание_1 ///
function minNum (a,b) {
    if (a === b) {
        return a;
    }

    return a < b ? a : b;
}

/// Задание_2 ///
function parityNum (a) {
    return a % 2 === 0 ? ('Число четное') : ('Число нечетное');
}

/// Задание_3.1 ///
function sqrNum (a) {
    console.log(a ** 2);;
}

/// Задание_3.2 ///
function sqrNum (a) {
    return a ** 2;
}

const userNum = sqrNum(5);
console.log(`Квадрат заданного числа равен: ${userNum}`);

/// Задание_4 ///
function userAge () {
    const age = Number(prompt('Сколько вам лет?'));

    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age < 0 && age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать');
    }
}

/// Задание_5 ///
function multNum () {
    let a = prompt('Введите первое число');
    let b = prompt('Введите второе число');
    if (isNaN(a) || isNaN(b)) {
        alert('Одно или оба значения не являются числом');

    } else {
        alert (a * b);
    }
}

/// Задание_6 ///
function sqrNum () {
    let userNum = prompt('Введите число');

    if (isNaN(userNum)) {
        alert('Переданный параметр не является числом');

    } else {
        alert (`${userNum} в кубе равняется ${userNum ** 3}`);
    }
}

/// Задание_7 ///
const circle1 = {
    radius1: 10,
    perimeter: function getPerimeter () {
        alert(`Периметр окружности радиусом ${circle1.radius1} равен: ${circle1.radius1 * 2 * 3.14}`);
    },

    area: function getArea () {
        alert(`Площадь окружности радиусом ${circle1.radius1} равна: ${circle1.radius1 ** 2 * 3.14}`);
    }
}

const circle2 = {
    radius2: 20,
    perimeter: function getPerimeter () {
        alert(`Периметр окружности радиусом ${circle2.radius2} равен: ${circle2.radius2 * 2 * 3.14}`);
    },

    area: function getArea () {
        alert(`Площадь окружности радиусом ${circle2.radius2} равна: ${circle2.radius2 ** 2 * 3.14}`);
    }
}

