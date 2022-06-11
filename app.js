console.log('hello');

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById("connect");

    button.addEventListener('pointerup', function (event) {
        navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
            .then(device => { /* … */ })
            .catch(error => { console.error(error); });
    })

});






