import { modal } from './modal.js';
import { alertError } from './alert-error.js';

// variáveis - variables
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const showAlertError = notANumber(weight) || notANumber(height);

  if (showAlertError) {
    alertError.open();
    return;
  }

  alertError.close();

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  modal.message.innerText = message;
  modal.open();
};

function notANumber(value) {
  return isNaN(value) || value == '';
}

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
