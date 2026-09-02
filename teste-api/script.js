const btnTestar = document.getElementById('btn-testar');
const statusMensagem = document.getElementById('status-mensagem');
const gridServicos = document.getElementById('grid-servicos');

const API_URL = 'https://servidor-local-java-tgmn.onrender.com/api/v1/servicos?page=0&size=10';

btnTestar.addEventListener('click', async () => {
    // Estado de carregamento
    statusMensagem.textContent = 'Carregando...';
    gridServicos.innerHTML = '';
    
    try {
        const response = await fetch(API_URL);
        console.log("resposta: " + response);
        
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        const servicos = data.content || [];
        
        // Limpa mensagem de carregamento se sucesso
        statusMensagem.textContent = '';
        
        renderizarCards(servicos);
        
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        statusMensagem.textContent = 'Não foi possível carregar os serviços.';
    }
});

function renderizarCards(servicos) {
    if (servicos.length === 0) {
        statusMensagem.textContent = 'Nenhum serviço encontrado.';
        return;
    }

    servicos.forEach(servico => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Tratar valores nulos ou vazios
        const titulo = servico.titulo || 'Não informado';
        const descricao = servico.descricao || 'Não informado';
        const preco = (servico.preco !== null && servico.preco !== undefined) ? servico.preco : 'Não informado';
        const precoComDesconto = (servico.precoComDesconto !== null && servico.precoComDesconto !== undefined) ? servico.precoComDesconto : 'Não informado';
        
        // Status
        let statusTexto = 'Não informado';
        let statusClasse = 'status-desconhecido';
        
        if (servico.estaAtivo === true) {
            statusTexto = 'Ativo';
            statusClasse = 'status-ativo';
        } else if (servico.estaAtivo === false) {
            statusTexto = 'Inativo';
            statusClasse = 'status-inativo';
        }

        // Tratar imagem
        const img = document.createElement('img');
        img.className = 'card-img';
        img.alt = titulo;
        
        // Placeholder simples em SVG
        const placeholderImg = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22280%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20280%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23dddddd%22%2F%3E%3Ctext%20x%3D%22140%22%20y%3D%2290%22%20fill%3D%22%23777777%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20font-weight%3D%22bold%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3ESem%20Imagem%3C%2Ftext%3E%3C%2Fsvg%3E';

        if (servico.imagemCapa && typeof servico.imagemCapa === 'string' && servico.imagemCapa.trim() !== '' && servico.imagemCapa !== 'string') {
            img.src = servico.imagemCapa;
        } else {
            img.src = placeholderImg;
        }

        // Se falhar o carregamento da imagem, substitui pelo placeholder
        img.onerror = () => {
            img.src = placeholderImg;
        };

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        
        cardBody.innerHTML = `
            <h2 class="card-title">${escapeHTML(titulo)}</h2>
            <p class="card-desc">${escapeHTML(descricao)}</p>
            <p class="card-price">Preço: ${preco}</p>
            <p class="card-price">Com desconto: ${precoComDesconto}</p>
            <div class="card-status">
                <span class="status-dot ${statusClasse}"></span>
                ${statusTexto}
            </div>
        `;
        
        card.appendChild(img);
        card.appendChild(cardBody);
        
        gridServicos.appendChild(card);
    });
}

function escapeHTML(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}
