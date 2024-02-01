const Categories = document.getElementById('categories');

const items = document.getElementsByClassName('item');

console.log('Кількість категорій:', items.length);

// calculating h2 + inner li

for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];

    const title = currentItem.querySelector('h2').textContent;
    
    const innerCategories = currentItem.querySelectorAll('ul li');

    console.log('Категорія:', title);
    console.log('Кількість елементів у категорії:', innerCategories.length);
}