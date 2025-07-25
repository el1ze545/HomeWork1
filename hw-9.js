function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  console.log(getRandomHexColor()); 

const gamesContentBtnEl = document.querySelector('.games__btn-six');
const changeBackground = document.querySelector('.games')

gamesContentBtnEl.addEventListener('click', function() {
    changeBackground.style.backgroundColor = getRandomHexColor();
})


