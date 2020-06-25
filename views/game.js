console.log('The client javascript code is running..');

let tutorial = document.getElementById('tutorial');
let c2d = document.getElementById('potatoHitBox');
let logoutButton = document.getElementById('logout-button');
let canClick = true;

c2d.width = 105;
c2d.height = 125;
let ctx = c2d.getContext('2d');
let img = new Image();

// here is the default skin.
let imgSkin = '';

img.onload = function(){
    ctx.drawImage(img, 5, 15);
}

const clickSound = new sound("./click.mp3");

// constructor to create whatever sound i want
function sound(src){
    this.sound = document.createElement("audio");
    // source
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";

    document.body.appendChild(this.sound);

    // play the sound
    this.play = function(){
        this.sound.play();
    }
    // stop the sound
    this.stop = function(){
        this.sound.pause();
    }

}


function init(){
    setTimeout(hideTutorial, 5000); 
    const url = 'http://b6a6s.io/clickRegistry';
    const options = {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    }
    fetch(url, options)
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        let currentScore = 0;
        currentScore = data;
        console.log('currentScore: ' + currentScore);
        const points = document.getElementById('coin-count').innerHTML = currentScore + "     الكشتب🩸     ";
    });
    const url1 = 'http://b6a6s.io/getSkin';
    const options1 = {
        method: 'GET'
    }
    fetch(url1, options1)
    .then((res) => {
        return res.text();
    })
    .then((data) => {
        console.log(data);
        imgSkin = data;
        img.src = imgSkin;
    });
}

function mouseMove(event) {
    let mouseX,
        mouseY;
    event.preventDefault();  // stops browser to do what it normally does
    // determine where mouse is
    mouseX = event.pageX;
    mouseY = event.pageY;
    img.src = '/potatoClickScared.gif';
}
function mouseMoveOut(event) {
    let mouseX,
        mouseY;
    event.preventDefault();  // stops browser to do what it normally does
    // determine where mouse is
    mouseX = event.pageX;
    mouseY = event.pageY;
    img.src = imgSkin;
    ctx.clearRect(0, 0, c2d.width, c2d.height);
}
c2d.addEventListener("mousemove", mouseMove, false);
c2d.addEventListener("mouseout", mouseMoveOut, false);


let button_click = document.getElementById('potatoHitBox');
button_click.onclick = countClicks;

const getBackground = document.getElementById('gameBackground');

if(getBackground.style.backgroundColor === "red"){
    console.log('it is red');
    scoreInfo = { defaultValue: -10 };
}else{
    console.log('it is not red it is' + getBackground.style.backgroundColor);
    scoreInfo = { defaultValue: 1 };
}


    
async function countClicks(){
    if(canClick){
        // Move the image randomly.
        clickSound.play();
        let x = Math.floor(Math.random()*650) | 0;
        let y = Math.floor(Math.random()*920) | 0;
        button_click.style.top = x + 'px';
        button_click.style.left = y + 'px';
        const url = 'http://b6a6s.io/clickRegistry';
        const options = {
            method: 'POST',
            body: JSON.stringify(scoreInfo),
            headers:{
                'Content-Type': 'application/json'
            },
        }
        fetch(url, options)
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            let currentScore = 0;
            currentScore = data;
            console.log('currentScore: ' + currentScore);
            const points = document.getElementById('coin-count').innerHTML = currentScore + "     الكشتب🩸     ";
        });
        //console.log(canClick);
        canClick = false;
    }else{
        setTimeout(() => { canClick = true }, 150);
        return;
    }

}



logoutButton.onclick = async () => {
    const url = 'http://b6a6s.io/logout';
    const options = {
        method: 'GET'
    }
    const res = fetch(url, options);
    if((await res).status === 200){
        window.location = '/';
    }
}

function hideTutorial(){
    tutorial.style.display = 'none';
}