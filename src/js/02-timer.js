import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  // onClose(selectedDates) {
  //   console.log(selectedDates[0]);
  // },
};

const refs = {
    inputEl: document.querySelector('#datetime-picker'),
    buttonEl: document.querySelector('button[data-start]')
}
refs.buttonEl.disabled = true;

const fp = flatpickr(refs.inputEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const choosedTime = selectedDates[0].getTime();
    const timeNow = options.defaultDate.getTime();
    if (choosedTime < timeNow) {
      return window.alert("Please choose a date in the future");
    } else {
      refs.buttonEl.disabled = false;
    }
  },
});

refs.buttonEl.addEventListener('click', onButtonStartClick);
function onButtonStartClick(evt) {
    setInterval(() => {
      const currentTime = Date.now();
      console.log(currentTime);
      // console.log(choosedTime - currentTime);
      console.log(options.onClose());
      }, 1000);
}
