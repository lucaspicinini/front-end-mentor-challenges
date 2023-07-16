const buttons = document.querySelectorAll('.card__numbers');
const submit = document.querySelector('.card__submit')
let selectedButton = null;  //tracks selected button

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (selectedButton === button) {
      // Clicked on the already selected button, reset all buttons
      buttons.forEach(btn => {
        btn.classList.remove('card__numbersactive');
        btn.disabled = false;
      });
      selectedButton = null;
    } else {
      // Clicked on a different button, update selection
      if (selectedButton) {
        selectedButton.classList.remove('card__numbersactive');
        selectedButton.disabled = false;
      }
      selectedButton = button;
      button.classList.add('card__numbersactive');
      button.disabled = false;
    }
  });
});

const submitButton = document.querySelector('.card__submit');
submitButton.addEventListener('click', (event) => {
  if (!selectedButton) {
    event.preventDefault(); // Prevent form submission
    alert('Please select at least one button.');
  }
});


/* The following part was made only as an object of study, but I believe it is totally broken lol. I'm interested in learning more about sending data to the backend, if you have anything to add please let me know. */


submit.addEventListener('click', (event) => {
  const clickedButton = event.target; // Get the clicked button element
  const buttonId = clickedButton.id; // Extract the button's ID
  // Send the data to the backend using an API request or any other method
  // For example, using fetch to send the data as a JSON payload
  fetch('/backend-endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ buttonId: buttonId })
  })
    .then(response => {
      // Handle the response from the backend
    })
    .catch(error => {
      // Handle any errors that occurred during the request
    });
});