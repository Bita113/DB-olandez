// --- TRANSLATIONS CONFIG ---
const translations = {
    en: {
        "hero-tag": "Rotterdam & Surroundings",
        "hero-title": "Crafting <span class='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400'>Perfect Views</span> for Your Home",
        "hero-subtitle": "Premium installation of windows and doors. We combine Dutch precision with high-end craftsmanship to secure and beautify your residence.",
        
        "about-h2": "About DB Kozijnen & Deuren",
        "about-p1": "DB Kozijnen & Deuren is your trusted partner for premium window and door installation services in Rotterdam and its surrounding areas. With years of experience and a passion for craftsmanship, we bring warmth, security, and beauty to your home.",
        "about-p2": "We pride ourselves on a transparent approach, meticulous on-site measurements, and direct collaboration with leading European manufacturers. Our goal is to offer tailored solutions that perfectly match your vision and enhance the value of your property.",
        
        "services-h2": "Our Expert Services",
        "services-p": "Comprehensive solutions from planning to flawless execution.",
        "s1-t": "Professional Installation",
        "s1-p": "Meticulous installation of all types of windows and doors, ensuring optimal insulation and longevity.",
        "s2-t": "Removal & Replacement",
        "s2-p": "Efficient removal of old frames and seamless replacement with modern, energy-efficient solutions.",
        "s3-t": "On-site Measurements",
        "s3-p": "Precise, professional measurements taken at your location to guarantee a perfect custom fit.",
        "s4-t": "Manufacturer Coordination",
        "s4-p": "Direct communication with trusted manufacturers for custom production tailored to your specific requirements.",
        "s5-t": "Secure Transport",
        "s5-p": "Safe and timely transport of all materials directly to your installation site.",
        "s6-t": "Full-Service Solutions",
        "s6-p": "From initial consultation to final inspection, we manage every detail of your window and door project.",

        "port-h2": "Our Craftsmanship",
        "port-p": "Real transformations from our recent projects. Quality that stands solid as a house.",

        "contact-h2": "Let's discuss your project",
        "contact-p1": "We offer free consultations and professional measurements in Rotterdam. No obligations, just expert advice.",
        "contact-h4": "Quick Links",
        "contact-link1": "Get a Quote via WhatsApp",
        "contact-link2": "Follow us on Facebook",
        "gdpr-footer": "DB Kozijnen & Deuren | No physical office | GDPR Compliant (No Data Collection)"
    },
    nl: {
        "hero-tag": "Rotterdam & Omgeving",
        "hero-title": "Creëer het <span class='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400'>Perfecte Uitzicht</span> voor Uw Huis",
        "hero-subtitle": "Premium montage van kozijnen en deuren. Wij combineren Nederlandse precisie met hoogwaardig vakmanschap om uw woning te beveiligen en te verfraaien.",

        "about-h2": "Over DB Kozijnen & Deuren",
        "about-p1": "DB Kozijnen & Deuren is uw betrouwbare partner voor premium kozijn- en deurmontagediensten in Rotterdam en omstreken. Met jarenlange ervaring en passie voor het vak, brengen wij warmte, veiligheid en schoonheid in uw huis.",
        "about-p2": "Wij zijn trots op een transparante aanpak, nauwkeurige metingen op locatie en directe samenwerking met toonaangevende Europese fabrikanten. Ons doel is om oplossingen op maat te bieden die perfect aansluiten bij uw visie en de waarde van uw woning verhogen.",

        "services-h2": "Onze Deskundige Diensten",
        "services-p": "Uitgebreide oplossingen van planning tot vlekkeloze uitvoering.",
        "s1-t": "Professionele Montage",
        "s1-p": "Nauwkeurige montage van alle soorten kozijnen en deuren, voor optimale isolatie en een lange levensduur.",
        "s2-t": "Verwijdering & Vervanging",
        "s2-p": "Efficiënte verwijdering van oude kozijnen en naadloze vervanging door moderne, energiezuinige oplossingen.",
        "s3-t": "Metingen op Locatie",
        "s3-p": "Precieze, professionele metingen op uw locatie om een perfecte pasvorm op maat te garanderen.",
        "s4-t": "Fabrikant Coördinatie",
        "s4-p": "Directe communicatie met vertrouwde fabrikanten voor maatwerk productie, afgestemd op uw specifieke eisen.",
        "s5-t": "Veilig Transport",
        "s5-p": "Veilig en tijdig transport van alle materialen direct naar uw installatielocatie.",
        "s6-t": "Volledige Service Oplossingen",
        "s6-p": "Van eerste consultatie tot eindinspectie, wij beheren elk detail van uw kozijn- en deurproject.",

        "port-h2": "Ons Vakmanschap",
        "port-p": "Echte transformaties van onze recente projecten. Kwaliteit die staat als een huis.",

        "contact-h2": "Laten we uw project bespreken",
        "contact-p1": "Wij bieden gratis consultaties en professionele metingen in Rotterdam. Geen verplichtingen, alleen deskundig advies.",
        "contact-h4": "Snelle Links",
        "contact-link1": "Offerte via WhatsApp",
        "contact-link2": "Volg ons op Facebook",
        "gdpr-footer": "DB Kozijnen & Deuren | Geen fysiek kantoor | AVG Conform (Geen Gegevensverzameling)"
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
    {
        title: "Elegant Entrance Door",
        location: "Barendrecht, Rotterdam",
        before: "before2.jpg",
        after: "after2.jpg"
    }
    // Codul generat în admin.html se lipește aici sus
];

// --- CORE FUNCTIONS ---
function setLanguage(lang) {
    for (const key in translations[lang]) {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = translations[lang][key]; // Use innerHTML for rich text like gradients
        }
    }

    const btnNl = document.getElementById('btn-nl');
    const btnEn = document.getElementById('btn-en');
    
    // Reset styles
    btnNl.className = 'px-3 py-1 rounded-full text-xs font-bold transition-all duration-300';
    btnEn.className = 'px-3 py-1 rounded-full text-xs font-bold transition-all duration-300';
    
    // Apply active style
    if(lang === 'nl') {
        btnNl.classList.add('bg-white', 'text-blue-900', 'shadow-sm', 'active');
        btnEn.classList.add('inactive');
    } else {
        btnEn.classList.add('bg-
