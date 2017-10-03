window.addEventListener("load", init);

var u_name;
var u_mail;
var pwd;
var c_pwd;

function init(){
    u_name = document.getElementById("box_1");
    u_mail = document.getElementById("box_2");
    pwd = document.getElementById("box_3");
    c_pwd = document.getElementById("box_4");
    
    span = document.getElementsByTagName("span")
    
    u_name.addEventListener("blur", blankCheck);
    u_mail.addEventListener("change", mailValidation);
    pwd.addEventListener("keyup", pwdStrength);
    c_pwd.addEventListener("keyup", confirmPassword);
}

function blankCheck(){
    if (u_name.value.length <= 0){
        span[0].innerHTML = "Cannot leave this field blank";
        u_name.style.border = "1px solid red";
    }
    else {
        span[0].innerHTML = "Proceed";
        u_name.style.border = "1px solid green";
    }
}

function mailValidation(){
    if (u_mail.value.length <= 0){
        span[1].innerHTML = "Cannot leave this field blank";
    }
    else {
        span[1].innerHTML = "Proceed";
    }
}

function pwdStrength(){
    if(pwd.value.length <= 0){
        span[2].innerHTML = "Cannot leave this field blank";
        span[2].className = '';
    }
    else if(pwd.value.length <= 4 && pwd.value.length > 0) {
        span[2].innerHTML = "Weak Password";
        span[2].className = 'red';
    }
    else if(pwd.value.length <= 8 && pwd.value.length > 4) {
        span[2].innerHTML = "Average Password";
        span[2].className = 'yellow';
    }
    else {
        span[2].innerHTML = "Strong Password";
        span[2].className = 'green';
    }
}

function confirmPassword(){
    if(pwd.value == c_pwd.value) {
        span[3].innerHTML = "Password Match";
    }
    else {
        span[3].innerHTML = "Password do not Match";
    }
}