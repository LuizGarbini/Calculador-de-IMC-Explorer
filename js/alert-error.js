export const alertError = {
  error: document.querySelector('.alert-error'),

  open() {
    alertError.error.classList.add('open');
  },

  close() {
    alertError.error.classList.remove('open');
  },
};
