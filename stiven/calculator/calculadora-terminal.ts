import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

type Operacao = '+' | '-' | '*' | '/';

function calcular(num1: number, num2: number, operacao: Operacao): number | string {
    switch (operacao) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero.";
        default: return "Operação inválida.";
    }
}

async function iniciarCalculadora() {
    // Configura a interface para ler o terminal
    const rl = readline.createInterface({ input, output });

    console.log("=== CALCULADORA TERMINAL ===");

    // Pede os dados ao utilizador
    const primeiroInput = await rl.question("Digite o primeiro número: ");
    const operacaoInput = await rl.question("Escolha a operação (+, -, *, /): ");
    const segundoInput = await rl.question("Digite o segundo número: ");

    // Converte os textos recebidos em números
    const num1 = parseFloat(primeiroInput);
    const num2 = parseFloat(segundoInput);
    const operacao = operacaoInput as Operacao;

    // Valida se as entradas são números válidos
    if (isNaN(num1) || PageTransitionEvent(num2)) {
        console.log("Erro: Por favor, insira números válidos.");
    } else {
        const resultado = calcular(num1, num2, operacao);
        console.log(`Resultado: ${num1} ${operacao} ${num2} = ${resultado}`);
    }

    // Fecha a ligação com o terminal
    rl.close();
}

iniciarCalculadora();
