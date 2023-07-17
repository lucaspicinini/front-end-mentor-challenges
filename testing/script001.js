const _elements = {
    buttons: document.querySelectorAll(".card__numbers"),
    submitbtn: document.querySelector(".card__submit"),
    span: document.getElementById("rating"),
    card1: document.querySelector(".card"),
    card2: document.querySelector(".card2")
};

_elements.buttons.forEach(button => {
    button.addEventListener("click", e => {
        const all = _elements.buttons;
        all.forEach(btn => {
            btn.classList.remove("card__numbersactive")
        });
        const btn = e.target;
        btn.classList.add("card__numbersactive");
    });
});

_elements.submitbtn.addEventListener("click", sub => {
    const nums = _elements.buttons;
    let c = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i].classList.contains("card__numbersactive") === true) {
            c += 1;
        } else if (c === 1){
            _elements.card1.style.display = "none";
            _elements.card2.style.display = "flex";
        } else if (c === 0) {
            window.alert("Please, select an option.")
        };
    };
});