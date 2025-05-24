function gameQuiz () {
    const quiz = [
        {
            question: "Какой цвет у неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    
    let counter = 0;
    
    for (const questionObj of quiz) {
        let userInput;
        let userAnswer;
    
        do {
            userInput = prompt(`${questionObj.question}\n${questionObj.options.join('\n')}`);
            
            if (userInput === null) {
                alert('Игра завершена');
                return; 
            }
    
            userAnswer = Number(userInput);
    
            if (isNaN(userAnswer)) {
                alert('Пожалуйста, укажите номер выбранного ответа!');
            }
    
        } while (isNaN(userAnswer));
    
        if (userAnswer === questionObj.correctAnswer) {
            alert('Правильно!');
            counter++;
        } else {
            alert('Неправильно!')
        }
    }
    
    alert(`Игра завершена.\nПравильных ответов: ${counter}`);
}
