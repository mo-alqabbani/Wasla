// Global variables
let currentLanguage = 'ar';
let currentUser = null;
let routes = [
    {
        id: 1,
        from: 'مدينة نصر',
        to: 'وسط البلد',
        type: 'metro',
        fare: 7,
        time: 25,
        votes: 15,
        notes: 'خط المترو الأول - محطة كوبري القبة'
    },
    {
        id: 2,
        from: 'المعادي',
        to: 'حلوان',
        type: 'metro',
        fare: 5,
        time: 20,
        votes: 12,
        notes: 'خط المترو الأول مباشرة'
    },
    {
        id: 3,
        from: 'الجيزة',
        to: '6 أكتوبر',
        type: 'microbus',
        fare: 15,
        time: 45,
        votes: 8,
        notes: 'من موقف الجيزة الرئيسي'
    }
];

// Language translations
const translations = {
    ar: {
        countryTitle: 'اختر الدولة للبحث عن وسائل المواصلات',
        egyptOption: 'مصر',
        egyptDesc: 'شبكة مواصلات متكاملة',
        otherOption: 'دول أخرى',
        otherDesc: 'قريباً',
        appTitle: 'وصلة',
        homeNav: 'الرئيسية',
        stationsNav: 'المحطات الرئيسية',
        routesNav: 'المحطات المحفوظة',
        searchNav: 'البحث اليدوي',
        chatNav: 'المساعد الذكي',
        loginBtn: 'تسجيل دخول',
        registerBtn: 'إنشاء حساب',
        currencyLabel: 'نقطة',
        profileBtn: 'الملف الشخصي',
        logoutBtn: 'تسجيل خروج',
        heroTitle: 'تنقل في مصر بسهولة',
        heroDesc: 'دليلك الشامل للمواصلات في مصر - خطوط مترو، أتوبيسات، ميكروباصات - كلها في منصة ذكية واحدة',
        askAssistantBtn: '🤖 اسأل المساعد الذكي',
        manualSearchBtn: '🔍 ابحث عن الطريق',
        routesFeature: 'طرق المترو',
        routesDesc: 'اعثر على طرق مترو مصر وساعد في تحسين الشبكة',
        stationsFeature: 'المحطات المهمة',
        stationsDesc: 'استكشف المحطات الرئيسية مثل رمسيس ومحيط وأسيوط',
        searchFeature: 'البحث اليدوي',
        searchDesc: 'ابحث عن الطريق بدءاً من عنوان الانطلاق',
        chatFeature: 'المساعد الذكي',
        chatDesc: 'اسأل بلغة عادية - "أريد الذهاب من مدينة نصر إلى مدينة أخرى"',
        exploreRoutes: 'استكشف',
        exploreStations: 'استكشف',
        startSearch: 'استكشف',
        startChat: 'استكشف',
        networkTitle: 'شبكة المواصلات',
        mainStations: 'المحطات الرئيسية',
        microbusLines: 'خطوط الميكروباص',
        busLines: 'خطوط الأتوبيس',
        metroLines: 'خطوط المترو',
        chatTitle: 'المساعد الذكي',
        chatSubtitle: 'اسأل عن أي طريق مواصلات في مصر',
        welcomeMsg: 'مرحباً! اسألني عن أي طريق مواصلات في مصر. مثال: "أريد الذهاب من مدينة نصر إلى السادس من أكتوبر"',
        sendBtn: 'إرسال',
        searchTitle: 'البحث اليدوي',
        searchSubtitle: 'ابحث عن أفضل الطرق بين أي نقطتين',
        fromLabel: 'من',
        toLabel: 'إلى',
        searchRouteBtn: 'ابحث عن الطريق',
        resultsTitle: 'نتائج البحث',
        stationsTitle: 'المحطات الرئيسية',
        stationsSubtitle: 'اكتشف أهم محطات المواصلات في مصر',
        routesTitle: 'إدارة الطرق',
        routesSubtitle: 'شارك واكتشف طرق جديدة',
        addRouteBtn: 'إضافة طريق جديد',
        footerDesc: 'دليلك الشامل للمواصلات في مصر',
        aboutLink: 'عن وصلة',
        helpLink: 'المساعدة',
        privacyLink: 'الخصوصية',
        loginTitle: 'تسجيل الدخول',
        registerTitle: 'إنشاء حساب جديد',
        loginSubmit: 'دخول',
        registerSubmit: 'إنشاء الحساب',
        switchToRegister: 'ليس لديك حساب؟',
        switchToLogin: 'لديك حساب بالفعل؟',
        addRouteTitle: 'إضافة طريق جديد',
        routeFromLabel: 'من',
        routeToLabel: 'إلى',
        transportTypeLabel: 'نوع المواصلة',
        routeFareLabel: 'التكلفة',
        routeTimeLabel: 'مدة الرحلة (دقيقة)',
        routeNotesLabel: 'ملاحظات إضافية',
        submitRoute: 'إضافة الطريق (+10 نقاط)'
    },
    en: {
        countryTitle: 'Choose a country to explore transportation methods',
        egyptOption: 'Egypt',
        egyptDesc: 'Comprehensive transport network',
        otherOption: 'Other Countries',
        otherDesc: 'Coming soon',
        appTitle: 'Wasla',
        homeNav: 'Home',
        stationsNav: 'Main Stations',
        routesNav: 'Saved Stations',
        searchNav: 'Manual Search',
        chatNav: 'AI Assistant',
        loginBtn: 'Login',
        registerBtn: 'Sign Up',
        currencyLabel: 'points',
        profileBtn: 'Profile',
        logoutBtn: 'Logout',
        heroTitle: 'Navigate Egypt with Ease',
        heroDesc: 'Your comprehensive guide to transportation in Egypt - metro lines, buses, microbuses - all in one smart platform',
        askAssistantBtn: '🤖 Ask AI Assistant',
        manualSearchBtn: '🔍 Search Routes',
        routesFeature: 'Metro Routes',
        routesDesc: 'Find Egypt metro routes and help improve the network',
        stationsFeature: 'Important Stations',
        stationsDesc: 'Explore main stations like Ramses, Mohit and Assiut',
        searchFeature: 'Manual Search',
        searchDesc: 'Search for routes starting from your departure address',
        chatFeature: 'AI Assistant',
        chatDesc: 'Ask in natural language - "I want to go from Nasr City to another city"',
        exploreRoutes: 'Explore',
        exploreStations: 'Explore',
        startSearch: 'Explore',
        startChat: 'Explore',
        networkTitle: 'Transportation Network',
        mainStations: 'Main Stations',
        microbusLines: 'Microbus Lines',
        busLines: 'Bus Lines',
        metroLines: 'Metro Lines',
        chatTitle: 'AI Assistant',
        chatSubtitle: 'Ask about any transportation route in Egypt',
        welcomeMsg: 'Hello! Ask me about any transportation route in Egypt. Example: "I want to go from Nasr City to 6th of October"',
        sendBtn: 'Send',
        searchTitle: 'Manual Search',
        searchSubtitle: 'Search for the best routes between any two points',
        fromLabel: 'From',
        toLabel: 'To',
        searchRouteBtn: 'Search Route',
        resultsTitle: 'Search Results',
        stationsTitle: 'Main Stations',
        stationsSubtitle: 'Discover the most important transportation stations in Egypt',
        routesTitle: 'Route Management',
        routesSubtitle: 'Share and discover new routes',
        addRouteBtn: 'Add New Route',
        footerDesc: 'Your comprehensive guide to transportation in Egypt',
        aboutLink: 'About Wasla',
        helpLink: 'Help',
        privacyLink: 'Privacy',
        loginTitle: 'Login',
        registerTitle: 'Create New Account',
        loginSubmit: 'Login',
        registerSubmit: 'Create Account',
        switchToRegister: "Don't have an account?",
        switchToLogin: 'Already have an account?',
        addRouteTitle: 'Add New Route',
        routeFromLabel: 'From',
        routeToLabel: 'To',
        transportTypeLabel: 'Transport Type',
        routeFareLabel: 'Fare',
        routeTimeLabel: 'Journey Time (minutes)',
        routeNotesLabel: 'Additional Notes',
        submitRoute: 'Add Route (+10 points)'
    }
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    updateLanguage();
    loadRoutes();
    
    // Auto-focus chat input
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Load user session if exists
    loadUserSession();
});

