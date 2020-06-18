const ghostButton = document.getElementById('ghost-buy');
const ghostChoice = document.getElementById('ghost-choice');
const defaultChoice = document.getElementById('default-choice');


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
    fetch(url, options)
}

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
    fetch(url, options)
}