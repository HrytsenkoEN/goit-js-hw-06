// Напиши скрипт, який під час втрати фокусу на
// інпуті(подія blur), перевіряє його вміст щодо правильної
// кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається
// в його атрибуті data - length.
// Якщо введена правильна кількість символів, то border
// інпуту стає зеленим, якщо неправильна кількість -
//     червоним.
// Для додавання стилів використовуй CSS - класи
// valid і invalid

const input = document.getElementById("validation-input");
const dataLength = Number(input.dataset.length);
const changeColor = (event) => {
    if (event.target.value.length === dataLength) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
};

input.addEventListener('blur', changeColor)