// DOM Elements
const elements = {
  grid: document.getElementById('grid'),
  empty: document.getElementById('empty'),
  searchInput: document.getElementById('q'),
  clearBtn: document.getElementById('clearBtn'),
  voiceBtn: document.getElementById('voiceBtn'),
  tabDisease: document.getElementById('tab-disease'),
  tabPlant: document.getElementById('tab-plant'),
  systemFilter: document.getElementById('system'),
  resetFilters: document.getElementById('resetFilters'),
  dialog: document.getElementById('detailsDialog'),
  dialogTitle: document.getElementById('dlgTitle'),
  dialogLatin: document.getElementById('dlgLatin'),
  dialogBody: document.getElementById('dlgBody'),
  plantImage: document.getElementById('plantImage'),
  plantDetails: document.getElementById('plantDetails'),
  closeDialog: document.getElementById('closeDialog'),
  themeToggle: document.getElementById('themeToggle'),
  logoutBtn: document.getElementById('logoutBtn')
};

// App State
const state = {
  mode: 'disease',
  query: '',
  system: '',
  plants: [],
  filteredPlants: [],
  favorites: new Set(JSON.parse(localStorage.getItem(`ayurFavorites_${localStorage.getItem('loggedInUser')}`) || '[]')),
  darkMode: localStorage.getItem('darkMode') === 'true' || false
};

// Initialize App
async function init() {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (!loggedInUser) {
    window.location.href = 'login.html';
    return;
  }
  await loadPlants();
  setupEventListeners();
  applyTheme();
  render();
}

// Load plant data
async function loadPlants() {
  try {
    const response = await fetch('plants.json');
    const data = await response.json();
    state.plants = data.plants;
  } catch (error) {
    console.error('Error loading plant data:', error);
    state.plants = [];
  }
}

// Setup event listeners
function setupEventListeners() {
  // Search input
  elements.searchInput.addEventListener('input', (e) => {
    state.query = e.target.value.trim();
    filterPlants();
    render();
  });

  // Clear button
  elements.clearBtn.addEventListener('click', () => {
    elements.searchInput.value = '';
    state.query = '';
    elements.searchInput.focus();
    filterPlants();
    render();
  });

  // Voice search
  elements.voiceBtn.addEventListener('click', toggleVoiceSearch);

  // Tabs
  elements.tabDisease.addEventListener('click', () => setMode('disease'));
  elements.tabPlant.addEventListener('click', () => setMode('plant'));

  // Filters
  elements.systemFilter.addEventListener('change', (e) => {
    state.system = e.target.value;
    filterPlants();
    render();
  });

  elements.resetFilters.addEventListener('click', () => {
    elements.systemFilter.value = '';
    state.system = '';
    filterPlants();
    render();
  });

  // Theme toggle
  elements.themeToggle.addEventListener('click', toggleTheme);

  // Dialog close
  elements.closeDialog.addEventListener('click', () => elements.dialog.close());

  // Logout
  elements.logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
  });

  // Favorite toggle (delegated)
  elements.grid.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;

    const viewBtn = e.target.closest('[data-view]');
    const favBtn = e.target.closest('[data-fav]');

    if (viewBtn) {
      openPlantDetails(viewBtn.dataset.view);
    } else if (favBtn) {
      toggleFavorite(favBtn.dataset.fav);
    }
  });
}

// Filter plants based on current state
function filterPlants() {
  const query = state.query.toLowerCase();
  const system = state.system.toLowerCase();

  state.filteredPlants = state.plants.filter(plant => {
    // Filter by system if selected
    if (system && !plant.systems.some(s => s.toLowerCase().includes(system))) {
      return false;
    }

    // Filter by query
    if (!query) return true;

    if (state.mode === 'disease') {
      return plant.diseases.some(d => d.toLowerCase().includes(query)) ||
             plant.systems.some(s => s.toLowerCase().includes(query));
    } else {
      return plant.name.toLowerCase().includes(query) ||
             plant.latinName.toLowerCase().includes(query) ||
             plant.partsUsed.toLowerCase().includes(query);
    }
  });
}

