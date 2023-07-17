const _elements = {
    buttons: document.querySelectorAll(".card__choice"),
    submitbtn: document.querySelector(".card__submit"),
    span: document.getElementById("rating"),
    card1: document.querySelector(".card"),
    card2: document.querySelector(".card2")
};

_elements.buttons.forEach(button => {
    button.addEventListener("click", e => {
        const btn = e.target;
        btn.classList.add("card__numbersactive");
    });
});





/*_elements.submitbtn.addEventListener("click", sub => {
    _elements.card2.style.display = "flex";
    _elements.card1.style.display = "none";
});*/