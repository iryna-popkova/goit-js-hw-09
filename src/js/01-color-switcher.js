
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');

startButton.addEventListener('click', onStartButton);
stopButton.addEventListener('click', onStopButton);

let timerId = null;

function onStartButton(event) {
  timerId = setInterval(colorChange, 1000);
  startButton.toggleAttribute('disabled')
};

function onStopButton(event) {
  clearInterval(timerId);

  startButton.removeAttribute('disabled')
}



function colorChange() {
  body.style.backgroundColor = getRandomHexColor();
};