// Country selection
function selectCountry(country) {
    if (country === 'egypt') {
        document.getElementById('countryModal').classList.remove('active');
        document.getElementById('mainApp').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('mainApp').style.opacity = '1';
        }, 100);
    } else {
        alert(currentLanguage === 'ar' ? 'قريباً...' : 'Coming soon...');
    }
}

// Language toggle
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    updateLanguage();
}

function updateLanguage() {
    const isArabic = currentLanguage === 'ar';
    
    // Update HTML attributes
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.body.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
    
    // Update language button
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.textContent = isArabic ? 'English' : 'العربية';
    }
    
    // Update all translatable elements
    Object.keys(translations[currentLanguage]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });

    // Update placeholders
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.placeholder = isArabic 
            ? 'اكتب سؤالك هنا...'
            : 'Type your question here...';
    }

    const fromInput = document.getElementById('fromInput');
    if (fromInput) {
        fromInput.placeholder = isArabic ? 'نقطة البداية' : 'Starting point';
    }

    const toInput = document.getElementById('toInput');
    if (toInput) {
        toInput.placeholder = isArabic ? 'نقطة الوصول' : 'Destination';
    }

    const routeSearch = document.getElementById('routeSearch');
    if (routeSearch) {
        routeSearch.placeholder = isArabic ? 'ابحث في الطرق...' : 'Search routes...';
    }
}

