
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

let currentDate = null;
let selectedDate = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose([selectedDates]) {
        currentDate = Date.now();
        if (selectedDates - currentDate >= 0) {
            refs.startBtn.disabled = false;
            selectedDate = selectedDates;
        }
        else {
            Notify.failure('Please choose a date in the future');
            refs.startBtn.disabled = true;
        }
  },
};

flatpickr(refs.input, options);

refs.startBtn.addEventListener('click', onStart);

function onStart(e) {
      
        const timer = setInterval( () => {
        currentDate = Date.now();
        const deltaTime = selectedDate.getTime() - currentDate;
        const time = convertMs(deltaTime);

        if ((selectedDate.getTime() - currentDate) < 1000 ) {
            clearInterval(timer);
        }

        return updateTimer(time);
    }, 1000);
};

function updateTimer({days, hours, minutes, seconds}) {
        refs.days.textContent = addLeadingZero(`${days}`);
        refs.hours.textContent = addLeadingZero(`${hours}`);
        refs.minutes.textContent = addLeadingZero(`${minutes}`);
        refs.seconds.textContent = addLeadingZero(`${seconds}`);

        return {days, hours, minutes, seconds}
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

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
  };


