let buttonRegistration = document.getElementById("button_registration");

let inputEmail = document.getElementById("email");
let warningEmail = document.getElementById("incorrect_email");
let inputPassword = document.getElementById("password");
let warningPassword = document.getElementById("incorrect_password");
let inputPassword2 = document.getElementById("password_2");
let warningPassword2 = document.getElementById("incorrect_password2");

buttonRegistration.addEventListener("click", clickButton);

inputEmail.addEventListener("change", checkEmail);
inputPassword.addEventListener("change", checkPassword);
inputPassword2.addEventListener("change", checkPassword2);

function checkEmail() {
    if (!(this.value.includes("@") && this.value.includes("."))) {
        warningEmail.innerHTML = "E-mail musí obsahovat '@' a '.'";
    } else {
        warningEmail.innerHTML = "";
    }
}

function checkPassword() {
    if (this.value.length < 8) {
        warningPassword.innerHTML = "Heslo musí obsahovat 8 nebo více znaků";
    } else {
        warningPassword.innerHTML = "";
    }
}

function checkPassword2() {
    if (this.value !== inputPassword.value) {
        warningPassword2.innerHTML = "Neshoda hesla";
    } else {
        warningPassword2.innerHTML = "";
    }
}

function clickButton() {
    if ((inputEmail.value.length > 0) && 
        (inputPassword.value.length > 0) && 
        (inputPassword2.value.length > 0) && 
        (warningEmail.innerHTML === warningPassword.innerHTML) && 
        (warningEmail.innerHTML === warningPassword2.innerHTML)) {
        alert("Jste registrováni")
    } else {
        alert("Opravte zadané údaje")
    }
    
}