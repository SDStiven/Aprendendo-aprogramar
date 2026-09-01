/**
 * Gerenciador de Serviços - API Client & Interface
 * Consome: https://servidor-local-java-tgmn.onrender.com/api/v1/servicos
 */

const API_BASE_URL = 'https://servidor-local-java-tgmn.onrender.com/api/v1/servicos';

// Estado da Aplicação
const state = {
  page: 0,
  size: 10,
  totalPages: 1,
  totalElements: 0,
  services: [],
  filteredServices: [],
  searchQuery: '',
  statusFilter: 'all',
  loading: false
};

// Referências DOM
let elements = {};

function initDOMElements() {
  elements = {
    servicesGrid: document.getElementById('services-grid'),
    loadingState: document.getElementById('loading-state'),
    emptyState: document.getElementById('empty-state'),
    errorState: document.getElementById('error-state'),
    errorMessage: document.getElementById('error-message'),
    retryBtn: document.getElementById('retry-btn'),
    
    // Controles
    searchInput: document.getElementById('search-input'),
    clearSearchBtn: document.getElementById('clear-search-btn'),
    statusFilter: document.getElementById('status-filter'),
    pageSizeSelect: document.getElementById('page-size'),
    refreshBtn: document.getElementById('refresh-btn'),
    
    // Status e Métricas
    totalElementsStat: document.getElementById('total-elements-stat'),
    currentPageCount: document.getElementById('current-page-count'),
    endpointDisplay: document.getElementById('endpoint-display'),
    apiStatusBadge: document.getElementById('api-status-badge'),
    apiStatusText: document.getElementById('api-status-text'),
    
    // Paginação
    paginationWrapper: document.getElementById('pagination-wrapper'),
    currentPageDisplay: document.getElementById('current-page-display'),
    totalPagesDisplay: document.getElementById('total-pages-display'),
    firstPageBtn: document.getElementById('first-page-btn'),
    prevPageBtn: document.getElementById('prev-page-btn'),
    nextPageBtn: document.getElementById('next-page-btn'),
    lastPageBtn: document.getElementById('last-page-btn'),
    paginationNumbers: document.getElementById('pagination-numbers'),

    // Modal
    modal: document.getElementById('details-modal'),
    modalTitle: document.getElementById('modal-title'),
    modalBody: document.getElementById('modal-body'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    modalOkBtn: document.getElementById('modal-ok-btn')
  };
}

/**
 * Inicialização imediata
 */
function startApp() {
  initDOMElements();
  setupEventListeners();
  
  // Renderiza imediatamente com os dados iniciais para a tela nunca ficar em branco
  applyClientFilters();
  
  // Em seguida faz o fetch em tempo real na API do Render
  fetchServices(0, state.size);
}

// Inicia tanto em DOMContentLoaded quanto imediatamente se o script rodar no final da página
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}

/**
 * Event Listeners
 */
function setupEventListeners() {
  if (!elements.searchInput) return;

  // Busca em tempo real
  elements.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    elements.clearSearchBtn.style.display = state.searchQuery ? 'flex' : 'none';
    applyClientFilters();
  });

  // Limpar busca
  elements.clearSearchBtn.addEventListener('click', () => {
    elements.searchInput.value = '';
    state.searchQuery = '';
    elements.clearSearchBtn.style.display = 'none';
    applyClientFilters();
  });

  // Filtro de Status (Todos, Ativos, Inativos)
  elements.statusFilter.addEventListener('change', (e) => {
    state.statusFilter = e.target.value;
    applyClientFilters();
  });

  // Itens por página
  elements.pageSizeSelect.addEventListener('change', (e) => {
    state.size = parseInt(e.target.value, 10);
    state.page = 0;
    fetchServices(state.page, state.size);
  });

  // Botão Atualizar
  elements.refreshBtn.addEventListener('click', () => {
    fetchServices(state.page, state.size);
  });

  // Botão Retry
  elements.retryBtn.addEventListener('click', () => {
    fetchServices(state.page, state.size);
  });

  // Botões de Paginação
  elements.firstPageBtn.addEventListener('click', () => {
    if (state.page > 0) fetchServices(0, state.size);
  });

  elements.prevPageBtn.addEventListener('click', () => {
    if (state.page > 0) fetchServices(state.page - 1, state.size);
  });

  elements.nextPageBtn.addEventListener('click', () => {
    if (state.page < state.totalPages - 1) fetchServices(state.page + 1, state.size);
  });

  elements.lastPageBtn.addEventListener('click', () => {
    if (state.page < state.totalPages - 1) fetchServices(state.totalPages - 1, state.size);
  });

  // Modal
  elements.modalCloseBtn.addEventListener('click', closeModal);
  elements.modalOkBtn.addEventListener('click', closeModal);
  elements.modal.addEventListener('click', (e) => {
    if (e.target === elements.modal) closeModal();
  });
}

