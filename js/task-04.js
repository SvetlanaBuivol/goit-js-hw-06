const counterEl = document.querySelector('#counter');
const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

incrementBtn.addEventListener('click', event => {
    counterValue += 1;
    valueEl.textContent = counterValue;
    
});

decrementBtn.addEventListener('click', event => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
})











