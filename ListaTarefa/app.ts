// Mapeia os elementos do HTML garantindo os tipos corretos
const tarefaInput = document.getElementById('tarefaInput') as HTMLInputElement;
const adicionarBtn = document.getElementById('adicionarBtn') as HTMLButtonElement;
const listaTarefas = document.getElementById('listaTarefas') as HTMLUListElement;

// Função para adicionar uma nova tarefa
function adicionarTarefa(): void {
    const textoTarefa: string = tarefaInput.value.trim();

    // Valida se o input não está vazio
    if (textoTarefa === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    // Cria o elemento da lista (li)
    const novoItem: HTMLLIElement = document.createElement('li');
    novoItem.textContent = textoTarefa;

    // Cria o botão de remover para essa tarefa
    const botaoRemover: HTMLButtonElement = document.createElement('button');
    botaoRemover.textContent = '❌';
    botaoRemover.className = 'remover-btn';
    
    // Configura o clique para remover este item específico
    botaoRemover.addEventListener('click', () => {
        novoItem.remove();
    });

    // Junta o botão ao item, e o item à lista principal
    novoItem.appendChild(botaoRemover);
    listaTarefas.appendChild(novoItem);

    // Limpa o campo de texto e volta a focar nele
    tarefaInput.value = '';
    tarefaInput.focus();
}

// Escuta o clique no botão "Adicionar"
adicionarBtn.addEventListener('click', adicionarTarefa);

// Permite adicionar a tarefa também ao carregar na tecla "Enter"
tarefaInput.addEventListener('keypress', (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});
