

// const counter = parent => { return parent.childElementCount };
// const message = elements => {
//     elements.forEach(element => {
//         const firstEl = element.firstElementChild;
//         const secondElem = firstEl.nextElementSibling
//         console.log(`Category: ${firstEl.textContent}`);
//         console.log(`Elements: ${counter(secondElem)}`);
//     });
// };
// const categories = document.querySelector('#categories');
// const subCategories = categories.querySelectorAll('.item');
// console.log(`Number of categories: ${counter(categories)}`);
// message(subCategories);

const categories = document.querySelectorAll('.item');

console.log('Number of categories', categories.length);
console.log('');
categories.forEach((element) => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length);
    console.log('');
})