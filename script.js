const translations = {
    en: {
        "hero-tag": "Rotterdam & Surroundings",
        "hero-title": "Crafting <span class='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400'>Perfect Views</span> for Your Home",
        "hero-subtitle": "Premium installation of windows and doors. We combine Dutch precision with high-end craftsmanship to secure and beautify your residence.",
        "btn-wa": "WhatsApp Direct"
    },
    nl: {
        "hero-tag": "Rotterdam & Omgeving",
        "hero-title": "Creëer het <span class='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400'>Perfecte Uitzicht</span> voor Uw Huis",
        "hero-subtitle": "Premium montage van kozijnen en deuren. Wij combineren Nederlandse precisie met hoogwaardig vakmanschap.",
        "btn-wa": "WhatsApp Direct"
    }
};

function setLanguage(lang) {
    // Update texts
    document.getElementById('hero-tag').innerHTML = translations[lang]["hero-tag"];
    document.getElementById('hero-title').innerHTML = translations[lang]["hero-title"];
    document.getElementById('hero-subtitle').innerText = translations[lang]["hero-subtitle"];

    // Update Button UI
    if(lang === 'nl') {
        document.getElementById('btn-nl').className = 'px-3 py-1 rounded-full text-xs font-bold transition-all btn-active';
        document.getElementById('btn-en').className = 'px-3 py-1 rounded-full text-xs font-bold transition-all btn-inactive';
    } else {
        document.getElementById('btn-en').className = 'px-3 py-1 rounded-full text-xs font-bold transition-all btn-active';
        document.getElementById('btn-nl').className = 'px-3 py-1 rounded-full text-xs font-bold transition-all btn-inactive';
    }
}

// Set default
setLanguage('en');

// --- ADMIN SYSTEM (Client Side Simulation) ---
// Pentru a adăuga poze noi, utilizatorul va "urca" fișierele în folderul 'portfolio' din GitHub
// și va adăuga datele în acest array. 
const projects = [
    {
        title: "Schiedam Project",
        location: "Rotterdam",
        before: "before1.jpg",
        after: "after1.jpg"
    }
];

function loadPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    // Aici se pot genera dinamic cardurile din array-ul 'projects'
}
