const ghostButton = document.getElementById('ghost-buy');
const ghostChoice = document.getElementById('ghost-choice');
const defaultChoice = document.getElementById('default-choice');

if(ghostButton){
    ghostButton.onclick = async () => {
        newSkin = { skin: '/potatoClickTeto.gif' };
        const url = 'http://b6a6s.io/store';
        const options = {
            method: 'POST',
            body: JSON.stringify(newSkin),
            headers:{
                'Content-Type': 'application/json'
            },
        }
        fetch(url, options);
        ghostButton.style.display = 'none';
        window.location.href = '/store';
    }
}

if(ghostChoice){
    ghostChoice.onclick = async () => {
        newSkin = { skin: '/potatoClickTeto.gif' };
        const url = 'http://b6a6s.io/store';
        const options = {
            method: 'PUT',
            body: JSON.stringify(newSkin),
            headers:{
                'Content-Type': 'application/json'
            },
        }
        fetch(url, options)
        window.location.href = '/game';
    }
}

defaultChoice.onclick = async () => {
    newSkin = { skin: '/potatoClick.gif' };
    const url = 'http://b6a6s.io/store';
    const options = {
        method: 'PUT',
        body: JSON.stringify(newSkin),
        headers:{
            'Content-Type': 'application/json'
        },
    }
    fetch(url, options);
    window.location.href = '/game';
}