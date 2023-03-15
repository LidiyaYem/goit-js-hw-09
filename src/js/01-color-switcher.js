const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);

let intervalId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function onStart(e) {
    
    intervalId = setInterval(changeBgColor, 1000);
    refs.startBtn.toggleAttribute('disabled');
}

function onStop(e) {
    
    clearInterval(intervalId);
    refs.startBtn.removeAttribute('disabled');
}

function changeBgColor() {
    const hexColor = getRandomHexColor();
    refs.body.style.backgroundColor = hexColor;
}