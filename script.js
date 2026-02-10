const langData = {
    en: {
        hero_title: "Premium Window & Door Installation",
        hero_subtitle: "Professional installation, replacement, and full-service solutions for windows and doors. Quality craftsmanship you can trust.",
        btn_wa: "Contact via WhatsApp",
        btn_fb: "Visit Our Facebook",
        services_h2: "Our Services",
        services_p: "From precise measurements to professional installation — we handle every step of your window and door project.",
        why_h2: "Built on Trust & Craftsmanship",
        reviews_h2: "What Our Clients Say",
        area_h2: "Serving Rotterdam & Surroundings",
        gdpr: "No personal data collected.",
        cities: ["Rotterdam", "Schiedam", "Vlaardingen", "Dordrecht", "Spijkenisse", "Ridderkerk", "Barendrecht", "Delft"],
        services: [
            {t: "Installation", p: "Expert installation with precision and care.", i: "fa-tools"},
            {t: "Measurements", p: "Accurate on-site measurements for a perfect fit.", i: "fa-ruler-combined"},
            {t: "Transport", p: "Safe delivery from manufacturer to your home.", i: "fa-truck-loading"}
        ],
        why: [
            {t: "Experienced Team", p: "Years of hands-on experience in Rotterdam.", i: "fa-users"},
            {t: "Local Presence", p: "Based in Rotterdam, we know the local standards.", i: "fa-map-pin"},
            {t: "Transparent Communication", p: "No surprises. Clear timelines and pricing.", i: "fa-comment-dots"}
        ],
        reviews: [
            {n: "Jan van der Berg", r: "Excellent work! My new PVC windows look amazing and the house is much warmer.", s: 5},
            {n: "Lars Hendriks", r: "Professional and clean. They treated my home with respect. Highly recommended.", s: 5},
            {n: "Pieter Smit", r: "Best price in Rotterdam for this quality of montage.", s: 4},
            {n: "Anika de Jong", r: "Very fast installation and the communication was perfect throughout.", s: 5},
            {n: "Bram Bakker", r: "High quality aluminum doors. The team was very skilled.", s: 5},
            {n: "Willem Visser", r: "Top service. They solved all my questions about energy efficiency.", s: 5}
        ]
    },
    nl: {
        hero_title: "Premium Kozijnen & Deuren Montage",
        hero_subtitle: "Professionele installatie, vervanging en totaaloplossingen voor kozijnen en deuren. Vakmanschap waarop u kunt vertrouwen.",
        btn_wa: "Contact via WhatsApp",
        btn_fb: "Bezoek Facebook",
        services_h2: "Onze Diensten",
        services_p: "Van nauwkeurige metingen tot professionele installatie — wij verzorgen elke stap.",
        why_h2: "Gebouwd op Vertrouwen & Vakmanschap",
        reviews_h2: "Wat Onze Klanten Zeggen",
        area_h2: "Werkzaam in Rotterdam & Omgeving",
        gdpr: "Geen persoonlijke gegevens verzameld.",
        cities: ["Rotterdam", "Schiedam", "Vlaardingen", "Dordrecht", "Spijkenisse", "Ridderkerk", "Barendrecht", "Delft"],
        services: [
            {t: "Installatie", p: "Vakkundige montage met precisie en zorg.", i: "fa-tools"},
            {t: "Inmeten", p: "Nauwkeurige metingen voor een perfecte pasvorm.", i: "fa-ruler-combined"},
            {t: "Transport", p: "Veilige levering van fabriek tot aan uw deur.", i: "fa-truck-loading"}
        ],
        why: [
            {t: "Ervaren Team", p: "Jarenlange praktijkervaring in Rotterdam.", i: "fa-users"},
            {t: "Lokale Aanwezigheid", p: "Gevestigd in Rotterdam, wij kennen de normen.", i: "fa-map-pin"},
            {t: "Transparante Communicatie", p: "Geen verrassingen. Duidelijke planning en prijzen.", i: "fa-comment-dots"}
        ],
        reviews: [
            {n: "Jan van der Berg", r: "Uitstekend werk! Mijn nieuwe kozijnen zien er geweldig uit.", s: 5},
            {n: "Lars Hendriks", r: "Professioneel en netjes gewerkt. Een aanrader.", s: 5},
            {n: "Pieter Smit", r: "Beste prijs in Rotterdam voor deze kwaliteit montage.", s: 4},
            {n: "Anika de Jong", r: "Zeer snelle installatie en de communicatie was perfect.", s: 5},
            {n: "Bram Bakker", r: "Hoge kwaliteit deuren. Het team was zeer bekwaam.", s: 5},
            {n: "Willem Visser", r: "Top service. Ze hebben al mijn vragen beantwoord.", s: 5}
        ]
    }
};

function setLanguage(lang) {
    const d = langData[lang];
    document.getElementById('hero-title').innerText = d.hero_title;
    document.getElementById('hero-subtitle').innerText = d.hero_subtitle;
    document.getElementById('btn-wa').innerText = d.btn_wa;
    document.getElementById('btn-fb').innerText = d.btn_fb;
    document.getElementById('services-h2').innerText = d.services_h2;
    document.getElementById('services-p').innerText = d.services_p;
    document.getElementById('why_h2').innerText = d.why_h2;
    document.getElementById('reviews-h2').innerText = d.reviews_h2;
    document.getElementById('area-h2').innerText = d.area_h2;
    document.getElementById('gdpr').innerText = d.gdpr;

    // Grid Servicii
    document.getElementById('services-grid').innerHTML = d.services.map(s => `
        <div class="p-10 rounded-[2rem] bg-slate-50 hover:bg-white hover:shadow-2xl transition-all group">
            <div class="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <i class="fas ${s.i} text-2xl"></i>
            </div>
            <h3 class="font-bold text-2xl mb-4">${s.t}</h3>
            <p class="text-slate-500 leading-relaxed">${s.p}</p>
        </div>
    `).join('');

    // Grid Why Us
    document.getElementById('why-grid').innerHTML = d.why.map(w => `
        <div class="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all">
            <i class="fas ${w.i} text-orange-500 text-3xl mb-6"></i>
            <h3 class="font-bold text-xl mb-3">${w.t}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">${w.p}</p>
        </div>
    `).join('');

    // Grid Reviews
    document.getElementById('reviews-grid').innerHTML = d.reviews.map(r => `
        <div class="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
            <div class="text-orange-500 mb-4 text-xs">
                ${'<i class="fas fa-star"></i>'.repeat(r.s)}
            </div>
            <p class="text-slate-600 italic mb-6 text-sm">"${r.r}"</p>
            <h4 class="font-bold text-slate-900">${r.n}</h4>
        </div>
    `).join('');

    // Service Area List
    document.getElementById('area-list').innerHTML = d.cities.map(c => `
        <span class="px-4 py-2 rounded-full border border-slate-200 text-sm font-medium hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all cursor-default">
            <i class="fas fa-location-arrow mr-2 text-[10px]"></i>${c}
        </span>
    `).join('');

    // Update Butoane UI
    const isNl = lang === 'nl';
    document.getElementById('btn-nl').className = isNl ? 'px-3 py-1 rounded-full btn-active' : 'px-3 py-1 rounded-full text-slate-500';
    document.getElementById('btn-en').className = isNl ? 'px-3 py-1 rounded-full text-slate-500' : 'px-3 py-1 rounded-full btn-active';
}

document.addEventListener('DOMContentLoaded', () => setLanguage('en'));
