import { Notify } from 'notiflix/build/notiflix-notify-aio';



const refs = {
  form: document.querySelector('.form'),
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
  const delay = Number(refs.form.delay.value);
  const step = Number(refs.form.step.value);
  const amount = Number(refs.form.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay + step * (i-1))
    .then(({position, delay}) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({position, delay}) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  };

}

