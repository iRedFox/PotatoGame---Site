const testbutton = document.getElementById('test-buy');
testbutton.onclick = async () => {
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
}