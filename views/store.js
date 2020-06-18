const ghostButton = document.getElementById('ghost-buy');
const ghostChoice = document.getElementById('ghost-choice');

ghostButton.onclick = async () => {
    testSkin = { ghostSkin: '/potatoClickTeto.gif' };
    const url = 'http://b6a6s.io/store';
    const options = {
        method: 'POST',
        body: JSON.stringify(testSkin),
        headers:{
            'Content-Type': 'application/json'
        },
    }
    fetch(url, options)
    ghostChoice.style.display = 'block';
    ghostButton.style.display = 'none';
}

