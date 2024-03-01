import { modal } from './modal.js';
import { alertError } from './alert-error.js';
import { notANumber, calculateIMC } from './utils.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

  if (weightOrHeightIsNotANumber) {
    alertError.open();
    return;
  }

  alertError.close();

  const result = calculateIMC(weight, height);
  displayResultMessage(result);
};

inputWeight.oninput = () => alertError.close();
inputHeight.oninput = () => alertError.close();

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;

  modal.message.innerText = message;
  modal.open();
}
