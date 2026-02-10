const translations = {
    en: {
        "hero-tag": "Rotterdam & Surroundings",
        "hero-title": "Perfect Views for Your Home",
        "hero-subtitle": "Premium installation of windows and doors with Dutch precision.",
        "btn-wa-text": "WhatsApp Direct",
        "btn-port-text": "View Portfolio",
        "about-h2": "About Our Excellence",
        "about-p": "DB Kozijnen & Deuren offers top-tier installation services in Rotterdam. We focus on quality, using the best materials and precise measurements to ensure your home is secure and energy-efficient.",
        "services-h2": "Our Services",
        "port-h2": "Project Portfolio",
        "contact-h2": "Start Your Project Today",
        "gdpr-footer": "GDPR Compliant | No personal data is stored on this website.",
        "services": [
            {t: "Installation", p: "Expert montage for all types of frames."},
            {t: "Measurement", p: "On-site professional precision measurement."},
            {t: "Transport", p: "Safe delivery of all materials to your site."}
        ]
    },
    nl: {
        "hero-tag": "Rotterdam & Omgeving",
        "hero-title": "Perfect Uitzicht voor Uw Huis",
        "hero-subtitle": "Premium montage van kozijnen en deuren met Nederlandse precisie.",
        "btn-wa-text": "WhatsApp Direct",
        "btn-port-text": "Bekijk Portfolio",
        "about-h2": "Over Onze Vakmanschap",
        "about-p": "DB Kozijnen & Deuren biedt montage van de hoogste kwaliteit in Rotterdam. Wij focussen op kwaliteit, met de beste materialen en nauwkeurige metingen.",
        "services-h2": "Onze Diensten",
        "port-h2": "Project Portfolio",
        "contact-h2": "Start Vandaag Uw Project",
        "gdpr-footer": "AVG Conform | Geen persoonlijke gegevens opgeslagen.",
        "services": [
            {t: "Montage", p: "Vakkundige installatie van alle soorten kozijnen."},
            {t: "Inmeten", p: "Professionele inmeting op locatie."},
            {t: "Transport", p: "Veilig transport van materialen naar de bouwplaats."}
        ]
    }
};

const projects = [
    { title: "PVC Windows", loc: "Rotterdam", bef: "before1.jpg", aft: "after1.jpg" },
    { title: "Entrance Door", loc: "Schiedam", bef: "before2.jpg", aft: "after2.jpg" }
];

function setLanguage(lang) {
    const data = translations[lang];
    
    // Traduceri simple
    document.getElementById('hero-tag').innerText = data["hero-tag"];
    document.getElementById('hero-title').innerText = data["hero-title"];
    document.getElementById('hero-subtitle').innerText = data["hero-subtitle"];
    document.getElementById('btn-wa-text').innerText = data["btn-wa-text"];
    document.getElementById('btn-port-text').innerText = data["btn-port-text"];
    document.getElementById('about-h2').innerText = data["about-h2"];
    document.getElementById('about-p').innerText = data["about-p"];
    document.getElementById('services-h2').innerText = data["services-h2"];
    document.getElementById('port-h2').innerText = data["port-h2"];
    document.getElementById('contact-h2').innerText = data["contact-h2"];
    document.getElementById('gdpr-footer').innerText = data["gdpr-footer"];

    // Update Servicii (Grid)
    const sGrid = document.getElementById('services-grid');
    sGrid.innerHTML = data.services.map(s => `
        <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h3 class="font-bold text-lg mb-2 text-blue-900">${s.t}</h3>
            <p class="text-sm text-slate-600">${s.p}</p>
        </div>
    `).join('');

    // Stil Butoane Limba
    document.getElementById('btn-en').className = lang === 'en' ? 'px-3 py-1 rounded-full btn-active' : 'px-3 py-1 rounded-full btn-inactive';
    document.getElementById('btn-nl').className = lang === 'nl' ? 'px-3 py-1 rounded-full btn-active' : 'px-3 py-1 rounded-full btn-inactive';
}

function renderPortfolio() {
    const pGrid = document.getElementById('portfolio-grid');
    pGrid.innerHTML = projects.map(p => `
        <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-sm">
            <div class="flex flex-col gap-3">
                <div class="relative"><img src="${p.bef}" class="rounded-xl h-48 w-full object-cover"><span class="absolute top-2 left-2 bg-black/70 text-white text-[9px] px-2 py-1 rounded uppercase">Before</span></div>
                <div class="relative"><img src="${p.aft}" class="rounded-xl h-48 w-full object-cover border-2 border-blue-500"><span class="absolute top-2 left-2 bg-blue-600 text-white text-[9px] px-2 py-1 rounded uppercase font-bold">After</span></div>
            </div>
            <div class="mt-4"><h4 class="font-bold text-sm">${p.title}</h4><p class="text-[10px] text-blue-600 uppercase font-bold tracking-wider">${p.loc}</p></div>
        </div>
    `).join('');
}

// Menu Mobile
document.getElementById('mobile-menu-btn').onclick = () => document.getElementById('mobile-menu').classList.toggle('hidden');

// Start
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en');
    renderPortfolio();
});
