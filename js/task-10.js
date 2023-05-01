const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick(event) {
  const amount = input.value;
  createBoxes(amount);
}

function onDestroyBtnClick(event) {
  boxes.innerHTML = "";
}

function createBoxes(amount) {
  let boxSize = 30;
  const boxesEl = [];

  for (let i = 0; i < amount; i +=1) {
    const box = document.createElement('div');
    box.style.width = `${boxSize + i * 10}px`;
    box.style.height = `${boxSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    
    boxesEl.push(box);
    
  }
  
  boxes.append(...boxesEl);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }
  
