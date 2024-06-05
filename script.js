const displayCurrent = document.getElementById('current');

function appendToDisplay(value) {
    displayCurrent.textContent += value;
}

function clearDisplay() {
    displayCurrent.textContent = '';
}

function backspace() {
    displayCurrent.textContent = displayCurrent.textContent.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(displayCurrent.textContent.replace('÷', '/').replace('×', '*'));
        displayCurrent.textContent = result;
    } catch {
        displayCurrent.textContent = 'Error';
    }
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (button.id === 'clear') {
            clearDisplay();
        } else if (button.id === 'backspace') {
            backspace();
        } else if (button.id === 'equals') {
            calculate();
        } else {
            appendToDisplay(value);
        }
    });
});