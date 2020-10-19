const appContainer = document.querySelector('.app');
const output = document.querySelector('.output');
const display = document.querySelector('.display');
const memory = document.querySelector('.memory');
const clearButton = document.querySelector('.clear');
const keys = document.getElementById('keys-container');

output.innerText = 0; // output default value
memory.innerText = 0; // memory default value

keys.addEventListener('click', (e) => {
    const key = e.target;
    const action = key.dataset.action;

    // numbers
    if (!action) {
        const number = key.innerText;

        if (output.innerText === '0') {
            output.innerText = number;
        } else if (output.innerText.length > 8) {
            output.innerText = 0;
        } else {
            output.innerText = output.innerText + number;
        }
    }

    // operators
    if (action === 'division' || action === 'multiplication' || action === 'addition' || action === 'subtract' || action === 'plus-minus') {
        const operatorSign = key.innerText;
        display.dataset.firstValue = output.innerText;
        display.dataset.operator = action;

        memory.innerText = output.innerText + ' ' + operatorSign;
        output.innerText = 0;
    }

    // decimal
    if ( action === 'decimal') {
        console.log('decimal key');
    }

    // clear
    if (action ==='clear') {
        output.innerText = 0;
        memory.innerText = 0;
    }

    // delete
    if (action === 'delete') {
        console.log('delete key');
    }
})