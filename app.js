// DOM
const buttonIncrease = document.getElementById('increase-btn');
const buttonReset = document.getElementById('reset-btn');
const buttonDecrease = document.getElementById('decrease-btn');
const counterDisplay = document.getElementById('counter-display');
const buttons = document.querySelectorAll('.main__button');

// Logic
let counter = 0;

// Event Listener
buttonIncrease.addEventListener('click', () => increaseCounter());
buttonDecrease.addEventListener('click', () => decreaseCounter());
buttonReset.addEventListener('click', () => resetCounter());
// Check if the color of the counterDisplay is correct **positive = green, negative = red, 0 = white**
// Conditionals in function verifyColor, line 36
buttons.forEach(button => {
    button.addEventListener('click', () => verifyColor());
});

// Functions
function increaseCounter() {
    counter++
    counterDisplay.textContent = counter;
}

function decreaseCounter() {
    counter--
    counterDisplay.textContent = counter;
}

function resetCounter() {
    counter = 0;
    counterDisplay.textContent = counter;
}

const verifyColor = () => {
    if (counter >= 1) {
        counterDisplay.style.color = 'green';
    } else if (counter === 0) {
        counterDisplay.style.color = 'var(--text-color)';
    } else {
        counterDisplay.style.color = 'red';
    }
}