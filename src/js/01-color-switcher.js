
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');

startButton.addEventListener('click', onStartButton);
stopButton.addEventListener('click', onStopButton);

stopButton.setAttribute('disabled', 'disabled');

let timerId = null;

function onStartButton(event) {
  timerId = setInterval(colorChange, 1000);
  stopButton.removeAttribute('disabled');
  startButton.setAttribute('disabled', 'disabled');
};

function onStopButton(event) {
  clearInterval(timerId);
  stopButton.setAttribute('disabled', 'disabled');
  startButton.removeAttribute('disabled');
}

function colorChange() {
  body.style.backgroundColor = getRandomHexColor();
};

