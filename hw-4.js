function guessNumber () {
    const num = 52;

    while (true) {
        let userInput = prompt('Попробуй угадать загаданное число от 0 до 100');
    
        if (userInput === null) {
            alert('Игра завершена');
            break;
        }
    
        let userNum = Number(userInput);
    
        if (isNaN(userNum) || userNum < 0 || userNum > 100) {
            alert('Введите число в диапазоне от 0 до 100!');
            continue;
        }
    
        if (userNum > num) {
            alert('Меньше');
        } else if (userNum === num) {
            alert('Молодец, угадал!');
            break;
        } else {
            alert('Больше');
        }
    }   
    
}