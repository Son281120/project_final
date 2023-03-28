function Validator(options) {

    function getParent(element, select) {
        while (element.parentElement) {
            if (element.parentElement.matches(select)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    let selecterRules = {};

    function validate(inputElement, rule) {
        let errorMessage= '';
        let errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);

        let rules = selecterRules[rule.selector];

        // Lặp qua từng rule và kiểm tra
        // Nếu có lỗi dừng việc kiểm tra
        for (let i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value);
            if(errorMessage) break;
        }

        if(errorMessage) {
            errorElement.innerText = errorMessage;
        } else {
            errorElement.innerText = '';
        }
        return !errorMessage;
    }

    // Lấy element của form cần validate
    const formElement = document.querySelector(options.form);
    if(formElement) {

        formElement.onsubmit = (e) => {
            e.preventDefault();

            let isFormValid = true;

            // Lặp qua từng rules và validate
            options.rules.forEach((rule) => {
                let inputElement = formElement.querySelector(rule.selector);
                let isValid = validate(inputElement, rule);
                if(!isValid){
                    isFormValid = false
                }
            });

            

            if(isFormValid){
                if(typeof options.onSubmit === 'function') {

                    let enableInput = formElement.querySelectorAll('[name]:not([disabled])');
            
                    let formValues = Array.from(enableInput).reduce((values, input) => {
                        values[input.name] = input.value;
                        return values;
                    }, {});

                    options.onSubmit(formValues);
                }
            }

            


        }

        // Lặp qua mỗi rule và xử lý  (lắng nghe sử kiện blur, input,...)
        options.rules.forEach((rule) => {

            // Lưu lại roles cho mỗi input

            if(Array.isArray(selecterRules[rule.selector])){
                selecterRules[rule.selector].push(rule.test);
            }else {
                selecterRules[rule.selector] = [rule.test];   
            }

            let inputElement = formElement.querySelector(rule.selector);
            if(inputElement) {
                // Xử lý trường hợp người dùng blur ra khỏi input
                inputElement.onblur = () => {
                    validate(inputElement, rule);
                }

                // Xử lý trường hợp người dùng nhập vào ô input

                inputElement.onfocus = () => {
                    let errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                }
            }
        });
    }
}

Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này!';
        }
    }
}


Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regexEmail.test(value) ? message || undefined : 'Trường này phải là email!';
        }
    }
}


Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiếu ${min} ký tự!`;
        }
    }
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Gía trị nhập vào không chính xác!';
        }
    }
}