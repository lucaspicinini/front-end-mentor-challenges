const buttons = document.querySelectorAll('.card__numbers');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove(`card__numbersactive`));
      button.classList.add(`card__numbersactive`);
    });
  });