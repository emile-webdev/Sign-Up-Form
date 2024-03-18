const submitBtn = document.querySelector('#submit-btn');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const showPassword = document.querySelector('#showPassword');
const passwordMessage = document.querySelector('#passwordMessage');
const confirmMessage = document.querySelector('#confirmMessage');

showPassword.addEventListener('change', function() {
    if(showPassword.checked) {
        password.type = 'text';
        confirmPassword.type = 'text';
    } else {
        password.type = 'password';
        confirmPassword.type = 'password';
    }
})

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if(password.value == '') {
        passwordMessage.innerHTML = 'Please enter a password';
        passwordMessage.parentElement.className = 'input-box error';
    } else if(password.value.length < 8) {
        passwordMessage.innerHTML = 'Password must be a least 8 characters';
        passwordMessage.parentElement.className = 'input-box error';
    } else {
        passwordMessage.innerHTML = '';
        passwordMessage.parentElement.className = 'input-box';
    }
})

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if(password.value !== confirmPassword.value) {
        confirmMessage.innerHTML = 'Password does not match!';
        confirmMessage.parentElement.className = 'input-box error';
    } else {
        confirmMessage.innerHTML = '';
        confirmMessage.parentElement.className = 'input-box';
    }
})