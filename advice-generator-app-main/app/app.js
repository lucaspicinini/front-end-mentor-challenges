let id = document.querySelector('.card__title')
let advice = document.querySelector('.card__advice')
let dice = document.querySelector('.card__button')

dice.addEventListener("click", randomAdvice)

function randomAdvice() {

  slip.getBody().then((apiObject) => {

    id.innerHTML = `Advice #${apiObject.id}`
    advice.innerHTML = `&#8220${apiObject.advice}&#8221`

  })

}