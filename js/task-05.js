const input = document.querySelector('#name-input');
const nameLable = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {

    event.currentTarget.value.length === 0 ? nameLable.textContent = 'Anonymous' : nameLable.textContent = event.currentTarget.value;
}




