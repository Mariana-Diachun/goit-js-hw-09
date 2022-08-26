import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const refs = {
    inputEl: document.querySelector('#datetime-picker'),
    buttonEl: document.querySelector('button[data-start]')
}

const fp = flatpickr(refs.inputEl, {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
});
console.log(fp);