var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var msgError = document.getElementById("msg-error");
var submitError = document.getElementById("submit-error");

function validiateName(){
    var name = document.getElementById("contactName").value;
    if(name.length == 0){
        nameError.innerHTML = "name is required";
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'full name required';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validiatephone(){
    var phone = document.getElementById("PhoneNO").value;
    if(phone.length == 0){
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
   
    if(!phone.match(/^\d+$/)){
        phoneError.innerHTML = 'only digit please';
        return false;
    }

    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no should be in 10 digit';
        return false;
    }

   
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validiateEmail(){
    var email = document.getElementById("email").value;
    if (email.length == 0) {
        emailError.innerHTML = "email id is required";
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "email invalid";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validiatemessage(){
    var msg = document.getElementById("message").value;
    var required = 30;
    var left = required - msg.length
    if(left > 0) {
        msgError.innerHTML = left + ' more character are required';
        return false; 
    }
    msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if (!validiateName() || !validiatephone() || !validiateEmail() || !validiatemessage()){
        submitError.style.display ='block'
        submitError.innerHTML= "please fix the error first and then try";
        setTimeout(function(){submitError.style.display ='none'},3000)
        return false;
    }
}