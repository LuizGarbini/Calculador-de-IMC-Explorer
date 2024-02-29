export const modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),
  buttonSubmit: document.querySelector('.modal button.submit'),
  alertError: document.querySelector('.alert-error'),

  open() {
    modal.wrapper.classList.add('open');
  },

  close() {
    modal.wrapper.classList.remove('open');
  },

  openAlertError() {
    modal.alertError.classList.add('open');
  },

  closeAlertError() {
    modal.alertError.classList.remove('open');
  },
};

modal.buttonClose.onclick = () => {
  modal.close();
};

window.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    modal.close();
  }
}

function handleKeySubmit(event) {
  if (event.key === 'Enter') {
    modal.open();
  }
}
