const input = document.querySelector('#validation-input');
const valueLength = Number(input.dataset.length);

input.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
  
    event.currentTarget.value.length === valueLength ?
        input.style.borderColor = '#4caf50'
        : input.style.borderColor = '#f44336'
}
