const passwordInput = document.getElementById("password")
const passwordConfirmInput = document.getElementById("passwordConfirm")
const submit = document.getElementById("submit")
const invalidPasswordMessage = document.getElementById("invalid-password-message")

const invalidInputOutline = "solid 1px red"
const defaultInputOutline = passwordInput.style.outline

submit.onclick = (e) => {
    if (passwordInput.value != passwordConfirmInput.value){
        displayInvalidPassword(true)
        e.preventDefault();
    }
}

passwordInput.onclick = (e) => {
    displayInvalidPassword(false)
}

function displayInvalidPassword(isInvalid){
    if (isInvalid){
        passwordConfirmInput.style.outline = "solid 1px red"
        passwordInput.style.outline = "solid 1px red"
        invalidPasswordMessage.style.visibility = "visible"
    }
    else {
        passwordConfirmInput.style.outline = defaultInputOutline
        passwordInput.style.outline = defaultInputOutline
        invalidPasswordMessage.style.visibility = "hidden"
    }
}
