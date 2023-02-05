const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// console.log(ingredients);


const ingredientsConteinerEl = document.querySelector('#ingredients');
const addIngrediensEl = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add(".item");
  itemEl.textContent = ingredient;
  return itemEl;
});
ingredientsConteinerEl.append(...addIngrediensEl);
console.log(ingredientsConteinerEl);