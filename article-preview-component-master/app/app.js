const _elements = {
    button: document.querySelector(".card-footer__ico-container"),
    buttonIco: document.querySelector(".card-footer__ico"),
    shareCard: document.querySelector(".share-card"),
};

_elements.shareCard.style.display = "none";

_elements.button.addEventListener('click', () => {
    if (_elements.shareCard.style.display === "none") {
        _elements.shareCard.style.display = "block";
        _elements.buttonIco.classList.add("card-footer__ico--active");
        _elements.button.classList.add("card-footer__ico-container--active");
    } else {
        _elements.shareCard.style.display = "none";
        _elements.buttonIco.classList.remove("card-footer__ico--active");
        _elements.button.classList.remove("card-footer__ico-container--active");
    };
});