/**
 * Consulta a API com timeout e feedback de status
 */
async function fetchServices(page = 0, size = 10) {
  updateApiStatus('checking', 'Consultando API...');
  elements.endpointDisplay.textContent = `/api/v1/servicos?page=${page}&size=${size}`;
  
  const endpointUrl = `${API_BASE_URL}?page=${page}&size=${size}`;

  // Se não temos itens ainda, exibe o loading skeleton
  if (state.services.length === 0) {
    setLoading(true);
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000); // 20s timeout para cold-start do Render

    const response = await fetch(endpointUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Servidor respondeu com status HTTP ${response.status} (${response.statusText})`);
    }

    const data = await response.json();

    // Suporta tanto formato Spring Data Page ({ content: [...], totalPages, ... }) quanto Array simples ([...])
    if (Array.isArray(data)) {
      state.services = data;
      state.page = 0;
      state.size = data.length;
      state.totalPages = 1;
      state.totalElements = data.length;
    } else if (data && Array.isArray(data.content)) {
      state.services = data.content;
      state.page = typeof data.number === 'number' ? data.number : page;
      state.size = typeof data.size === 'number' ? data.size : size;
      state.totalPages = typeof data.totalPages === 'number' ? data.totalPages : 1;
      state.totalElements = typeof data.totalElements === 'number' ? data.totalElements : data.content.length;
    } else {
      state.services = [];
      state.totalElements = 0;
      state.totalPages = 1;
    }

    updateApiStatus('online', `API Online (${state.services.length} itens recebidos)`);
    setLoading(false);
    applyClientFilters();
    updatePaginationControls();

  } catch (error) {
    console.warn('Informação de conexão da API:', error);
    setLoading(false);

    const isAbort = error.name === 'AbortError';
    const msg = isAbort 
      ? 'Tempo limite esgotado. O servidor no Render pode estar hibernando (cold start). Tente novamente.'
      : (error.message || 'Erro ao conectar à API.');

    updateApiStatus('offline', 'Falha de Conexão');
    setError(msg);
  }
}

/**
 * Aplica os filtros de busca e status
 */
function applyClientFilters() {
  let filtered = [...state.services];

  // Filtro de Busca
  if (state.searchQuery) {
    filtered = filtered.filter(item => {
      const titulo = (item.titulo || '').toLowerCase();
      const descricao = (item.descricao || '').toLowerCase();
      const id = String(item.id || '');
      return titulo.includes(state.searchQuery) || 
             descricao.includes(state.searchQuery) ||
             id.includes(state.searchQuery);
    });
  }

  // Filtro de Status
  if (state.statusFilter === 'active') {
    filtered = filtered.filter(item => item.estaAtivo === true);
  } else if (state.statusFilter === 'inactive') {
    filtered = filtered.filter(item => item.estaAtivo === false || item.estaAtivo === null);
  }

  state.filteredServices = filtered;
  renderServices(filtered);
}

/**
 * Renderiza os cards de serviços na tela
 */
function renderServices(services) {
  if (!elements.servicesGrid) return;

  elements.servicesGrid.innerHTML = '';
  elements.totalElementsStat.textContent = state.totalElements;
  elements.currentPageCount.textContent = services.length;

  if (services.length === 0) {
    elements.emptyState.style.display = 'flex';
    elements.servicesGrid.style.display = 'none';
    return;
  }

  elements.emptyState.style.display = 'none';
  elements.servicesGrid.style.display = 'grid';

  services.forEach(servico => {
    const card = document.createElement('div');
    card.className = 'service-card';

    const title = servico.titulo ? escapeHtml(servico.titulo) : '<span class="empty">Sem título informado</span>';
    const description = servico.descricao ? escapeHtml(servico.descricao) : '<span class="empty">Nenhuma descrição cadastrada para este serviço.</span>';
    
    const isAtivo = servico.estaAtivo === true;
    const statusClass = isAtivo ? 'active' : 'inactive';
    const statusText = isAtivo ? 'Ativo' : (servico.estaAtivo === false ? 'Inativo' : 'Pendente');
    const statusIcon = isAtivo ? 'ph-check-circle' : 'ph-x-circle';

    // Imagem ou Placeholder Ilustrado
    const hasValidImage = servico.imagemCapa && 
                          servico.imagemCapa !== 'string' && 
                          (servico.imagemCapa.startsWith('http://') || servico.imagemCapa.startsWith('https://') || servico.imagemCapa.startsWith('data:image'));

    const imageHtml = hasValidImage
      ? `<img src="${escapeHtml(servico.imagemCapa)}" alt="${escapeHtml(servico.titulo || 'Serviço')}" class="card-img" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'card-placeholder-img\\'><i class=\\'ph ph-image-broken\\'></i><span>Imagem Indisponível</span></div>'"/>`
      : `<div class="card-placeholder-img">
           <i class="ph ph-briefcase"></i>
           <span>${servico.titulo ? escapeHtml(servico.titulo) : 'Serviço #' + servico.id}</span>
         </div>`;

    // Formatação de Preço
    let priceHtml = '';
    if (servico.precoComDesconto !== null && servico.precoComDesconto !== undefined) {
      priceHtml = `
        <span class="price-current">${formatCurrency(servico.precoComDesconto)}</span>
        ${servico.preco && servico.preco > servico.precoComDesconto ? `<span class="price-original">${formatCurrency(servico.preco)}</span>` : ''}
      `;
    } else if (servico.preco !== null && servico.preco !== undefined) {
      priceHtml = `<span class="price-current">${formatCurrency(servico.preco)}</span>`;
    } else {
      priceHtml = `<span class="price-empty">Preço a combinar</span>`;
    }

    card.innerHTML = `
      <div class="card-header-media">
        ${imageHtml}
        <span class="card-badge-id">#${servico.id ?? '--'}</span>
        <span class="card-badge-status ${statusClass}">
          <i class="ph-bold ${statusIcon}"></i> ${statusText}
        </span>
      </div>
      <div class="card-body">
        <h2 class="service-title">${title}</h2>
        <p class="service-description">${description}</p>
        <div class="card-pricing-block">
          ${priceHtml}
        </div>
      </div>
      <div class="card-footer">
        <button class="btn-card-details" data-id="${servico.id}">
          <i class="ph ph-info"></i> Ver Detalhes
        </button>
      </div>
    `;

    // Ação do botão de detalhes
    const detailsBtn = card.querySelector('.btn-card-details');
    detailsBtn.addEventListener('click', () => openDetailsModal(servico));

    elements.servicesGrid.appendChild(card);
  });
}

