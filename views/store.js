const ghostButton = document.getElementById('ghost-buy');
const ghostChoice = document.getElementById('ghost-choice');
const bakedButton = document.getElementById('baked-buy');
const bakedChoice = document.getElementById('baked-choice');
const defaultChoice = document.getElementById('default-choice');

// get his point from the server
let currentScore = 0;

function init(){
    const url = 'http://b6a6s.io/store';
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
        // store the score to currentScore
        currentScore = data;
    });
}

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
        const res = fetch(url, options)
        ghostButton.style.display = 'none';
        if((await res).status === 200){
            window.location.href = '/store';
        }
    }
}

if(ghostChoice){
    ghostChoice.onclick = async () => {
        if(currentScore >= 10){
            newSkin = { skin: '/potatoClickTeto.gif' };
            const url = 'http://b6a6s.io/store';
            const options = {
                method: 'PUT',
                body: JSON.stringify(newSkin),
                headers:{
                    'Content-Type': 'application/json'
                },
            }
            const res = fetch(url, options)
            if((await res).status === 200){
                window.location.href = '/game';
            }
        }else{
            alert('you do not have enough score!');
        }
    }
}

if(bakedButton){
    bakedButton.onclick = async () => {
        newSkin = { skin: '/potatoClickBaked.gif' };
        const url = 'http://b6a6s.io/store';
        const options = {
            method: 'POST',
            body: JSON.stringify(newSkin),
            headers:{
                'Content-Type': 'application/json'
            },
        }
        const res = fetch(url, options)
        bakedButton.style.display = 'none';
        if((await res).status === 200){
            window.location.href = '/store';
        }
    }
}

if(bakedChoice){
    bakedChoice.onclick = async () => {
        newSkin = { skin: '/potatoClickBaked.gif' };
        const url = 'http://b6a6s.io/store';
        const options = {
            method: 'PUT',
            body: JSON.stringify(newSkin),
            headers:{
                'Content-Type': 'application/json'
            },
        }
        const res = fetch(url, options)
        if((await res).status === 200){
            window.location.href = '/game';
        }
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
    const res = fetch(url, options);
    if((await res).status === 200){
        window.location.href = '/game';
    }
}