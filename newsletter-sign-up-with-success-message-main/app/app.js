let card = document.querySelector('.card')
let inputMail = document.querySelector('.form__input')
let inputAlert = document.querySelector('.form__label-fail')
let subButton = document.querySelector('.form__button')

let successCard = document.querySelector('.success-card')
let dismissButton = document.querySelector('.success-card__button')

let outputMail = document.querySelector('.success-card__mail')

// capturing button click

subButton.addEventListener('click', () => {
    validateEmail(inputMail)
})

dismissButton.addEventListener('click', () => {
    changeCard()
})

function validateEmail(input) {
    const validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  
    if (input.value.match(validRegex)) {
        changeCard()
        outputMail.innerHTML = input.value
    } else {
        errorState()
        setTimeout(clearAll, 1000)
    }
  }

  function changeCard() {
    if (card.style.display == 'flex' || card.style.display == "") {
        card.style.display = 'none'
        successCard.style.display = 'flex'
    } else if (successCard.style.display == 'flex') {
        card.style.display = 'flex'
        successCard.style.display = 'none'
        inputMail.value = ""
    }
  }

  function errorState() {
    inputAlert.style.display = 'block'
    inputMail.classList.add('form__input--fail')
  }

  function clearAll() {
    inputAlert.style.display = 'none'
    inputMail.classList.remove('form__input--fail')
  }