/**
 * Atualiza botões de paginação
 */
function updatePaginationControls() {
  if (!elements.paginationWrapper) return;
  const { page, totalPages } = state;

  if (totalPages <= 1) {
    elements.paginationWrapper.style.display = 'none';
    return;
  }

  elements.paginationWrapper.style.display = 'flex';
  elements.currentPageDisplay.textContent = page + 1;
  elements.totalPagesDisplay.textContent = totalPages;

  elements.firstPageBtn.disabled = page === 0;
  elements.prevPageBtn.disabled = page === 0;
  elements.nextPageBtn.disabled = page >= totalPages - 1;
  elements.lastPageBtn.disabled = page >= totalPages - 1;

  elements.paginationNumbers.innerHTML = '';
  const startPage = Math.max(0, page - 2);
  const endPage = Math.min(totalPages - 1, page + 2);

  for (let i = startPage; i <= endPage; i++) {
    const btn = document.createElement('button');
    btn.className = `btn-page-number ${i === page ? 'active' : ''}`;
    btn.textContent = i + 1;
    btn.addEventListener('click', () => {
      if (i !== state.page) fetchServices(i, state.size);
    });
    elements.paginationNumbers.appendChild(btn);
  }
}

/**
 * Abre o Modal com os dados detalhados
 */
