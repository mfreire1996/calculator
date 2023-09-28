const firstButton: HTMLButtonElement | null = document.querySelector("#first");
const secondButton: HTMLButtonElement | null = document.querySelector("#second");
const thirdButton: HTMLButtonElement | null = document.querySelector("#third");

const ballButton: HTMLElement | null = document.querySelector(".ball");

firstButton?.addEventListener('click', () => {
    if (ballButton) {
        ballButton.style.left = '40px';
    }
});

export {}