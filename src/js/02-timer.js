
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
require("flatpickr/dist/themes/dark.css");
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const startBtn = document.querySelector('[data-start]');
const dataInput = document.querySelector('#datetime-picker');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

startBtn.setAttribute('disabled','true');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notify.warning("Please choose a date in the future");
      startBtn.setAttribute('disabled','true');
    } else startBtn.removeAttribute('disabled');
  }
}

flatpickr("#datetime-picker", options);

startBtn.addEventListener('click', onStartBtn);

let timerId = null;

function onStartBtn() {

  if (timerId) {
    clearInterval(timerId)
  }

  timerId = setInterval(() => {

    const parsedDate = Date.parse(dataInput.value)
    if (parsedDate) {
      const difference = parsedDate - new Date().getTime()

      if (difference === 0) {
        clearInterval(timerId)
      }

      const toPrint = convertMs(difference);

      daysRef.textContent = addLeadingZero(toPrint.days)
      hoursRef.textContent = addLeadingZero(toPrint.hours)
      minutesRef.textContent = addLeadingZero(toPrint.minutes)
      secondsRef.textContent = addLeadingZero(toPrint.seconds)

    }

  }, 1000)
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

