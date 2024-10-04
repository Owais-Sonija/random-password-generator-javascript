//Getting library


// Getting Elements
const passwordEle = document.querySelector(".password_field");
const copyBtn = document.querySelector(".copy_btn");
const generateBtn = document.querySelector(".generate_btn");

// Creating Functions

function generatePassowrd() {
    let password= "";
    const passwordLength = 12; 
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_";
    const allChar = upperCaseLetters + lowerCaseLetters + numbers + symbols;

    password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]
    while(password.length <= passwordLength) {
        password += allChar[Math.floor(Math.random() * allChar.length)]
    }
passwordEle.value = password;    
    

}

function copyPassword() {
    // Select the text field
    passwordEle.select();

    // Copy the text inside the text field
    navigator.clipboard.writeText(passwordEle.value);

    // Aler the text
    alert("Copied " + passwordEle.value);
}

// Calling Functions
generateBtn.addEventListener("click", generatePassowrd);
copyBtn.addEventListener("click", copyPassword);