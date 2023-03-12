import { Notify } from 'notiflix/build/notiflix-notify-aio';



const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name = "delay"]'),
  step: document.querySelector('input[name = "step"]'),
  amount: document.querySelector('input[name = "amount"]'),
}

refs.form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    
    return new Promise ((resolve, reject) => {
      
      setTimeout(() => {
        if (shouldResolve) {
        resolve({position, delay})
        } else {
        reject({position, delay})
        }
        }, delay);
    });
  };

  
function onFormSubmit(e) {
  e.preventDefault();
  const delay = Number(refs.delay.value);
  const step = Number(refs.step.value);
  const amount = Number(refs.amount.value);

  for (let i = 1; i < amount; i += 1) {
    createPromise(i, delay + step * (i-1))
    .then(({position, delay}) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({position, delay}) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  };

}

