console.log('The client javascript code is running..');

let c2d = document.getElementById('potatoHitBox');
let logoutButton = document.getElementById('logout-button');

c2d.width = 105;
c2d.height = 125;
let ctx = c2d.getContext('2d');
let img = new Image();

img.src = '/potatoClick.gif';

img.onload = function(){
    ctx.drawImage(img, 5, 15);
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
    img.src = '/potatoClick.gif';
    ctx.clearRect(0, 0, c2d.width, c2d.height);
}
c2d.addEventListener("mousemove", mouseMove, false);
c2d.addEventListener("mouseout", mouseMoveOut, false);


let button_click = document.getElementById('potatoHitBox');
button_click.onclick = countClicks;
scoreInfo = { defaultValue: 1 };
async function countClicks(){
	// Move the image randomly.
	let x = Math.floor(Math.random()*600);
	let y = Math.floor(Math.random()*400);
	button_click.style.top = x + 'px';
    button_click.style.left = y + 'px';
    const url = 'http://134.122.81.113:80/clickRegistry';
    const options = {
        method: 'POST',
        body: JSON.stringify(scoreInfo),
        headers:{
            'Content-Type': 'application/json'
        },
    }
    fetch(url, options)
    .then((response) => {
        console.log(response);
        return response.text();
    })
    .then((data) => {
        let currentScore = 0;
        console.log(data);
        currentScore = data;
        console.log('currentScore: ' + currentScore);
        const points = document.getElementById('coin-count').innerHTML = currentScore;
    });

}


logoutButton.onclick = async () => {
    const url = 'http://134.122.81.113:80/logout';
    const options = {
        method: 'GET'
    }
    const res = fetch(url, options);
    if((await res).status === 200){
        window.location = '/';
    }
}