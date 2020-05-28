const loginSelection = document.getElementById('login');
const registerSelection = document.getElementById('register');
const loginDiv = document.getElementById('login-box');
const registerDiv = document.getElementById('register-box');
const checkBox = document.getElementById('check-pass');

const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');

const nameLogin = document.getElementById('name-login');
const passLogin = document.getElementById('password-login');

const nameRegister = document.getElementById('name-register');
const passRegister = document.getElementById('password-register');

const alertMessage = document.getElementById('alertMsg');
const alertDiv = document.getElementsByClassName('alert')[0];

let potato1 = document.getElementById('potato1');
let potato2 = document.getElementById('potato2');
let potato3 = document.getElementById('potato3');
let potato4 = document.getElementById('potato4');

potato1.width = 105;
potato1.height = 125;
potato2.width = 105;
potato2.height = 125;
potato3.width = 105;
potato3.height = 125;
potato4.width = 105;
potato4.height = 125;

let ctx1 = potato1.getContext('2d');
let ctx2 = potato2.getContext('2d');
let ctx3 = potato3.getContext('2d');
let ctx4 = potato4.getContext('2d');

let img1 = new Image();
let img2 = new Image();
let img3 = new Image();
let img4 = new Image();

img1.src = '/potatoClick.gif';
img2.src = '/potatoClick.gif';
img3.src = '/potatoClick.gif';
img4.src = '/potatoClick.gif';


checkBox.onclick = showHide;

function showHide() {
    // For show and hide password
    if(passLogin.type === 'password'){
        passLogin.type = 'text';
    }else{
        passLogin.type = 'password';
    }
    if(passRegister.type === 'password'){
        passRegister.type = 'text';
    }else{
        passRegister.type = 'password';
    }
}


img1.onload = function(){
    ctx1.drawImage(img1, 5, 15);
    ctx2.drawImage(img2, 5, 15);
    ctx3.drawImage(img3, 5, 15);
    ctx4.drawImage(img4, 5, 15);
}


loginDiv.style.display = 'block';
registerDiv.style.display = 'none';
alertDiv.style.display = 'none';

// Login and register selection.
loginSelection.onclick = () => {
    alertMessage.innerHTML = '';
    alertDiv.style.display = 'none';
    loginDiv.style.display = 'block';
    registerDiv.style.display = 'none';
    nameRegister.value = "";
    passRegister.value = "";
};

registerSelection.onclick = () => {
    alertMessage.innerHTML = '';
    alertDiv.style.display = 'none';
    loginDiv.style.display = 'none';
    registerDiv.style.display = 'block';
    nameLogin.value = "";
    nameLogin.value = "";
};

let count = 0;
// Login button
loginButton.onclick = async () => {
    let info = {}
    if(!isNaN(nameLogin.value) || nameLogin.value === "" || passLogin.value === ""){
        alertMessage.innerHTML = 'الرجاء كتابة اسم المستخدم او باسووردك';
        alertDiv.style.display = 'block';
        return;
    }
    info.username = nameLogin.value;
    info.password = passLogin.value;
    const url = 'http://134.122.81.113:80/login';
    const options = {
        method: 'POST',
        body: JSON.stringify(info),
        headers:{
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }
    const res = fetch(url, options);
    if((await res).status == 200){
        window.location = '/game';
    }

}
nameLogin.value = "";
passLogin.value = "";



registerButton.onclick = async () => {
    let info = {}
    if(!isNaN(nameRegister.value) || nameRegister.value === "" || passRegister.value === ""){
        alert('الرجاء كتابة اسم المستخدم او باسووردك');
        alertMessage.innerHTML = 'الرجاء كتابة اسم المستخدم او باسووردك';
        alertDiv.style.display = 'block';
        return;
    }
    info.username = nameRegister.value;
    info.password = passRegister.value;
    const url = 'http://134.122.81.113:80/register';
    const options = {
        method: 'POST',
        body: JSON.stringify(info),
        headers:{
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }
    
    const res = fetch(url, options);
    if((await res).status == 200){
        window.location = '/game';
    }
};

function hideDiv(){
    alertDiv.style.display = 'none';
}