console.log('The client javascript code is running..');

let c2d = document.getElementById('potatoHitBox');
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

async function countClicks(){
	let req = new XMLHttpRequest();
	// Move the image randomly.
	let x = await Math.floor(Math.random()*400);
	let y = await Math.floor(Math.random()*400);
	button_click.style.top = x + 'px';
	button_click.style.left = y + 'px';

    req.onreadystatechange = function() {
		if(this.readyState==4 && this.status==200){
			
		}
	}
	req.open("POST", `http://localhost:3000/playerScore`);
	req.setRequestHeader("Content-Type", "application/json");
	req.send('test');
}

