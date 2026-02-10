const langData = {
    en: {
        hero_title: "Premium Window & Door Installation in Rotterdam",
        hero_subtitle: "Specialized in high-end PVC and Aluminium mounting. We provide complete solutions: professional measurement, manufacturing coordination, and precision installation.",
        btn_wa: "Request a Free Quote",
        btn_fb: "See Our Work",
        services_h2: "Our Professional Services",
        why_h2: "Built on Trust & 10+ Years of Craftsmanship",
        reviews_h2: "Verified Client Reviews",
        contact_h2: "Discuss Your Project Today",
        services: [
            {t: "Full Montage", p: "Expert installation of window frames and doors with focus on thermal insulation and water-tight sealing.", i: "fa-tools"},
            {t: "Precision Measuring", p: "We use laser technology for millimeter-perfect measurements ensuring your products fit perfectly.", i: "fa-ruler-combined"},
            {t: "Product Consulting", p: "Expert advice on choosing between PVC and Aluminium systems based on your home's architecture.", i: "fa-lightbulb"}
        ],
        why: [
            {t: "Experienced Team", p: "Over a decade of experience in the Dutch market, meeting all local building standards.", i: "fa-check-circle"},
            {t: "Quality Materials", p: "We work only with certified profiles that offer maximum energy efficiency and security.", i: "fa-shield-alt"},
            {t: "Zero Stress", p: "From old window removal to final finishing, we handle everything. You just enjoy the view.", i: "fa-heart"}
        ],
        reviews: [
            {n: "Jan van der Berg", r: "Exceptional quality. The team was punctual and the finish is flawless. My energy bills went down instantly.", s: 5},
            {n: "Lars Hendriks", r: "Professional approach from start to finish. They explained the technical details and delivered exactly what was promised.", s: 5},
            {n: "Mieke Jansen", r: "Very clean work! They treated my house with respect and the new doors look stunning. Highly recommend.", s: 5}
        ]
    },
    nl: {
        hero_title: "Premium Kozijnen & Deuren Montage in Rotterdam",
        hero_subtitle: "Gespecialiseerd in hoogwaardige kunststof en aluminium montage. Wij bieden totaaloplossingen: inmeten, advies en vakkundige installatie.",
        btn_wa: "Vraag een gratis offerte aan",
        btn_fb: "Bekijk ons werk",
        services_h2: "Onze Professionele Diensten",
        why_h2: "Gebouwd op Vertrouwen & 10+ Jaar Vakmanschap",
        reviews_h2: "Geverifieerde Klantbeoordelingen",
        contact_h2: "Bespreek uw project vandaag nog",
        services: [
            {t: "Volledige Montage", p: "Vakkundige installatie van kozijnen en deuren met focus op thermische isolatie en waterdichte afdichting.", i: "fa-tools"},
            {t: "Nauwkeurig Inmeten", p: "Wij gebruiken lasertechnologie voor millimeter-perfecte inmeting voor een naadloze pasvorm.", i: "fa-ruler-combined"},
            {t: "Product Advies", p: "Deskundig advies bij het kiezen tussen kunststof en aluminium systemen voor uw woning.", i: "fa-lightbulb"}
        ],
        why: [
            {t: "Ervaren Team", p: "Meer dan tien jaar ervaring op de Nederlandse markt, voldoet aan alle bouwbesluit eisen.", i: "fa-check-circle"},
            {t: "Kwaliteitsmaterialen", p: "Wij werken alleen met gecertificeerde profielen die maximale energie-efficiëntie bieden.", i: "fa-shield-alt"},
            {t: "Zorgeloos Proces", p: "Van demontage tot afwerking, wij regelen alles. U geniet alleen van het resultaat.", i: "fa-heart"}
        ],
        reviews: [
            {n: "Jan van der Berg", r: "Uitzonderlijke kwaliteit. Het team was punctueel en de afwerking is vlekkeloos. Mijn energierekening is direct gedaald.", s: 5},
            {n: "Lars Hendriks", r: "Professionele aanpak van begin tot eind. Ze legden de technische details goed uit.", s: 5},
            {n: "Mieke Jansen", r: "Zeer netjes gewerkt! Ze behandelden mijn huis met respect en de nieuwe deuren zijn prachtig.", s: 5}
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
    document.getElementById('why-h2').innerText = d.why_h2;
    document.getElementById('reviews-h2').innerText = d.reviews_h2;
    document.getElementById('contact-h2').innerText = d.contact_h2;

    // Servicii (Style: Carduri moderne)
    document.getElementById('services-grid').innerHTML = d.services.map(s => `
        <div class="group p-10 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500 border border-transparent hover:border-slate-100">
            <div class="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center text-orange-600 mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                <i class="fas ${s.i} text-2xl"></i>
            </div>
            <h3 class="font-extrabold text-2xl mb-4 tracking-tight">${s.t}</h3>
            <p class="text-slate-500 leading-relaxed">${s.p}</p>
        </div>
    `).join('');

    // Why Us (Style: Listă cu checkmark-uri)
    document.getElementById('why-grid').innerHTML = d.why.map(w => `
        <div class="flex gap-6 p-6 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all border border-transparent hover:border-slate-100">
            <div class="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                <i class="fas ${w.i} text-xl"></i>
            </div>
            <div>
                <h4 class="font-bold text-xl mb-2">${w.t}</h4>
                <p class="text-slate-500 text-sm leading-relaxed">${w.p}</p>
            </div>
        </div>
    `).join('');

    // Reviews
    document.getElementById('reviews-grid').innerHTML = d.reviews.map(r => `
        <div class="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col h-full">
            <div class="flex gap-1 text-orange-500 mb-6 text-sm">
                ${'<i class="fas fa-star"></i>'.repeat(r.s)}
            </div>
            <p class="text-slate-700 italic mb-8 leading-relaxed flex-grow">"${r.r}"</p>
            <div class="flex items-center gap-4">
                <div class="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 text-xs">${r.n[0]}</div>
                <h4 class="font-bold text-slate-900">${r.n}</h4>
            </div>
        </div>
    `).join('');

    // UI Buttons
    const isNl = lang === 'nl';
    document.getElementById('btn-nl').className = isNl ? 'px-6 py-2 rounded-full bg-white text-orange-600 shadow-sm font-bold' : 'px-6 py-2 rounded-full text-slate-500 font-medium hover:text-slate-800';
    document.getElementById('btn-en').className = isNl ? 'px-6 py-2 rounded-full text-slate-500 font-medium hover:text-slate-800' : 'px-6 py-2 rounded-full bg-white text-orange-600 shadow-sm font-bold';
}

document.addEventListener('DOMContentLoaded', () => setLanguage('en'));