// Render the plant grid
function render() {
  elements.grid.innerHTML = '';

  if (state.filteredPlants.length === 0) {
    elements.empty.hidden = false;
    return;
  }

  elements.empty.hidden = true;

  state.filteredPlants.forEach(plant => {
    const isFavorite = state.favorites.has(plant.name);
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <h3>${plant.name}</h3>
      <div class="latin">${plant.latinName}</div>
      <div class="chips">
        ${plant.diseases.slice(0, 4).map(d => `<span class="chip">${d}</span>`).join('')}
      </div>
      <footer>
        <div class="small">
          ${plant.systems.map(s => `<span class="chip">${s}</span>`).join('')}
        </div>
        <div class="actions">
          <button class="pill" data-view="${plant.name}">Details</button>
          <button class="pill secondary fav ${isFavorite ? 'active' : ''}" 
                  data-fav="${plant.name}" 
                  aria-label="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}">
            <i class="fas fa-star"></i>
          </button>
        </div>
      </footer>
    `;
    elements.grid.appendChild(card);
  });
}

// Open plant details dialog
function openPlantDetails(plantName) {
  const plant = state.plants.find(p => p.name === plantName);
  if (!plant) return;

  elements.dialogTitle.textContent = plant.name;
  elements.dialogLatin.textContent = plant.latinName;
  elements.plantImage.src = plant.image || 'images/default-plant.jpg';
  elements.plantImage.alt = plant.name;

  elements.plantDetails.innerHTML = `
    <div>
      <h4>Used For</h4>
      <p>${plant.diseases.map(d => `<span class="chip">${d}</span>`).join(' ')}</p>
    </div>
    <div>
      <h4>Parts Used</h4>
      <p>${plant.partsUsed}</p>
    </div>
    <div>
      <h4>Preparation</h4>
      <p>${plant.preparation}</p>
    </div>
    <div>
      <h4>Dosage</h4>
      <p>${plant.dosage}</p>
    </div>
    <div>
      <h4>Body Systems</h4>
      <p>${plant.systems.map(s => `<span class="chip">${s}</span>`).join(' ')}</p>
    </div>
    <div>
      <h4>Safety Notes</h4>
      <p style="color: var(--danger)">${plant.safety}</p>
    </div>
  `;

  elements.dialog.showModal();
}

// Toggle favorite status
function toggleFavorite(plantName) {
  if (state.favorites.has(plantName)) {
    state.favorites.delete(plantName);
  } else {
    state.favorites.add(plantName);
  }
  localStorage.setItem(`ayurFavorites_${localStorage.getItem('loggedInUser')}`, JSON.stringify([...state.favorites]));
  render();
}

// Set search mode
function setMode(mode) {
  state.mode = mode;
  elements.tabDisease.setAttribute('aria-selected', mode === 'disease');
  elements.tabPlant.setAttribute('aria-selected', mode === 'plant');
  elements.searchInput.placeholder = mode === 'disease' 
    ? 'Search disease (e.g., diabetes, cold, anxiety)…' 
    : 'Search plant (e.g., Tulsi, Ashwagandha, Neem)…';
  filterPlants();
  render();
}

// Voice search
function toggleVoiceSearch() {
  if (!('webkitSpeechRecognition' in window)) {
    alert('Voice search is not supported in your browser. Try Chrome or Edge.');
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;

  if (elements.voiceBtn.classList.contains('active')) {
    recognition.stop();
    elements.voiceBtn.classList.remove('active');
    return;
  }

  recognition.start();
  elements.voiceBtn.classList.add('active');

  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    elements.searchInput.value = transcript;
    state.query = transcript;
    filterPlants();
    render();
    elements.voiceBtn.classList.remove('active');
  };

  recognition.onerror = (e) => {
    console.error('Voice recognition error', e.error);
    elements.voiceBtn.classList.remove('active');
  };

  recognition.onend = () => {
    elements.voiceBtn.classList.remove('active');
  };
}

// Theme management
function toggleTheme() {
  state.darkMode = !state.darkMode;
  localStorage.setItem('darkMode', state.darkMode);
  applyTheme();
}

function applyTheme() {
  if (state.darkMode) {
    document.documentElement.setAttribute('data-theme', 'dark');
    elements.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    document.documentElement.removeAttribute('data-theme');
    elements.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', init);