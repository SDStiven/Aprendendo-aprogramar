// 1. O computador escolhe um número aleatório inteiro entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

// 2. Mapeia os elementos do HTML para o JavaScript interagir com eles
const palpiteInput = document.getElementById("palpiteInput");
const verificarBtn = document.getElementById("verificarBtn");
const mensagem = document.getElementById("mensagem");
const contadorTentativas = document.getElementById("contadorTentativas");

// 3. Função principal que valida o palpite do jogador
function verificarPalpite() {
    const palpite = parseInt(palpiteInput.value);

    // Validação simples: verifica se o campo está vazio ou fora do limite de 1 a 100
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = "❌ Por favor, introduza um número válido entre 1 e 100.";
        mensagem.style.color = "red";
        return;
    }

    // Incrementa o número de tentativas feitas
    tentativas++;
    contadorTentativas.textContent = tentativas;

    // Compara o palpite com o número secreto
    if (palpite === numeroSecreto) {
        mensagem.textContent = `🎉 Parabéns! Acertou no número ${numeroSecreto} em ${tentativas} tentativas!`;
        mensagem.style.color = "green";
        verificarBtn.disabled = true; // Desativa o botão porque o jogo acabou
    } else if (palpite > numeroSecreto) {
        mensagem.textContent = "📉 O número secreto é MENOR!";
        mensagem.style.color = "blue";
    } else {
        mensagem.textContent = "📈 O número secreto é MAIOR!";
        mensagem.style.color = "orange";
    }

    // Limpa o campo de texto e volta a focar nele automaticamente
    palpiteInput.value = "";
    palpiteInput.focus();
}

// 4. Configura o botão para reagir ao clique do rato
verificarBtn.addEventListener("click", verificarPalpite);

// 5. Permite ao utilizador jogar pressionando a tecla "Enter" no teclado
palpiteInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        verificarPalpite();
    }
});
