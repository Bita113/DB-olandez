// --- TRANSLATIONS CONFIG ---
const translations = {
    en: {
        "hero-tag": "Rotterdam & Surroundings",
        "hero-title": "Crafting <span class='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400'>Perfect Views</span> for Your Home",
        "hero-subtitle": "Premium installation of windows and doors. We combine Dutch precision with high-end craftsmanship to secure and beautify your residence.",
        "port-h2": "Our Craftsmanship",
        "port-p": "Real transformations from our recent projects"
    },
    nl: {
        "hero-tag": "Rotterdam & Omgeving",
        "hero-title": "Creëer het <span class='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400'>Perfecte Uitzicht</span> voor Uw Huis",
        "hero-subtitle": "Premium montage van kozijnen en deuren. Wij combineren Nederlandse precisie cu hoogwaardig vakmanschap.",
        "port-h2": "Ons Vakmanschap",
        "port-p": "Echte transformaties van onze recente projecten"
    }
};

// --- DATA: ADAUGA PROIECTE NOI AICI ---
const projects = [
    {
        title: "Modern PVC Windows",
        location: "Schiedam, Rotterdam",
        before: "before1.jpg",
        after: "after1.jpg"
    },
    // Codul generat în admin.html se lipește aici sus
];

// --- CORE FUNCTIONS ---
function setLanguage(lang) {
    document.getElementById('hero-tag').innerHTML = translations[lang]["hero-tag"];
    document.getElementById('hero-title').innerHTML = translations[lang]["hero-title"];
    document.getElementById('hero-subtitle').innerText = translations[lang]["hero-subtitle"];
    document.getElementById('port-h2').innerText = translations[lang]["port-h2"];
    document.getElementById('port-p').innerText = translations[lang]["port-p"];

    const btnNl = document.getElementById('btn-nl');
    const btnEn = document.getElementById('btn-en');
    
    if(lang === 'nl') {
        btnNl.className = 'px-3 py-1 rounded-full text-xs font-bold transition-all bg-white text-blue-900 shadow-sm';
        btnEn.className = 'px-3 py-1 rounded-full text-xs font-bold transition-all text-slate-500';
    } else {
        btnEn.className = 'px-3 py-1 rounded-full text-xs font-bold transition-all bg-white text-blue-900 shadow-sm';
        btnNl.className = 'px-3 py-1 rounded-full text-xs font-bold transition-all text-slate-500';
    }
}

function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    if(!grid) return;
    
    grid.innerHTML = projects.map(p => `
        <div class="group overflow-hidden rounded-3xl bg-slate-50 p-4 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500">
            <div class="relative flex gap-2">
                <div class="w-1/2 relative overflow-hidden rounded-xl">
                    <img src="${p.before}" class="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-700">
                    <span class="absolute top-2 left-2 bg-black/60 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-tighter">Before</span>
                </div>
                <div class="w-1/2 relative overflow-hidden rounded-xl">
                    <img src="${p.after}" class="h-64 w-full object-cover border-2 border-blue-500/30 group-hover:scale-105 transition-transform duration-700">
                    <span class="absolute top-2 left-2 bg-blue-600 text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-tighter shadow-lg shadow-blue-500/40">After</span>
                </div>
            </div>
            <div class="mt-5 text-left px-2">
                <h4 class="font-bold text-slate-800 text-lg">${p.title}</h4>
                <p class="text-sm text-blue-600 font-medium italic"><i class="fas fa-map-marker-alt mr-1"></i> ${p.location}</p>
            </div>
        </div>
    `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en');
    renderPortfolio();
});
