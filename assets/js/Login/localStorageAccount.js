const saveAccountLocalStorage = JSON.parse(localStorage.getItem("saveAccount")) || [];
const emailInput = document.querySelector('.login-container .email');
const passwordInput = document.querySelector('.login-container .password');


window.addEventListener('load', function() {

    if (saveAccountLocalStorage.length > 1) {
        const lastElement = saveAccountLocalStorage.pop();
        emailInput.value = lastElement.email;
        passwordInput.value = lastElement.password;
    }else if(saveAccountLocalStorage.length === 1) {
        emailInput.value = saveAccountLocalStorage[0].email;
        passwordInput.value = saveAccountLocalStorage[0].password;
    }
});

