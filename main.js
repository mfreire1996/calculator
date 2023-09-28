//theme section
const firstButton = document.querySelector("#first");
const secondButton = document.querySelector("#second");
const thirdButton = document.querySelector("#third");
const ballButton = document.querySelector(".ball");

firstButton.addEventListener('change', () => {
    ballButton.style.left = '4px';
    document.querySelector('body').classList.remove('second');
    document.querySelector('body').classList.remove('third');
    document.querySelector('body').classList.add('first');
})

secondButton.addEventListener('change', () => {
    ballButton.style.left = '38px';
    document.querySelector('body').classList.remove('first');
    document.querySelector('body').classList.remove('third');
    document.querySelector('body').classList.add('second');
})

thirdButton.addEventListener('change', () => {
    ballButton.style.left = '72px';
    document.querySelector('body').classList.remove('first');
    document.querySelector('body').classList.remove('second');
    document.querySelector('body').classList.add('third');
})