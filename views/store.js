const ghostButton = document.getElementById('ghost-buy');
const ghostChoice = document.getElementById('ghost-choice');
const bakedButton = document.getElementById('baked-buy');
const bakedChoice = document.getElementById('baked-choice');
const defaultChoice = document.getElementById('default-choice');

// get his point from the server
let currentScore = 0;

function init(){
    const url = 'http://b6a6s.io/getScore';
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
        console.log("here's the data > " + data);
        currentScore = data;
        const points = document.getElementById('coin-count').innerHTML = currentScore + "     الكشتب🩸     ";
    });
}

if(ghostButton){
    ghostButton.onclick = async () => {
        if(currentScore >= 10000){
            scoreInfo = { defaultValue : -10000 };
            const url1 = 'http://b6a6s.io/clickRegistry';
            const options1 = {
                method: 'POST',
                body: JSON.stringify(scoreInfo),
                headers:{
                    'Content-Type': 'application/json'
                },
            }
            fetch(url1, options1)
            .then((response) => {
                return response.text();
            })
            console.log(currentScore);
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
        else{
            alert('Not enough score..');
        }
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
        const res = fetch(url, options)
        if((await res).status === 200){
            window.location.href = '/game';
        }
    }
}

if(bakedButton){
    bakedButton.onclick = async () => {
        if(currentScore >= 30000){
            scoreInfo = { defaultValue : -30000 };
            const url1 = 'http://b6a6s.io/clickRegistry';
            const options1 = {
                method: 'POST',
                body: JSON.stringify(scoreInfo),
                headers:{
                    'Content-Type': 'application/json'
                },
            }
            fetch(url1, options1)
            .then((response) => {
                return response.text();
            })
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
        }else{
            alert('not enough score...');
        }
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