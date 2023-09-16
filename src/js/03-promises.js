import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmition);

function onFormSubmition(event) {
  event.preventDefault();

  let firstDelay = Number(form.delay.value);
  let delayStep = Number(form.step.value);
  for (let i = 1; i < form.amount.value; i += 1) {
    const element = form.amount[i];
    let delay = firstDelay + delayStep * (i - 1);
  } return

  }


