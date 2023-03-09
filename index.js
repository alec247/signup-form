const password1 = document.querySelector("#password");
const password2 = document.querySelector("#confirmpassword");
const passDiv = document.querySelector(".five");
const confirmDiv = document.querySelector(".six");
const errorMessage = document.querySelector("#errorMessage");

function checkPasswords() {
    if (password1.value !== password2.value) {
        errorMessage.textContent = "Passwords do not match";
    } else {
        errorMessage.textContent = "";
    }
}

password2.addEventListener("input", checkPasswords);