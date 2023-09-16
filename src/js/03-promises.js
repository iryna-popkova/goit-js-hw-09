import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmition);

function onFormSubmition(event) {
  event.preventDefault();

  let firstDelay = Number(form.delay.value);
  let delayStep = Number(form.step.value);
  let amount = Number(form.amount.value);
  for (let position = 0; position < amount; position += 1) {
    let delay = firstDelay + delayStep * position;

    createPromise(position, delay)
      .then(({position, delay}) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
  }
};


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve("Success! Value passed to resolve function");
      } else {
        reject("Error! Error passed to reject function");
      }
    }, delay);
  });

