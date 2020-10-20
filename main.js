const appContainer = document.querySelector('.app');
const output = document.querySelector('.output');
const display = document.querySelector('.display');
const memory = document.querySelector('.memory');
const keys = document.getElementById('keys-container');

output.innerText = 0; // output default value
memory.innerText = 0; // memory default value

keys.addEventListener('click', (e) => {
    const key = e.target;
    const action = key.dataset.action;

    if (key.matches('button')) {

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
            const dot = key.innerText;
            if (!output.innerText.includes(dot)) {
                output.innerText = output.innerText + dot;
            }
        }

        // calculate (equals)
        if (action === 'calculate') {
            const firstValue = output.innerText;
            const operator = display.dataset.operator;
            const secondValue = memory.innerText;

            if (output.innerText === '0') {
                return false;
            }

            // calculating function
            function calc (num1, operator, num2) {
                let total;

                if (operator === 'addition') {
                    total = parseFloat(num1) + parseFloat(num2);
                } else if (operator === 'subtract') {
                    total = parseFloat(num1) - parseFloat(num2);
                } else if (operator === 'multiplication') {
                    total = parseFloat(num1) * parseFloat(num2);
                } else if (operator === 'division') {
                    total = parseFloat(num1) / parseFloat(num2)
                }

                return total;
            }

            memory.innerText = 0;
            const result = calc(firstValue, operator, secondValue);
            output.innerText = result;
        }

        // clear
        if (action ==='clear') {
            output.innerText = 0;
            memory.innerText = 0;
        }

        // delete
        if (action === 'delete') {
            const updatedOutput = output.innerText.toString().slice(0, -1);

            if (updatedOutput.length === 0) {
                output.innerText = 0;
            } else {
                output.innerText = updatedOutput;
            }
        }
    }
})

// switch dark mode
const switchBtn = document.querySelector('.switch-btn');

switchBtn.addEventListener('click', (e) => {
    e.target.classList.toggle('darkMode');
    appContainer.classList.toggle('backgroundChange');
})