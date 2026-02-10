// Date Proiecte (Poti adauga oricâte aici)
const projects = [
    { title: "Premium PVC Windows", location: "Schiedam, NL", before: "before1.jpg", after: "after1.jpg" },
    { title: "Aluminium Door System", location: "Rotterdam, NL", before: "before2.jpg", after: "after2.jpg" }
];

// Traduceri
const langData = {
    en: {
        hero_tag: "Rotterdam & Surroundings",
        hero_title: "Perfect Views for Your Home",
        hero_subtitle: "Premium installation of windows and doors with Dutch precision.",
        btn_wa: "WhatsApp Direct",
        btn_port: "View Portfolio",
        about_h2: "Premium Craftsmanship",
        about_p: "DB Kozijnen & Deuren is specialized in the assembly of high-quality PVC and aluminum systems. We offer a full service, from professional measurement to final installation, ensuring energy efficiency and design excellence for your residence.",
        services_h2: "Our Professional Services",
        port_h2: "Latest Transformations",
        contact_h2: "Request a Free Quote",
        gdpr: "GDPR Compliant | No personal data collected.",
        servs: [
            {t: "Full Installation", p: "Complete montage of windows and doors by experienced professionals."},
            {t: "Precision Measurement", p: "We come to your location for exact millimeter measurements."},
            {t: "Global Logistics", p: "Safe transport and handling of your products from factory to site."}
        ]
    },
    nl: {
        hero_tag: "Rotterdam & Omgeving",
        hero_title: "Perfect Uitzicht voor Uw Huis",
        hero_subtitle: "Premium montage van kozijnen en deuren met Nederlandse precisie.",
        btn_wa: "WhatsApp Direct",
        btn_port: "Bekijk Portfolio",
        about_h2: "Vakmanschap & Kwaliteit",
        about_p: "DB Kozijnen & Deuren is gespecialiseerd in de montage van hoogwaardige kunststof en aluminium systemen. Wij bieden een volledige service, van professionele inmeting tot definitieve installatie.",
        services_h2: "Onze Diensten",
        port_h2: "Onze Projecten",
        contact_h2: "Vraag een gratis offerte aan",
        gdpr: "AVG Conform | Geen persoonlijke gegevens verzameld.",
        servs: [
            {t: "Volledige Montage", p: "Complete montage van kozijnen en deuren door ervaren professionals."},
            {t: "Nauwkeurig Inmeten", p: "Wij komen bij u op locatie voor exacte metingen tot op de millimeter."},
            {t: "Veilig Transport", p: "Veilig transport en handling van uw producten van fabriek naar locatie."}
        ]
    }
};

// Functie Schimbare Limba
function setLanguage(lang) {
    const d = langData[lang];
    document.getElementById('hero-tag').innerText = d.hero_tag;
    document.getElementById('hero-title').innerText = d.hero_title;
    document.getElementById('hero-subtitle').innerText = d.hero_subtitle;
    document.getElementById('btn-wa').innerText = d.btn_wa;
    document.getElementById('btn-port').innerText = d.btn_port;
    document.getElementById('about-h2').innerText = d.about_h2;
    document.getElementById('about-p').innerText = d.about_p;
    document.getElementById('services-h2').innerText = d.services_h2;
    document.getElementById('port-h2').innerText = d.port_h2;
    document.getElementById('contact-h2').innerText = d.contact_h2;
    document.getElementById('gdpr-footer').innerText = d.gdpr;

    // Redare Servicii
    const sContainer = document.getElementById('services-container');
    sContainer.innerHTML = d.servs.map(s => `
        <div class="service-card p-6 rounded-2xl bg-white shadow-sm border border-slate-100">
            <i class="fas fa-check-circle text-orange-500 mb-4 text-xl"></i>
            <h3 class="font-bold text-lg mb-2 text-slate-800">${s.t}</h3>
            <p class="text-sm text-slate-600">${s.p}</p>
        </div>
    `).join('');

    // Update Butoane UI
    const isNl = lang === 'nl';
    document.getElementById('btn-nl').className = isNl ? 'px-3 py-1 rounded-full btn-active' : 'px-3 py-1 rounded-full btn-inactive';
    document.getElementById('btn-en').className = isNl ? 'px-3 py-1 rounded-full btn-inactive' : 'px-3 py-1 rounded-full btn-active';
}

// Afisare Portofoliu
function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    grid.innerHTML = projects.map(p => `
        <div class="bg-white p-4 rounded-3xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow">
            <div class="flex flex-col gap-3">
                <div class="relative overflow-hidden rounded-2xl">
                    <img src="${p.before}" class="w-full h-52 object-cover">
                    <span class="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[9px] px-2 py-1 rounded font-bold uppercase">Before</span>
                </div>
                <div class="relative overflow-hidden rounded-2xl">
                    <img src="${p.after}" class="w-full h-52 object-cover border-2 border-orange-500">
                    <span class="absolute top-3 left-3 bg-orange-600 text-white text-[9px] px-2 py-1 rounded font-bold uppercase">After</span>
                </div>
            </div>
            <div class="mt-4 px-2">
                <h4 class="font-extrabold text-[#1e3a8a] text-lg">${p.title}</h4>
                <p class="text-xs text-orange-600 font-bold uppercase tracking-wider italic">${p.location}</p>
            </div>
        </div>
    `).join('');
}

// Menu Mobil
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Inchide meniu la click
document.querySelectorAll('#mobile-menu a').forEach(l => l.addEventListener('click', () => document.getElementById('mobile-menu').classList.add('hidden')));

// Init
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en');
    renderPortfolio();
});
