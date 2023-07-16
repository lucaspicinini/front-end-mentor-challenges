const _elements = {
    buttons: document.querySelectorAll(".card__numbers"),
    submitbtn: document.querySelector(".card__submit"),
    span: document.getElementById("rating"),
    card1: document.querySelector(".card"),
    card2: document.querySelector(".card2")
};

_elements.buttons.forEach(button => {
    button.addEventListener("click", e => {
        _elements.buttons.classList.remove("card__numbersactive")
    });
});