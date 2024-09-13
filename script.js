// Usando const para variáveis imutáveis e let para mutáveis
const display = document.getElementById("display");

// Objeto para agrupar funções da calculadora
const calculator = {
    // Arrow function para inserir valor
    insert: (value) => {
        value === '%' ? calculator.calculatePercentage() : display.value += value;
    },

    // Arrow function para limpar o display
    clearDisplay: () => display.value = "",

    // Arrow function para apagar o último caractere
    deleteLast: () => display.value = display.value.slice(0, -1),

    // Função para calcular o resultado (usando eval com cuidado)
    calculate: () => {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = "Erro";
        }
    },

    // Função para calcular a raiz quadrada
    squareRoot: () => {
        try {
            display.value = Math.sqrt(eval(display.value));
        } catch (e) {
            display.value = "Erro";
        }
    },

    // Função para elevar ao quadrado
    powerOfTwo: () => {
        try {
            display.value = Math.pow(eval(display.value), 2);
        } catch (e) {
            display.value = "Erro";
        }
    },

    // Função para cálculo de potências usando desestruturação de array
    power: () => {
        let [base, exponent] = display.value.split('^').map(val => eval(val));
        display.value = exponent ? Math.pow(base, exponent) : `${display.value}^`;
    },

    // Funções trigonométricas
    sin: () => display.value = Math.sin(eval(display.value)),
    cos: () => display.value = Math.cos(eval(display.value)),
    tan: () => display.value = Math.tan(eval(display.value)),

    // Função para logaritmo base 10
    log: () => display.value = Math.log10(eval(display.value)),

    // Função para pi
    pi: () => display.value += Math.PI,

    // Função para porcentagem
    calculatePercentage: () => {
        try {
            display.value = eval(display.value) / 100;
        } catch (e) {
            display.value = "Erro";
        }
    }
};

// Adicionando listeners aos botões numéricos e de operações
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (event) => {
        calculator.insert(event.target.value);
    });
});

// Botões de funções especiais
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