// Navigation
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionName + 'Section').classList.add('active');
    
    // Update navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (sectionName === 'home') {
        document.getElementById('homeNav').classList.add('active');
    } else if (sectionName === 'stations') {
        document.getElementById('stationsNav').classList.add('active');
    } else if (sectionName === 'routes') {
        document.getElementById('routesNav').classList.add('active');
    } else if (sectionName === 'search') {
        document.getElementById('searchNav').classList.add('active');
    } else if (sectionName === 'chat') {
        document.getElementById('chatNav').classList.add('active');
    }
}

// Chat functionality
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message to chat
    addMessageToChat(message, 'user');
    
    // Clear input
    input.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const response = generateAIResponse(message);
        addMessageToChat(response, 'bot');
    }, 1000);
}

function addMessageToChat(message, type) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = type === 'bot' ? '🤖' : '👤';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    content.innerHTML = `<p>${message}</p>`;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateAIResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Simple AI response simulation
    if (message.includes('نصر') || message.includes('nasr')) {
        if (message.includes('أكتوبر') || message.includes('october')) {
            return currentLanguage === 'ar' 
                ? 'يمكنك الذهاب من مدينة نصر إلى السادس من أكتوبر عبر:\n\n1️⃣ مترو خط 1 إلى رمسيس ثم ميكروباص (45 دقيقة - 22 جنيه)\n2️⃣ ميكروباص مباشر من موقف النزهة (60 دقيقة - 20 جنيه)\n3️⃣ أوبر/كريم (40 دقيقة - 80-120 جنيه)'
                : 'You can go from Nasr City to 6th of October via:\n\n1️⃣ Metro Line 1 to Ramses then microbus (45 min - 22 EGP)\n2️⃣ Direct microbus from Nozha station (60 min - 20 EGP)\n3️⃣ Uber/Careem (40 min - 80-120 EGP)';
        }
    }
    
    if (message.includes('مترو') || message.includes('metro')) {
        return currentLanguage === 'ar' 
            ? 'شبكة مترو القاهرة تضم 3 خطوط رئيسية:\n\n🚇 الخط الأول: حلوان - المرج\n🚇 الخط الثاني: شبرا الخيمة - المنيب\n🚇 الخط الثالث: عدلي منصور - العتبة\n\nسعر التذكرة: 6-12 جنيه'
            : 'Cairo Metro network has 3 main lines:\n\n🚇 Line 1: Helwan - El Marg\n🚇 Line 2: Shubra El Kheima - El Monib\n🚇 Line 3: Adly Mansour - Attaba\n\nTicket price: 6-12 EGP';
    }
    
    return currentLanguage === 'ar' 
        ? 'شكراً لسؤالك! يمكنني مساعدتك في العثور على أفضل طرق المواصلات. حاول أن تكون أكثر تحديداً مع نقاط البداية والوصول.'
        : 'Thanks for your question! I can help you find the best transportation routes. Try to be more specific with your starting and destination points.';
}

