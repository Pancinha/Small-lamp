const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const broken = document.getElementById('lamp');

const lamp = document.getElementById('lamp');

function isLampBro(){
    return lamp.src.indexOf ('quebrada') > -1;
}

function lampOn(){
    if (!isLampBro () ){
        lamp.src = './img/ligada.jpg';
    } 
}

function lampOff(){
    if (!isLampBro () ){
        lamp.src = './img/desligada.jpg'
    }
}

function lampBroken(){
    lamp.src = './img/quebrada.jpg'
    verify();
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener('click', lampOff);
broken.addEventListener('dblclick', lampBroken);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseout', lampOff);