function openDetailsModal(servico) {
  elements.modalTitle.textContent = servico.titulo || `Serviço #${servico.id}`;
  
  const isAtivo = servico.estaAtivo === true;
  const statusBadge = `<span class="card-badge-status ${isAtivo ? 'active' : 'inactive'}" style="position: static; display: inline-flex;">
    ${isAtivo ? 'Ativo' : (servico.estaAtivo === false ? 'Inativo' : 'Pendente')}
  </span>`;

  elements.modalBody.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 0.85rem;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <strong>ID do Serviço:</strong>
        <code style="background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px;">#${servico.id ?? 'N/A'}</code>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <strong>Status de Ativação:</strong>
        ${statusBadge}
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <strong>Preço Padrão:</strong>
        <span>${servico.preco !== null && servico.preco !== undefined ? formatCurrency(servico.preco) : 'Sob consulta'}</span>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <strong>Preço com Desconto:</strong>
        <span style="color: #38BDF8; font-weight: 700;">${servico.precoComDesconto !== null && servico.precoComDesconto !== undefined ? formatCurrency(servico.precoComDesconto) : 'N/A'}</span>
      </div>
      <div style="margin-top: 0.5rem;">
        <strong>Descrição Completa:</strong>
        <p style="color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.5;">${servico.descricao ? escapeHtml(servico.descricao) : 'Nenhuma descrição detalhada informada.'}</p>
      </div>
      <div>
        <strong style="display: block; margin-top: 0.75rem; margin-bottom: 0.25rem;">JSON Retornado pela API:</strong>
        <pre class="json-preview">${escapeHtml(JSON.stringify(servico, null, 2))}</pre>
      </div>
    </div>
  `;

  elements.modal.style.display = 'flex';
}

function closeModal() {
  if (elements.modal) {
    elements.modal.style.display = 'none';
  }
}

function setLoading(isLoading) {
  state.loading = isLoading;
  if (!elements.loadingState) return;
  if (isLoading) {
    elements.loadingState.style.display = 'grid';
    elements.servicesGrid.style.display = 'none';
    elements.emptyState.style.display = 'none';
    elements.errorState.style.display = 'none';
  } else {
    elements.loadingState.style.display = 'none';
  }
}

function setError(message) {
  state.loading = false;
  if (!elements.errorState) return;
  elements.loadingState.style.display = 'none';
  elements.servicesGrid.style.display = 'none';
  elements.emptyState.style.display = 'none';
  elements.errorState.style.display = 'flex';
  elements.errorMessage.textContent = message;
}

function updateApiStatus(status, text) {
  if (!elements.apiStatusBadge) return;
  elements.apiStatusBadge.className = `api-status ${status}`;
  elements.apiStatusText.textContent = text;
}

function formatCurrency(val) {
  if (typeof val !== 'number') return 'R$ 0,00';
  return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function escapeHtml(str) {
  if (typeof str !== 'string') return String(str ?? '');
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
