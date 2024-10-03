// Getting Elements
const passwordEle = document.querySelector(".password_field");
const copyBtn = document.querySelector(".copy_btn");
const generateBtn = document.querySelector(".generate_btn");

// Creating Functions

function generatePassowrd() {
    console.log("Jello");
    
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
