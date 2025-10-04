// Global Variables
let currentPage = 'home';
let isDarkMode = false;
let isMobileMenuOpen = false;
let currentVisaTab = 'visa-free';
let searchFilters = {
    dishes: '',
    phrases: '',
    phrasesCategory: 'all',
    countries: ''
};

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLucide();
    loadTheme();
    renderHomePage();
    renderDiscoverPage();
    renderCuisinePage();
    renderPhrasebookPage();
    renderVisaPage();
    updateNavigation();
});

// Initialize Lucide icons
function initializeLucide() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Theme Management
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.setAttribute('data-lucide', isDarkMode ? 'sun' : 'moon');
        initializeLucide();
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        isDarkMode = true;
        document.documentElement.classList.add('dark');
        const themeIcon = document.getElementById('theme-icon');
        if (themeIcon) {
            themeIcon.setAttribute('data-lucide', 'sun');
        }
    }
    initializeLucide();
}

// Navigation Management
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(`page-${pageName}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update current page
    currentPage = pageName;
    updateNavigation();
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
        toggleMobileMenu();
    }
}

function updateNavigation() {
    // Update desktop navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const page = btn.getAttribute('data-page');
        if (page === currentPage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update mobile navigation
    document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
        const page = btn.getAttribute('data-page');
        if (page === currentPage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    const mobileNav = document.getElementById('mobile-nav');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    
    if (mobileNav) {
        if (isMobileMenuOpen) {
            mobileNav.classList.remove('hidden');
            mobileMenuIcon.setAttribute('data-lucide', 'x');
        } else {
            mobileNav.classList.add('hidden');
            mobileMenuIcon.setAttribute('data-lucide', 'menu');
        }
        initializeLucide();
    }
}

// Home Page Rendering
function renderHomePage() {
    const features = [
        {
            title: 'Discover Regions',
            description: 'Explore beautiful regions and historic sites of Azerbaijan',
            icon: 'map-pin',
            color: 'from-blue-500 to-cyan-500',
            action: () => showPage('discover')
        },
        {
            title: 'Authentic Cuisine',
            description: 'Taste traditional Azerbaijani dishes and learn recipes',
            icon: 'utensils',
            color: 'from-orange-500 to-red-500',
            action: () => showPage('cuisine')
        },
        {
            title: 'Travel Phrasebook',
            description: 'Essential phrases and words for your journey',
            icon: 'book-open',
            color: 'from-green-500 to-emerald-500',
            action: () => showPage('phrasebook')
        },
        {
            title: 'Visa Information',
            description: 'Visa requirements and travel procedures to Azerbaijan',
            icon: 'plane',
            color: 'from-purple-500 to-pink-500',
            action: () => showPage('visa')
        }
    ];

    const featureCardsContainer = document.getElementById('feature-cards');
    if (featureCardsContainer) {
        featureCardsContainer.innerHTML = features.map(feature => `
            <div class="feature-card" onclick="showPage('${feature.title.toLowerCase().split(' ')[0] === 'discover' ? 'discover' : feature.title.toLowerCase().split(' ')[0] === 'authentic' ? 'cuisine' : feature.title.toLowerCase().split(' ')[0] === 'travel' ? 'phrasebook' : 'visa'}')">
                <div class="feature-icon bg-gradient-to-br ${feature.color}">
                    <i data-lucide="${feature.icon}" class="w-10 h-10 text-white"></i>
                </div>
                <h3 class="text-xl font-bold mb-2">${feature.title}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">${feature.description}</p>
                <button class="btn btn-secondary w-full">
                    Explore More
                    <i data-lucide="arrow-right" class="ml-2 w-4 h-4"></i>
                </button>
            </div>
        `).join('');
        initializeLucide();
    }
}

// Discover Page Rendering
function renderDiscoverPage() {
    const regionsGrid = document.getElementById('regions-grid');
    if (regionsGrid) {
        regionsGrid.innerHTML = regions.map((region, index) => `
            <div class="region-card">
                <div class="region-image">
                    <img src="${region.image}" alt="${region.name}" loading="lazy">
                    <div class="region-overlay"></div>
                    <div class="region-info">
                        <h3 class="text-2xl font-bold mb-2">${region.name}</h3>
                        <p class="text-sm opacity-90">${region.description}</p>
                    </div>
                    <div class="region-badge">
                        <i data-lucide="camera" class="w-3 h-3"></i>
                        ${region.places.length} attractions
                    </div>
                    <div class="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        ${index + 1}
                    </div>
                </div>
                <div class="p-6">
                    <div class="mb-6">
                        <h4 class="font-bold mb-4 text-gray-500 text-sm uppercase tracking-wider flex items-center">
                            <i data-lucide="star" class="w-4 h-4 mr-2"></i>
                            Must-Visit Places
                        </h4>
                        <div class="space-y-3">
                            ${region.places.slice(0, 3).map((place, placeIndex) => `
                                <div class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                        ${placeIndex + 1}
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <div class="font-medium truncate">${place.name}</div>
                                        <div class="text-sm text-gray-500 truncate">${place.description}</div>
                                    </div>
                                </div>
                            `).join('')}
                            ${region.places.length > 3 ? `
                                <div class="flex items-center space-x-3 p-2 text-gray-500">
                                    <div class="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-xs flex-shrink-0">
                                        +${region.places.length - 3}
                                    </div>
                                    <span class="text-sm">and ${region.places.length - 3} more places...</span>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                    <button class="btn btn-primary w-full" onclick="showRegionDetail('${region.id}')">
                        Explore ${region.name}
                        <i data-lucide="arrow-right" class="ml-2 w-4 h-4"></i>
                    </button>
                </div>
            </div>
        `).join('');
        initializeLucide();
    }
}