// Search functionality
function searchRoute() {
    const from = document.getElementById('fromInput').value.trim();
    const to = document.getElementById('toInput').value.trim();
    
    if (!from || !to) {
        alert(currentLanguage === 'ar' ? 'يرجى إدخال نقطتي البداية والوصول' : 'Please enter both starting and destination points');
        return;
    }
    
    // Filter routes based on search
    const filteredRoutes = routes.filter(route => 
        route.from.toLowerCase().includes(from.toLowerCase()) && 
        route.to.toLowerCase().includes(to.toLowerCase()) ||
        route.to.toLowerCase().includes(from.toLowerCase()) && 
        route.from.toLowerCase().includes(to.toLowerCase())
    );
    
    displayResults(filteredRoutes, from, to);
}

function displayResults(routes, from, to) {
    const resultsContainer = document.getElementById('resultsContainer');
    const routeResults = document.getElementById('routeResults');
    
    resultsContainer.classList.remove('hidden');
    
    if (routes.length === 0) {
        routeResults.innerHTML = `
            <div class="no-results">
                <p>${currentLanguage === 'ar' ? 'لم نجد طرق مباشرة. جاري البحث عن بدائل...' : 'No direct routes found. Searching for alternatives...'}</p>
            </div>
        `;
        
        // Generate alternative suggestions
        setTimeout(() => {
            const alternatives = generateAlternatives(from, to);
            routeResults.innerHTML = alternatives;
        }, 1500);
        
        return;
    }
    
    routeResults.innerHTML = routes.map(route => `
        <div class="route-result">
            <div class="route-header">
                <span class="route-type ${route.type}">${getTransportTypeLabel(route.type)}</span>
                <span class="route-fare">${route.fare} ${currentLanguage === 'ar' ? 'جنيه' : 'EGP'}</span>
            </div>
            <div class="route-details">
                <strong>${route.from} → ${route.to}</strong><br>
                ⏱️ ${route.time} ${currentLanguage === 'ar' ? 'دقيقة' : 'minutes'} | 
                👥 ${route.votes} ${currentLanguage === 'ar' ? 'صوت' : 'votes'}<br>
                ${route.notes}
            </div>
        </div>
    `).join('');
}

function generateAlternatives(from, to) {
    const alternatives = [
        {
            type: 'metro',
            fare: 15,
            time: 45,
            description: currentLanguage === 'ar' 
                ? `${from} → رمسيس (مترو) → ${to} (ميكروباص)`
                : `${from} → Ramses (Metro) → ${to} (Microbus)`
        },
        {
            type: 'bus',
            fare: 12,
            time: 60,
            description: currentLanguage === 'ar' 
                ? `${from} → ميدان التحرير → ${to} (أتوبيس نقل عام)`
                : `${from} → Tahrir Square → ${to} (Public Bus)`
        },
        {
            type: 'microbus',
            fare: 18,
            time: 50,
            description: currentLanguage === 'ar' 
                ? `${from} → ${to} (ميكروباص مع تغيير)`
                : `${from} → ${to} (Microbus with transfer)`
        }
    ];
    
    return alternatives.map(alt => `
        <div class="route-result">
            <div class="route-header">
                <span class="route-type ${alt.type}">${getTransportTypeLabel(alt.type)}</span>
                <span class="route-fare">${alt.fare} ${currentLanguage === 'ar' ? 'جنيه' : 'EGP'}</span>
            </div>
            <div class="route-details">
                <strong>${alt.description}</strong><br>
                ⏱️ ${alt.time} ${currentLanguage === 'ar' ? 'دقيقة' : 'minutes'} (${currentLanguage === 'ar' ? 'تقريباً' : 'approx'})
            </div>
        </div>
    `).join('');
}

function getTransportTypeLabel(type) {
    const labels = {
        ar: { metro: 'مترو', bus: 'أتوبيس', microbus: 'ميكروباص' },
        en: { metro: 'Metro', bus: 'Bus', microbus: 'Microbus' }
    };
    return labels[currentLanguage][type] || type;
}

