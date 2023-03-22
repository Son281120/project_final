function Validator(options) {

    function validate(inputElement, rule) {
        let errorMessage = rule.test(inputElement.value);
        let errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        if(errorMessage) {
            errorElement.innerText = errorMessage;
        } else {
            errorElement.innerText = '';
        }
    }

    const formElement = document.querySelector(options.form);
    if(formElement) {
        options.rules.forEach((rule) => {
            let inputElement = formElement.querySelector(rule.selector);
            if(inputElement) {
                // Xử lý trường hợp người dùng blur ra khỏi input
                inputElement.onblur = () => {
                    validate(inputElement, rule)
                }

                // Xử lý trường hợp người dùng nhập vào ô input

                inputElement.onfocus = () => {
                    let errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                }
            }
        });
    }
}

Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này!';
        }
    }
}


Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regexEmail.test(value) ? undefined : 'Trường này phải là email!';
        }
    }
}


Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiếu ${min} ký tự!`;
        }
    }
}