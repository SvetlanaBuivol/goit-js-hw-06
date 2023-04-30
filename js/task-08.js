const form = document.querySelector('.login-form');
const input = document.querySelectorAll('input');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
 
    if (mail.length === 0 || password.length === 0) {
        alert('Warning! All fields must be filled!');

    } else {
        const formData = {
        mail,
        password,
    };
        console.log(formData);
        form.reset();
    }
};