function swapLocations() {
    const fromInput = document.getElementById('fromInput');
    const toInput = document.getElementById('toInput');
    
    const temp = fromInput.value;
    fromInput.value = toInput.value;
    toInput.value = temp;
}

// Authentication
function showAuthModal(type) {
    const modal = document.getElementById('authModal');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (type === 'login') {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    }
    
    modal.style.display = 'flex';
}

function closeAuthModal() {
    document.getElementById('authModal').style.display = 'none';
}

function switchAuthForm(type) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (type === 'login') {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    }
}

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simulate login (in real app, this would be API call)
    if (email && password) {
        currentUser = {
            id: Date.now(),
            name: email.split('@')[0],
            email: email,
            currency: 50
        };
        
        updateUserInterface();
        closeAuthModal();
        saveUserSession();
        
        alert(currentLanguage === 'ar' ? 'تم تسجيل الدخول بنجاح!' : 'Login successful!');
    }
}

function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert(currentLanguage === 'ar' ? 'كلمات المرور غير متطابقة' : 'Passwords do not match');
        return;
    }
    
    // Simulate registration
    if (name && email && password) {
        currentUser = {
            id: Date.now(),
            name: name,
            email: email,
            currency: 100 // Welcome bonus
        };
        
        updateUserInterface();
        closeAuthModal();
        saveUserSession();
        
        alert(currentLanguage === 'ar' ? 'تم إنشاء الحساب بنجاح! حصلت على 100 نقطة ترحيبية' : 'Account created successfully! You received 100 welcome points');
    }
}

function updateUserInterface() {
    const authButtons = document.querySelector('.auth-buttons');
    const userInfo = document.getElementById('userInfo');
    const currencyAmount = document.getElementById('currencyAmount');
    
    if (currentUser) {
        authButtons.classList.add('hidden');
        userInfo.classList.remove('hidden');
        currencyAmount.textContent = currentUser.currency;
    } else {
        authButtons.classList.remove('hidden');
        userInfo.classList.add('hidden');
    }
}

function toggleUserMenu() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.toggle('hidden');
}

function logout() {
    currentUser = null;
    updateUserInterface();
    localStorage.removeItem('waslaUser');
    toggleUserMenu();
    alert(currentLanguage === 'ar' ? 'تم تسجيل الخروج بنجاح' : 'Logged out successfully');
}

function saveUserSession() {
    if (currentUser) {
        localStorage.setItem('waslaUser', JSON.stringify(currentUser));
    }
}

function loadUserSession() {
    const savedUser = localStorage.getItem('waslaUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserInterface();
    }
}

// Routes management
function loadRoutes() {
    const routesList = document.getElementById('routesList');
    if (!routesList) return;
    
    routesList.innerHTML = routes.map(route => `
        <div class="route-item">
            <div class="route-info">
                <h4>${route.from} → ${route.to}</h4>
                <p>${getTransportTypeLabel(route.type)} • ${route.fare} ${currentLanguage === 'ar' ? 'جنيه' : 'EGP'} • ${route.time} ${currentLanguage === 'ar' ? 'دقيقة' : 'min'}</p>
                <div class="route-meta">
                    <span>👥 ${route.votes} ${currentLanguage === 'ar' ? 'صوت' : 'votes'}</span>
                </div>
                <p style="font-size: 0.9rem; margin-top: 8px; color: var(--text-light);">${route.notes}</p>
            </div>
            <div class="route-actions">
                <button class="vote-btn upvote" onclick="voteRoute(${route.id}, 1)">👍</button>
                <button class="vote-btn downvote" onclick="voteRoute(${route.id}, -1)">👎</button>
            </div>
        </div>
    `).join('');
}

function showAddRouteModal() {
    if (!currentUser) {
        alert(currentLanguage === 'ar' ? 'يجب تسجيل الدخول أولاً' : 'Please login first');
        showAuthModal('login');
        return;
    }
    
    document.getElementById('addRouteModal').style.display = 'flex';
}

function closeAddRouteModal() {
    document.getElementById('addRouteModal').style.display = 'none';
}

