const form = document.getElementById('form')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('mobile')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', function (event) {
    event.preventDefault();

    validate();
})


function validate() {
    const firstNameVal = firstname.value
    const lastNameVal = lastname.value
    const usernameVal = username.value
    const emailVal = email.value
    const phoneVal = phone.value
    const passwordVal = password.value
    const password2Val = password2.value


    //first name
    if (firstNameVal === '') {
        setErrorMsg(firstname, 'firastname required')
    } else if (firstNameVal.length < 2) {
        setErrorMsg(firstname, 'username atleast 2 char')
    } else {
        setSuccessMsg(firstname)
    }
    //last name
    if (lastNameVal === '') {
        setErrorMsg(lastname, 'lastname required')
    } else if (lastNameVal.length < 2) {
        setErrorMsg(lastname, 'username atleast 2 char')
    } else {
        setSuccessMsg(lastname)
    }
    // username
    if (usernameVal === '') {
        setErrorMsg(username, 'username required')
    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'username atleast 3 char')
    } else {
        setSuccessMsg(username)
    }

    // email validate
    let regEx= /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if (emailVal === '') {
        setErrorMsg(email, 'Write an Email')
    } else if(!regEx.test(String(emailVal))){
        setErrorMsg(email, 'Not a valid email')
    } else {
        setSuccessMsg(email)
    }
    //phone validate
    if (phoneVal === '') {
        setErrorMsg(phone, 'Mobile cannot be blank')
    } else if (phoneVal.length != 11) {
        setErrorMsg(phone, 'Number should be 11 digit')
    } else {
        setSuccessMsg(phone)
    }

    //password validate
    if (passwordVal === '') {
        setErrorMsg(password, 'Enter a password')
    } else if (passwordVal.length <= 5) {
        setErrorMsg(password, 'Use minimum 6 character')
    } else {
        setSuccessMsg(password)
    }
    //confirm password validate
    if (passwordVal === '') {
        setErrorMsg(password2, 'Confirm password')
    } else if (passwordVal != password2Val) {
        setErrorMsg(password2, 'Password not matched. Try again')
    } else {
        setSuccessMsg(password2)
    }

    successMsgAlert(usernameVal)

}

function setErrorMsg(input, errMsg) {
    let formControl = input.parentElement;
    let small = formControl.querySelector('small')
    formControl.className = 'form-control error'
    small.innerText = errMsg;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}


function successMsgAlert(usernameVal) {
    let formControll = document.getElementsByClassName('form-control')
    let count = formControll.length - 1
    for (let i = 0; i <= formControll.length; i++) {
        if (formControll[i].className === 'form-control success') {
            let sRate = 0 + i
            sendData(usernameVal, sRate, count)
        } else {
            return false;
        }
    }
}

function sendData(usernameVal, sRate, count) {
    if (sRate === count) {

        Swal.fire(
            'Welcome! ' + usernameVal,
            'Registration Successfully Done',
            'success'
        )
        form.reset()

        let formCon = document.getElementsByClassName('form-control success');
        [...formCon].forEach((element) => {
            element.className = 'form-control'
        })
    }
}