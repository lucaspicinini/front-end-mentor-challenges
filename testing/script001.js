const _elements = {
    buttons: document.querySelectorAll(".card__numbers"),
    submitbtn: document.querySelector(".card__submit"),
    span: document.getElementById("rating"),
    card1: document.querySelector(".card"),
    card2: document.querySelector(".card2")
};

_elements.buttons.forEach(button => {
    button.addEventListener("click", () => {
        _elements.buttons.forEach(btn => {
            btn.classList.remove("card__numbersactive")
        });
        button.classList.add("card__numbersactive");
    });
});

_elements.submitbtn.addEventListener("click", () => {
    const nums = _elements.buttons;
    let span = _elements.span;
    let buttonId = 0;
    let c = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i].classList.contains("card__numbersactive") === true) {
            c += 1;
            buttonId = nums[i].textContent;
        };
    };
    if (c === 1) {
        _elements.card1.style.display = "none";
        _elements.card2.style.display = "flex";
        span.innerHTML = buttonId;
    } else {
        window.alert("Please, select an option.")
    };
});

/*
_elements.buttons.forEach(button => {
    button.addEventListener("click", () => {
        _elements.buttons.forEach(btn => {
            btn.classList.remove("card__numbersactive")
        });
        button.classList.add("card__numbersactive");
    });
});          
*/

