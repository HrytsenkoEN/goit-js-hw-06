//*1 Порахує і виведе в консоль кількість категорій в
// ul#categories, тобто елементів li.item.

// *2Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента
// (тегу < h2 >) і кількість елементів в категорії
// (усіх < li >, вкладених в нього).

const category = document.querySelectorAll("li.item");
console.log(`Number of categories: ${category.length}`);

const element = [...category]
  .map(
    (categories) => `Category: ${categories.children[0].textContent}
        Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(element);
