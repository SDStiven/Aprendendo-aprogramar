// Definir o tipo para as operações permitidas
type Operacao = 'soma' | 'subtracao' | 'multiplicacao' | 'divisao';




// Função principal da calculadora
function calcular(num1: number, num2: number, operacao: Operacao): number | string {
    switch (operacao) {
        case 'soma':
            return num1 + num2;
        case 'subtracao':
            return num1 - num2;
        case 'multiplicacao':
            return num1 * num2;
        case 'divisao':
            // Validação para evitar a divisão por zero
            return num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero não é permitida.";
        default:
            return "Operação inválida.";
    }
}




// Exemplos de uso:
console.log("Soma (5 + 3):", calcular(5, 3, 'soma'));
console.log("Subtração (10 - 4):", calcular(10, 4, 'subtracao'));
console.log("Multiplicação (6 * 7):", calcular(6, 7, 'multiplicacao'));
console.log("Divisão (15 / 3):", calcular(15, 3, 'divisao'));
console.log("Erro de divisão:", calcular(10, 0, 'divisao'));
