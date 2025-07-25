function turnTheTextOver() {
    let userText;
    let regExp = /^[а-яА-Яa-zA-Z\s]*$/; 

    while (true) {
        userText = prompt('Введите текст, который нужно перевернуть');

        if (userText === null) {
            alert('Игра завершена');
            break;
        }

        if (!regExp.test(userText)) {
            alert('Введите текст!');
            continue;
        }

        break;
    }

    const reverseText = userText.split('').reverse().join('');
    alert(`Ваш перевернутый текст: ${reverseText}`);
}

