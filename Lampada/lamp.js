const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById ('lamp');

function lampOn () {
    lamp.src = './imagens/lampon.jpg';
}

function lampOff () {
    lamp.src = './imagens/lampoff.jpg';
}

turnOn.addEventListener ('click', lampOn );
turnOff.addEventListener ('click', lampOff );
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
