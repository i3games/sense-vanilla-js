console.log('hello');

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById("connect");

    button.addEventListener('pointerup', function (event) {
        // navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
        //     .then(device => { /* … */ })
        //     .catch(error => { console.error(error); });
        navigator.bluetooth.requestDevice({
            filters: [{
              name: 'Adafruit Bluefruit LE'
            }],
            optionalServices: ['battery_service'] // Required to access service later.
          });
    })




});






