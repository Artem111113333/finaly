// КНОПКИ "ПОКАЗАТЬ ВСЕ"

const buttonShow = document.querySelectorAll('.openAll');

buttonShow.forEach((currentButton) => {

    currentButton.addEventListener('click', (event) => {

        const clickedButton = event.target.closest(".openAll");
        const buttonText = clickedButton.querySelector('.buttonText');
        const buttonSVG = clickedButton.querySelector('.buttonSVG');
        const infoText = clickedButton.previousElementSibling;

        if (buttonText.textContent === 'Показать все') {
            buttonText.textContent = 'Скрыть';
            infoText.classList.remove('infoText_hide');
        } else {
            buttonText.textContent = 'Показать все';
            infoText.classList.add('infoText_hide');
        }
        buttonSVG.classList.toggle('svgTurn');
    });

});


/////////////////////////////////////////////////////////////////////////////////

// КНОПКА "ЧИТАТЬ ДАЛЕЕ"

const buttonRead = document.querySelector('.readMore');

buttonRead.addEventListener('click', () => {

    const buttonText = buttonRead.querySelector('.buttonText');
    const buttonSVG = buttonRead.querySelector('.buttonSVG');
    const infoText = buttonRead.previousElementSibling;

    if (buttonText.textContent === 'Читать далее') {
        buttonText.textContent = 'Скрыть';
        infoText.classList.remove('infoText_hide');
    } else {
        buttonText.textContent = 'Читать далее';
        infoText.classList.add('infoText_hide');
    }
    buttonSVG.classList.toggle('svgTurn');
});


/////////////////////////////////////////////////////////////////////////////////

// КНОПКА "БУРГЕР"

const buttonBurger = document.querySelector('.svg-burger');

buttonBurger.addEventListener('click', openModal);

function openModal() {
    const modal = document.querySelector(".transparent");
    modal.style.display = "block";
}


/////////////////////////////////////////////////////////////////////////////////

// КНОПКА "ЗАКРЫТЬ"

const buttonClose = document.querySelector('.svg-close');

buttonClose.addEventListener('click', closeModal);

function closeModal() {
    const modal = document.querySelector(".transparent");
    modal.style.display = "none";
}