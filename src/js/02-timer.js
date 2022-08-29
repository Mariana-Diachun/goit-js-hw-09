import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  buttonEl: document.querySelector('button[data-start]'),
  spanDays: document.querySelector('[data-days]'),
  spanHours: document.querySelector('[data-hours]'),
  spanMinutes: document.querySelector('[data-minutes]'),
  spanSeconds: document.querySelector('[data-seconds]'),
};

let selectedDate = null;

refs.buttonEl.disabled = true;

const fp = flatpickr(refs.inputEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      return Notiflix.Notify.failure("Please choose a date in the future")
    } else {
      selectedDate = selectedDates[0];
      refs.buttonEl.disabled = false;
    }
  },
});

refs.buttonEl.addEventListener('click', onButtonStartClick);

function onButtonStartClick(evt) {
  setInterval(() => {
      refs.buttonEl.disabled = true;
      const currentTime = Date.now();
      const deltaTime = selectedDate.getTime() - currentTime;
      const timeComponents = convertMs(deltaTime);
      updateTimeValue(timeComponents);
      }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

function updateTimeValue({ days, hours, minutes, seconds }) {
  refs.spanDays.textContent = `${days} :`;
  refs.spanHours.textContent = `${hours} :`;
  refs.spanMinutes.textContent = `${minutes} :`;
  refs.spanSeconds.textContent = `${seconds} :`;
}

