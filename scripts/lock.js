"use strict"

document.getElementById("site-lock-form").addEventListener("submit", (e) =>
{
    e.preventDefault();
    
    console.log(e.target.password.value)
    if (e.target.password.value === "061017")
    {
        console.log("Correct password")
        window.location.href = "app/home.html";
    }
        
    else
    {
        console.log("Incorrect password")
        let validationText = document.getElementById("validation-text");
        validationText.textContent = "Incorrect password";
        validationText.style.color = "red";
        validationText.style.margin = 0;
    }
        
});

const validationText = document.getElementById("validation-text");
document.getElementById("password").addEventListener("input", (e) => 
{
    validationText.textContent = e.target.value ? validationText.textContent : "";
});