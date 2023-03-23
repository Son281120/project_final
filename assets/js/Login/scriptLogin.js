const registerButton = document.getElementById('register');
const loginButton = document.getElementById('login');
const container = document.getElementById('container');
const showPasswordBtns = document.querySelectorAll('.show-password');
const hidePasswordBtns = document.querySelectorAll('.hide-password');

const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
console.log(registerLink, loginLink);






registerLink.addEventListener('click', () => {
    container.classList.toggle('active');
});

loginLink.addEventListener('click', () => {
    container.classList.toggle('active');
});




registerButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

loginButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});



showPasswordBtns.forEach((showPasswordBtn) => {
    showPasswordBtn.addEventListener('click', (e) => { 
        const clickElement = e.target;
        const hidePasswordBtn = clickElement.parentElement.querySelector('.hide-password');
        const passwordInput = clickElement.parentElement.querySelector('.form-input')
        showPasswordBtn.classList.toggle('active');
        hidePasswordBtn.classList.toggle('active');
        const currentType = passwordInput.getAttribute("type");
        if(currentType === "password") {
            passwordInput.setAttribute("type", "text");
        }
    });
    
});

hidePasswordBtns.forEach((hidePasswordBtn) => {
    hidePasswordBtn.addEventListener('click', (e) => { 
        const clickElement = e.target;
        const showPasswordBtn = clickElement.parentElement.querySelector('.show-password');
        const passwordInput = clickElement.parentElement.querySelector('.form-input')
        showPasswordBtn.classList.toggle('active');
        hidePasswordBtn.classList.toggle('active');
        const currentType = passwordInput.getAttribute("type");
        if(currentType === "text") {
            passwordInput.setAttribute("type", "password");
        }
    });
});