function showRegionDetail(regionId) {
    const region = regions.find(r => r.id === regionId);
    if (!region) return;
    
    alert(`${region.name}\n\n${region.description}\n\nPlaces to visit:\n${region.places.map(p => `• ${p.name}: ${p.description}`).join('\n')}`);
}

// Cuisine Page Rendering
function renderCuisinePage() {
    const dishesGrid = document.getElementById('dishes-grid');
    if (dishesGrid) {
        renderDishes(gastronomy);
    }
}

function renderDishes(dishes) {
    const dishesGrid = document.getElementById('dishes-grid');
    if (!dishesGrid) return;
    
    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Easy': return 'from-green-500 to-emerald-500';
            case 'Medium': return 'from-yellow-500 to-orange-500';
            case 'Hard': return 'from-red-500 to-pink-500';
            default: return 'from-blue-500 to-cyan-500';
        }
    };

    dishesGrid.innerHTML = dishes.map(dish => `
        <div class="dish-card" onclick="openDishModal('${dish.id}')">
            <div class="dish-image">
                <img src="${dish.image}" alt="${dish.name}" loading="lazy">
                <div class="dish-badges">
                    <div class="dish-badge">
                        <i data-lucide="clock" class="w-3 h-3"></i>
                        ${dish.cookingTime}
                    </div>
                    <div class="dish-badge bg-gradient-to-r ${getDifficultyColor(dish.difficulty)}">
                        <i data-lucide="award" class="w-3 h-3"></i>
                        ${dish.difficulty}
                    </div>
                </div>
                <div class="region-overlay"></div>
                <div class="region-info">
                    <h3 class="text-xl font-bold mb-1">${dish.name}</h3>
                    <p class="text-sm opacity-90">${dish.region}</p>
                </div>
            </div>
            <div class="p-6">
                <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">${dish.description}</p>
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4 text-sm text-gray-500">
                        <div class="flex items-center">
                            <i data-lucide="utensils" class="w-4 h-4 mr-1"></i>
                            ${dish.ingredients.length} ingredients
                        </div>
                    </div>
                    <button class="btn btn-secondary btn-sm">
                        View Recipe
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    initializeLucide();
}

function searchDishes(query) {
    searchFilters.dishes = query.toLowerCase();
    const filteredDishes = gastronomy.filter(dish =>
        dish.name.toLowerCase().includes(searchFilters.dishes) ||
        dish.description.toLowerCase().includes(searchFilters.dishes)
    );
    renderDishes(filteredDishes);
}

function openDishModal(dishId) {
    const dish = gastronomy.find(d => d.id === dishId);
    if (!dish) return;
    
    const modal = document.getElementById('cuisine-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    if (modal && modalTitle && modalBody) {
        modalTitle.textContent = dish.name;
        modalBody.innerHTML = `
            <div class="mb-8 rounded-2xl overflow-hidden shadow-2xl">
                <img src="${dish.image}" alt="${dish.name}" class="w-full h-80 object-cover">
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-xl text-center">
                    <i data-lucide="clock" class="w-6 h-6 mx-auto mb-2 text-blue-600"></i>
                    <div class="font-semibold text-sm text-blue-700 dark:text-blue-300">Cooking Time</div>
                    <div class="text-xs text-gray-600 dark:text-gray-300">${dish.cookingTime}</div>
                </div>
                <div class="bg-green-50 dark:bg-green-950/30 p-4 rounded-xl text-center">
                    <i data-lucide="award" class="w-6 h-6 mx-auto mb-2 text-green-600"></i>
                    <div class="font-semibold text-sm text-green-700 dark:text-green-300">Difficulty</div>
                    <div class="text-xs text-gray-600 dark:text-gray-300">${dish.difficulty}</div>
                </div>
                <div class="bg-orange-50 dark:bg-orange-950/30 p-4 rounded-xl text-center">
                    <i data-lucide="map-pin" class="w-6 h-6 mx-auto mb-2 text-orange-600"></i>
                    <div class="font-semibold text-sm text-orange-700 dark:text-orange-300">Origin</div>
                    <div class="text-xs text-gray-600 dark:text-gray-300">${dish.region}</div>
                </div>
                <div class="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-xl text-center">
                    <i data-lucide="utensils" class="w-6 h-6 mx-auto mb-2 text-purple-600"></i>
                    <div class="font-semibold text-sm text-purple-700 dark:text-purple-300">Ingredients</div>
                    <div class="text-xs text-gray-600 dark:text-gray-300">${dish.ingredients.length} items</div>
                </div>
            </div>
            
            <hr class="my-8 border-gray-200 dark:border-gray-700">
            
            <div class="mb-8">
                <h4 class="font-bold text-xl mb-4 flex items-center">
                    <i data-lucide="utensils" class="w-5 h-5 mr-2 text-blue-600"></i>
                    Ingredients
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    ${dish.ingredients.map(ingredient => `
                        <div class="flex items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                            <div class="w-3 h-3 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                            <span class="font-medium">${ingredient}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <hr class="my-8 border-gray-200 dark:border-gray-700">
            
            <div>
                <h4 class="font-bold text-xl mb-4 flex items-center">
                    <i data-lucide="chef-hat" class="w-5 h-5 mr-2 text-blue-600"></i>
                    Cooking Instructions
                </h4>
                <div class="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl">
                    <p class="text-gray-600 dark:text-gray-300 leading-relaxed">${dish.recipe}</p>
                </div>
            </div>
        `;
        
        modal.classList.remove('hidden');
        initializeLucide();
    }
}

function closeModal() {
    const modal = document.getElementById('cuisine-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Phrasebook Page Rendering
function renderPhrasebookPage() {
    renderPhraseCategories();
    renderPhrases();
}

function renderPhraseCategories() {
    const categories = ['all', ...dictionary.map(cat => cat.category)];
    const categoriesContainer = document.getElementById('phrase-categories');
    
    if (categoriesContainer) {
        categoriesContainer.innerHTML = categories.map(category => `
            <button 
                onclick="filterPhrasesByCategory('${category}')" 
                class="phrase-category-btn ${searchFilters.phrasesCategory === category ? 'active' : ''}"
                data-category="${category}"
            >
                ${getCategoryEmoji(category)} ${category === 'all' ? 'All Categories' : category}
            </button>
        `).join('');
    }
}

function getCategoryEmoji(category) {
    switch (category) {
        case 'Greetings': return '👋';
        case 'Directions': return '🗺️';
        case 'At the Restaurant': return '🍽️';
        case 'Numbers': return '🔢';
        default: return '💬';
    }
}

function renderPhrases() {
    const allPhrases = dictionary.flatMap(category => 
        category.phrases.map(phrase => ({ ...phrase, category: category.category }))
    );
    
    const filteredPhrases = allPhrases.filter(phrase => {
        const matchesSearch = phrase.az.toLowerCase().includes(searchFilters.phrases.toLowerCase()) ||
                             phrase.en.toLowerCase().includes(searchFilters.phrases.toLowerCase());
        const matchesCategory = searchFilters.phrasesCategory === 'all' || phrase.category === searchFilters.phrasesCategory;
        return matchesSearch && matchesCategory;
    });
    
    const phrasesGrid = document.getElementById('phrases-grid');
    if (phrasesGrid) {
        if (filteredPhrases.length === 0) {
            phrasesGrid.innerHTML = `
                <div class="card text-center py-16">
                    <i data-lucide="book-open" class="w-16 h-16 mx-auto mb-4 text-gray-400"></i>
                    <h3 class="text-xl font-semibold mb-2">No phrases found</h3>
                    <p class="text-gray-500">Try adjusting your search terms or select a different category</p>
                </div>
            `;
        } else {
            phrasesGrid.innerHTML = filteredPhrases.map(phrase => `
                <div class="phrase-card">
                    <div class="flex items-center justify-between mb-6">
                        <div class="flex items-center space-x-3">
                            <div class="phrase-category-icon ${getCategoryColorClass(phrase.category)}">
                                <span class="text-lg">${getCategoryEmoji(phrase.category)}</span>
                            </div>
                            <span class="text-sm font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">${phrase.category}</span>
                        </div>
                        <button onclick="playPronunciation('${phrase.az}')" class="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <i data-lucide="volume-2" class="w-5 h-5 text-blue-600"></i>
                        </button>
                    </div>
                    
                    <div class="grid md:grid-cols-3 gap-6">
                        <div class="space-y-2">
                            <div class="flex items-center space-x-2">
                                <i data-lucide="globe" class="w-4 h-4 text-red-500"></i>
                                <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Azerbaijani</h4>
                            </div>
                            <p class="text-2xl font-bold text-red-600">${phrase.az}</p>
                        </div>
                        
                        <div class="space-y-2">
                            <div class="flex items-center space-x-2">
                                <i data-lucide="message-circle" class="w-4 h-4 text-blue-500"></i>
                                <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wide">English</h4>
                            </div>
                            <p class="text-2xl font-semibold text-blue-600">${phrase.en}</p>
                        </div>
                        
                        <div class="space-y-2">
                            <div class="flex items-center space-x-2">
                                <i data-lucide="volume-2" class="w-4 h-4 text-green-500"></i>
                                <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Pronunciation</h4>
                            </div>
                            <p class="text-2xl font-mono text-green-600 bg-green-50 dark:bg-green-950/30 px-3 py-1 rounded-lg">
                                [${phrase.pronunciation}]
                            </p>
                        </div>
                    </div>
                </div>
            `).join('');
        }
        initializeLucide();
    }
}

function getCategoryColorClass(category) {
    switch (category) {
        case 'Greetings': return 'bg-gradient-to-br from-blue-500 to-cyan-500';
        case 'Directions': return 'bg-gradient-to-br from-green-500 to-emerald-500';
        case 'At the Restaurant': return 'bg-gradient-to-br from-orange-500 to-red-500';
        case 'Numbers': return 'bg-gradient-to-br from-purple-500 to-pink-500';
        default: return 'bg-gradient-to-br from-gray-500 to-gray-600';
    }
}

function searchPhrases(query) {
    searchFilters.phrases = query;
    renderPhrases();
}

function filterPhrasesByCategory(category) {
    searchFilters.phrasesCategory = category;
    
    // Update category buttons
    document.querySelectorAll('.phrase-category-btn').forEach(btn => {
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    renderPhrases();
}

function playPronunciation(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'az-AZ';
        speechSynthesis.speak(utterance);
    }
}

// Visa Page Rendering
function renderVisaPage() {
    renderVisaInfoGrid();
    showVisaTab('visa-free');
}

function renderVisaInfoGrid() {
    const visaInfoGrid = document.getElementById('visa-info-grid');
    if (visaInfoGrid) {
        visaInfoGrid.innerHTML = `
            <!-- Requirements -->
            <div class="card">
                <div class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-t-lg">
                    <h3 class="flex items-center space-x-3 text-xl font-bold">
                        <i data-lucide="file-text" class="w-6 h-6"></i>
                        <span>Visa Requirements</span>
                    </h3>
                </div>
                <div class="p-6">
                    <div class="space-y-3">
                        ${visaInfo.requirements.map((requirement, index) => `
                            <div class="flex items-start p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <div class="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                    <span class="text-white text-xs font-bold">${index + 1}</span>
                                </div>
                                <span class="text-sm font-medium leading-relaxed">${requirement}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Processing Time -->
            <div class="card">
                <div class="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-t-lg">
                    <h3 class="flex items-center space-x-3 text-xl font-bold">
                        <i data-lucide="clock" class="w-6 h-6"></i>
                        <span>Processing Time</span>
                    </h3>
                </div>
                <div class="p-6">
                    <div class="space-y-4">
                        <div class="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl">
                            <div>
                                <div class="font-semibold">Standard</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">Regular processing</div>
                            </div>
                            <span class="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                                ${visaInfo.processing_time.standard}
                            </span>
                        </div>
                        <div class="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-xl">
                            <div>
                                <div class="font-semibold">Urgent</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">Expedited processing</div>
                            </div>
                            <span class="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                                ${visaInfo.processing_time.urgent}
                            </span>
                        </div>
                        <div class="flex items-center justify-between p-4 bg-green-50 dark:bg-green-950/30 rounded-xl">
                            <div>
                                <div class="font-semibold">Express</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">Same-day service</div>
                            </div>
                            <span class="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                                ${visaInfo.processing_time.express}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Fees -->
            <div class="card">
                <div class="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-t-lg">
                    <h3 class="flex items-center space-x-3 text-xl font-bold">
                        <i data-lucide="credit-card" class="w-6 h-6"></i>
                        <span>Visa Fees</span>
                    </h3>
                </div>
                <div class="p-6">
                    <div class="space-y-4">
                        <div class="flex items-center justify-between p-4 bg-green-50 dark:bg-green-950/30 rounded-xl">
                            <div>
                                <div class="font-semibold">Single Entry</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">30-day validity</div>
                            </div>
                            <div class="text-lg font-bold text-green-600">${visaInfo.fees.single_entry}</div>
                        </div>
                        <div class="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl">
                            <div>
                                <div class="font-semibold">Multiple Entry</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">90-day validity</div>
                            </div>
                            <div class="text-lg font-bold text-blue-600">${visaInfo.fees.multiple_entry}</div>
                        </div>
                        <div class="flex items-center justify-between p-4 bg-orange-50 dark:bg-orange-950/30 rounded-xl">
                            <div>
                                <div class="font-semibold">Urgent Processing</div>
                                <div class="text-sm text-gray-600 dark:text-gray-400">Additional fee</div>
                            </div>
                            <div class="text-lg font-bold text-orange-600">${visaInfo.fees.urgent_processing}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        initializeLucide();
    }
}

function showVisaTab(tabName) {
    currentVisaTab = tabName;
    
    // Update tab buttons
    document.querySelectorAll('.visa-tab-btn').forEach(btn => {
        if (btn.getAttribute('data-tab') === tabName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Render content
    const visaContent = document.getElementById('visa-content');
    if (visaContent) {
        let countries, title, description, iconName, colorClass;
        
        switch (tabName) {
            case 'visa-free':
                countries = visaInfo.countries.visa_free;
                title = 'Visa-Free Entry';
                description = 'Citizens of these countries can enter Azerbaijan without a visa';
                iconName = 'check-circle';
                colorClass = 'from-green-500 to-emerald-500';
                break;
            case 'visa-on-arrival':
                countries = visaInfo.countries.visa_on_arrival;
                title = 'Visa on Arrival';
                description = 'Citizens of these countries can obtain a visa upon arrival in Azerbaijan';
                iconName = 'clock';
                colorClass = 'from-yellow-500 to-orange-500';
                break;
            case 'e-visa':
                countries = visaInfo.countries.e_visa;
                title = 'Electronic Visa';
                description = 'Citizens of these countries can apply for an electronic visa online';
                iconName = 'globe';
                colorClass = 'from-blue-500 to-cyan-500';
                break;
        }
        
        const filteredCountries = searchFilters.countries 
            ? countries.filter(country => country.toLowerCase().includes(searchFilters.countries.toLowerCase()))
            : countries;
        
        visaContent.innerHTML = `
            <div class="card">
                <div class="bg-gradient-to-r ${colorClass} text-white p-6 rounded-t-lg">
                    <h2 class="flex items-center space-x-3 text-2xl font-bold">
                        <i data-lucide="${iconName}" class="w-8 h-8"></i>
                        <div>
                            <div>${title}</div>
                            <div class="text-sm font-normal opacity-90">${description}</div>
                        </div>
                    </h2>
                </div>
                <div class="p-8">
                    ${filteredCountries.length === 0 ? `
                        <div class="text-center py-12">
                            <i data-lucide="globe" class="w-16 h-16 mx-auto mb-4 text-gray-400"></i>
                            <p class="text-gray-500 text-lg">No countries found matching your search</p>
                        </div>
                    ` : `
                        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            ${filteredCountries.map(country => `
                                <div class="country-card">
                                    <i data-lucide="${iconName}" class="w-5 h-5 ${getVisaIconColor(tabName)} flex-shrink-0"></i>
                                    <span class="font-medium ${getVisaTextColor(tabName)}">${country}</span>
                                </div>
                            `).join('')}
                        </div>
                    `}
                </div>
            </div>
        `;
        initializeLucide();
    }
}

function getVisaIconColor(tabName) {
    switch (tabName) {
        case 'visa-free': return 'text-green-500';
        case 'visa-on-arrival': return 'text-yellow-500';
        case 'e-visa': return 'text-blue-500';
        default: return 'text-gray-500';
    }
}

function getVisaTextColor(tabName) {
    switch (tabName) {
        case 'visa-free': return 'text-green-700 dark:text-green-300';
        case 'visa-on-arrival': return 'text-yellow-700 dark:text-yellow-300';
        case 'e-visa': return 'text-blue-700 dark:text-blue-300';
        default: return 'text-gray-700 dark:text-gray-300';
    }
}

function searchCountries(query) {
    searchFilters.countries = query;
    showVisaTab(currentVisaTab);
}

// Add CSS for additional components
const additionalCSS = `
.phrase-category-btn {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    border: 2px solid var(--border);
    background: var(--background);
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
}

.phrase-category-btn:hover {
    border-color: var(--primary);
    color: var(--text);
}

.phrase-category-btn.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
}

.btn-sm {
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
}
`;

// Add the additional CSS to the document
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalCSS;
document.head.appendChild(styleSheet);
