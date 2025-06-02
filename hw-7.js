function rockPaperScissors() {
    const actSelection = ["камень", "ножницы", "бумага"];
    
    const rules = {
        камень: ["ножницы"],
        бумага: ["камень"],
        ножницы: ["бумага"]
    }

    function playGame() {
        const userInput = prompt(`Выберите:\n${actSelection.join(', ')}`);

        if (userInput === null) {
            alert('Игра завершена');
            return;
        }
        const userAnswer = userInput.toLowerCase();

        if (!actSelection.includes(userAnswer)) {
            alert('Некорректный ввод, попробуйте еще раз');
            playGame();
            return;
        }

        const computerAnswer = actSelection[Math.floor(Math.random() * actSelection.length)];

        if (userAnswer === computerAnswer) {
            alert(`Ничья\nВаш выбор: ${userAnswer}\nВыбор компьютера: ${computerAnswer}`);

        } else if (rules[userAnswer].includes(computerAnswer)) {
            alert(`Вы выиграли\nВаш выбор: ${userAnswer}\nВыбор компьютера: ${computerAnswer}`);

        } else {
            alert(`Компьютер выиграл\nВаш выбор: ${userAnswer}\nВыбор компьютера: ${computerAnswer}`)
        }

        playGame();
    }

    playGame();
}
