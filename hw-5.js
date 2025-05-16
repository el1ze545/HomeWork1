///Игра__Простая__Арифметика__///
function simpleArithmetic() {
    function generateRandomExpressionsArray() {
        const operations = ["+", "-", "*", "/"];
    
        function randomExpression() {
            const firstNumber = Math.floor(Math.random() * 10) + 1;
            const secondNumber = Math.floor(Math.random() * 10) + 1;
            const randomIndex = Math.floor((Math.random() * operations.length));
            const randomOperation = operations[randomIndex];
    
            if (randomOperation === '/') {
                const factor = firstNumber * secondNumber;
                return `${factor} ${randomOperation} ${secondNumber}`;
            }
            
            return `${firstNumber} ${randomOperation} ${secondNumber}`;
        }
    
        function expressionsArray(count) {
            const expressions = [];
            for (let i= 0; i < count; i++) {
                expressions.push(randomExpression());
            }
            return expressions;
        }
    
        return expressionsArray(4);
    }
    
    const generateExpressions = generateRandomExpressionsArray();
    console.log(generateExpressions);
    
    for (const expr of generateExpressions ) {
        const userInput = prompt(`Реши математический пример: ${expr}`);
        const correctAnswer = eval(expr);
        const userAnswer = Number(userInput);

        if (userInput === null) {
            alert('Игра завершена');
            break;
        }

        if (isNaN(userAnswer)) {
            alert('Пожалуйста, введите число!');
            continue;
        }

        if (userAnswer === correctAnswer) {
            alert('Правильно');
        } else {
            alert(`Неправильно, правильный ответ: ${correctAnswer}`);
        }  


    }
}

