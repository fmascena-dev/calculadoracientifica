const display = document.getElementById("display");

const calculator = {
    insert: (value) => {
        value === '%' ? calculator.calculatePercentage() : display.value += value;
    },

    clearDisplay: () => display.value = "",

    deleteLast: () => display.value = display.value.slice(0, -1),

    calculate: () => {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = "Erro";
        }
    },

    squareRoot: () => {
        try {
            display.value = Math.sqrt(eval(display.value));
        } catch (e) {
            display.value = "Erro";
        }
    },

    powerOfTwo: () => {
        try {
            display.value = Math.pow(eval(display.value), 2);
        } catch (e) {
            display.value = "Erro";
        }
    },

    power: () => {
        let [base, exponent] = display.value.split('^').map(val => eval(val));
        display.value = exponent ? Math.pow(base, exponent) : `${display.value}^`;
    },

    sin: () => display.value = Math.sin(eval(display.value)),
    cos: () => display.value = Math.cos(eval(display.value)),
    tan: () => display.value = Math.tan(eval(display.value)),

    log: () => display.value = Math.log10(eval(display.value)),

    pi: () => display.value += Math.PI,

    calculatePercentage: () => {
        try {
            display.value = eval(display.value) / 100;
        } catch (e) {
            display.value = "Erro";
        }
    }
};

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (event) => {
        calculator.insert(event.target.value);
    });
});

document.getElementById('clear').addEventListener('click', calculator.clearDisplay);
document.getElementById('delete').addEventListener('click', calculator.deleteLast);
document.getElementById('equals').addEventListener('click', calculator.calculate);
document.getElementById('sqrt').addEventListener('click', calculator.squareRoot);
document.getElementById('power2').addEventListener('click', calculator.powerOfTwo);
document.getElementById('power').addEventListener('click', calculator.power);
document.getElementById('sin').addEventListener('click', calculator.sin);
document.getElementById('cos').addEventListener('click', calculator.cos);
document.getElementById('tan').addEventListener('click', calculator.tan);
document.getElementById('log').addEventListener('click', calculator.log);
document.getElementById('pi').addEventListener('click', calculator.pi);
document.getElementById('percent').addEventListener('click', calculator.calculatePercentage);
