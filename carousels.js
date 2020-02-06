// declaration des variables 
let name    = document.querySelector("#formName");
let mail    = document.querySelector("#formMail");
let title   = document.querySelector("#formTitle");
let message = document.querySelector("#formMessage");
let btn     = document.querySelector("#formBtn");
const regExp= /\S+@\S+\.\S+/;


//verification du remplissage 
function verif(){
    if(name.value !== "" && regExp.test(mail.value) && title.value !== "" && message.value !== ""){
        btn.disabled = false;
        btn.style.backgroundColor = 'green';
    }
    else{
        btn.disabled = true;
        btn.style.backgroundColor = 'red';
    }
}