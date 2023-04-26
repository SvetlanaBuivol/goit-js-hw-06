const categoriesEl = document.querySelector('#categories');

const arrayOfEl = categoriesEl.querySelectorAll('.item');

const findTextAndCount = (categories,items) => {
    const counterCategories = categories.children.length;
    console.log("Number of categories: ", counterCategories)

    items.forEach(item => {

        const titleEl = item.querySelector('h2').textContent;
        console.log("Category: ", titleEl)

        const elementsCount = item.lastElementChild.children.length;
        console.log("Elements: ", elementsCount)
        
    });
}

findTextAndCount(categoriesEl, arrayOfEl);