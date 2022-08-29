import Notiflix from 'notiflix';

const refs = {
  inputDelayEl: document.querySelector('[name="delay"]'),
  inputStepEl: document.querySelector('[name="step"]'),
  inputAmountEl: document.querySelector('[name="amout"]'),
  submitButtonEl: document.querySelector('button'),
  form: document.querySelector('form'),
};

let firstDelayEl = null;
let delayStepEl = null;
let amountEl = null;

refs.form.addEventListener('submit', onFormSubmit);



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay)
  })
}

  function onFormSubmit(evt) {
    evt.preventDefault();
    let position = Number(refs.inputDelayEl.value);
    let delay = Number(refs.inputStepEl.value);
    let promiseValue = Number(refs.inputAmountEl.value);

    for (let i = 0; i < promiseValue; i += 1) {
      createPromise()
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    }
    
};