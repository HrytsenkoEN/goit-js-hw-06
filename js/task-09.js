function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента
//   < body > через інлайн - стиль по кліку на
// button.change - color і виводить значення кольору 
// в span.color.

const nameColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click', () => {
  const bgColor = getRandomHexColor();
  body.style.backgroundColor = bgColor;
  nameColor.textContent = bgColor;
})