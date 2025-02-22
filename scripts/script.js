const fullName = document.querySelector('#fullName')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const message = document.querySelector('#message')
const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const sendMsg = document.querySelector('.sendMsg')

const showError = (input, msg) => {

    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text');

    formBox.classList.add('error');
    errorMsg.textContent = msg;
}

const clearError = input => {
    const formBox = input.parentElement;
    formBox.classList.remove('error');
}

const checkForm = input => {
    input.forEach(el => {
        if(el.value === '') {
            showError(el, el.placeholder);
        } else {
            clearError(el);
        }
    })
}

const checkLength = (input, min) => {
    if (input.value.length < min) {
        showError(input, `${input.previousElementSibling.innerText} składa się z min. ${min} znaków.`)
    }
}

const checkEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.value)) {
        clearError(email)
    } else {
        showError(email, 'E-mail jest niepoprawny')
    }
}

const checkErrors = () => {

    const allInputs = document.querySelectorAll('.contact-box');
    let errorCount = 0;

    allInputs.forEach(el => {
        if (el.classList.contains('error')) {
            errorCount++
        }
    })

    if (errorCount === 0) {
        sendMsg.classList.add('show-sendMsg');
        setTimeout(() => {
            document.querySelector('.close').click()
        }, 2000);
    }
    console.log(errorCount);
}

sendBtn.addEventListener('click', e => {
    e.preventDefault();

    checkForm([fullName, email, phone, message])
    checkLength(fullName, 6);
    checkLength(phone, 9);
    checkLength(message, 10);
    checkEmail(email);
    checkErrors()
})

clearBtn.addEventListener('click', e => {
    e.preventDefault();

    [fullName, email, phone, message].forEach(el => {
        el.value = ''
        clearError(el)
    })
})