function handleAddRoute(event) {
    event.preventDefault();
    
    if (!currentUser) {
        alert(currentLanguage === 'ar' ? 'يجب تسجيل الدخول أولاً' : 'Please login first');
        return;
    }
    
    const routeData = {
        id: Date.now(),
        from: document.getElementById('routeFrom').value,
        to: document.getElementById('routeTo').value,
        type: document.getElementById('routeTransportType').value,
        fare: parseInt(document.getElementById('routeFare').value),
        time: parseInt(document.getElementById('routeTime').value),
        notes: document.getElementById('routeNotes').value || '',
        votes: 1,
        author: currentUser.id
    };
    
    routes.unshift(routeData);
    
    // Add currency reward
    currentUser.currency += 10;
    updateUserInterface();
    saveUserSession();
    
    loadRoutes();
    closeAddRouteModal();
    
    // Reset form
    event.target.reset();
    
    alert(currentLanguage === 'ar' ? 'تم إضافة الطريق بنجاح! حصلت على 10 نقاط' : 'Route added successfully! You earned 10 points');
}

function voteRoute(routeId, vote) {
    if (!currentUser) {
        alert(currentLanguage === 'ar' ? 'يجب تسجيل الدخول للتصويت' : 'Please login to vote');
        showAuthModal('login');
        return;
    }
    
    const route = routes.find(r => r.id === routeId);
    if (route) {
        route.votes += vote;
        if (route.votes < 0) route.votes = 0;
        
        // Add small currency reward for voting
        currentUser.currency += 1;
        updateUserInterface();
        saveUserSession();
        
        loadRoutes();
    }
}

// Station details
function showStationDetails(stationId) {
    const stationInfo = {
        ramses: {
            name: currentLanguage === 'ar' ? 'محطة رمسيس' : 'Ramses Station',
            description: currentLanguage === 'ar' ? 'المحطة المركزية الرئيسية في القاهرة' : 'Main central station in Cairo',
            routes: [
                currentLanguage === 'ar' ? 'خط المترو الأول والثاني' : 'Metro Line 1 & 2',
                currentLanguage === 'ar' ? 'أتوبيسات إلى جميع المحافظات' : 'buses to all governorates',
                currentLanguage === 'ar' ? 'ميكروباصات داخل القاهرة' : 'Microbuses within Cairo'
            ]
        },
        abboud: {
            name: currentLanguage === 'ar' ? 'العباسية' : 'Abbasia',
            description: currentLanguage === 'ar' ? 'نقطة تجمع مواصلات مهمة' : 'Important transport junction',
            routes: [
                currentLanguage === 'ar' ? 'مترو خط الأنفاق الثالث' : 'Metro Line 3',
                currentLanguage === 'ar' ? 'أتوبيسات النقل العام' : 'Public buses',
                currentLanguage === 'ar' ? 'ميكروباصات المحافظات' : 'Inter-city microbuses'
            ]
        },
        elmonib: {
            name: currentLanguage === 'ar' ? 'المنيب' : 'El Monib',
            description: currentLanguage === 'ar' ? 'بوابة الجيزة الجنوبية' : 'Southern gateway to Giza',
            routes: [
                currentLanguage === 'ar' ? 'نهاية خط المترو الثاني' : 'End of Metro Line 2',
                currentLanguage === 'ar' ? 'ميكروباصات الجيزة والقاهرة' : 'Giza-Cairo microbuses',
                currentLanguage === 'ar' ? 'أتوبيسات المحافظات الجنوبية' : 'Southern governorate buses'
            ]
        }
    };
    
    const station = stationInfo[stationId];
    if (station) {
        const routesList = station.routes.map(route => `<li>${route}</li>`).join('');
        alert(`${station.name}\n\n${station.description}\n\n${currentLanguage === 'ar' ? 'الطرق المتاحة:' : 'Available routes:'}\n${station.routes.join('\n')}`);
    }
}

// Profile function placeholder
function showProfile() {
    alert(currentLanguage === 'ar' ? 'صفحة الملف الشخصي قيد التطوير' : 'Profile page under development');
    toggleUserMenu();
}

// Click outside to close dropdowns
document.addEventListener('click', function(event) {
    const userMenu = document.querySelector('.user-menu');
    const dropdown = document.getElementById('userDropdown');
    
    if (userMenu && !userMenu.contains(event.target)) {
        dropdown.classList.add('hidden');
    }
});

// Close modals on outside click
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});