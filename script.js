const translations = {
    en: {
        "hero-title": "Expert Window & Door Installation in Rotterdam",
        "hero-subtitle": "Full-service solutions: from professional measurement to final installation. Quality that stands solid as a house.",
        "services-title": "Our Services",
        "s1-t": "Installation & Replacement",
        "s1-p": "Complete removal of old frames and expert installation of new windows and doors.",
        "s2-t": "Measurements",
        "s2-p": "On-site professional measurements to ensure a perfect fit for every custom order.",
        "s3-t": "Transport & Delivery",
        "s3-p": "Safe transport of materials directly to your location in Rotterdam and surroundings.",
        "why-badge": "Kwaliteit die staat als een huis",
        "why-title": "Why Choose DB?",
        "w1": "Experienced local team in Rotterdam.",
        "w2": "Direct coordination with premium manufacturers.",
        "w3": "Clean, professional, and transparent work.",
        "contact-title": "Service Area",
        "area-p": "We serve Rotterdam and all surrounding areas.",
        "contact-h3": "Ready to start?",
        "contact-p": "Contact us directly via WhatsApp or Facebook for a free quote.",
        "gdpr-text": "GDPR Compliance: This website does not use cookies, does not collect or store any personal data."
    },
    nl: {
        "hero-title": "Expert in Kozijnen & Deuren Montage in Rotterdam",
        "hero-subtitle": "Volledige service: deuren en kozijnen inmeten, leveren en monteren. Kwaliteit die staat als een huis.",
        "services-title": "Onze Diensten",
        "s1-t": "Installatie & Vervanging",
        "s1-p": "Complete demontage van oude kozijnen en vakkundige montage van nieuwe ramen en deuren.",
        "s2-t": "Inmeten",
        "s2-p": "Professionele metingen op locatie voor een perfecte pasvorm van elke bestelling.",
        "s3-t": "Transport & Levering",
        "s3-p": "Veilig transport van alle materialen direct naar uw locatie in Rotterdam en omgeving.",
        "why-badge": "Kwaliteit die staat als een huis",
        "why-title": "Waarom Kiezen voor DB?",
        "w1": "Ervaren lokaal team in Rotterdam.",
        "w2": "Directe coördinatie met partner fabrikanten.",
        "w3": "Schoon, professioneel en transparant werk.",
        "contact-title": "Werkgebied",
        "area-p": "Wij werken in Rotterdam en de omliggende regio's.",
        "contact-h3": "Klaar om te beginnen?",
        "contact-p": "Neem direct contact op via WhatsApp of Facebook voor een vrijblijvende offerte.",
        "gdpr-text": "AVG Naleving: Deze website gebruikt geen cookies en verzamelt of bewaart geen persoonsgegevens."
    }
};

function setLanguage(lang) {
    // Update texts
    for (let id in translations[lang]) {
        const element = document.getElementById(id);
        if (element) element.innerText = translations[lang][id];
    }

    // Update buttons style
    if (lang === 'nl') {
        document.getElementById('btn-nl').classList.add('text-blue-900', 'border-b-2', 'border-blue-900');
        document.getElementById('btn-nl').classList.remove('text-gray-500');
        document.getElementById('btn-en').classList.remove('text-blue-900', 'border-b-2', 'border-blue-900');
        document.getElementById('btn-en').classList.add('text-gray-500');
    } else {
        document.getElementById('btn-en').classList.add('text-blue-900', 'border-b-2', 'border-blue-900');
        document.getElementById('btn-en').classList.remove('text-gray-500');
        document.getElementById('btn-nl').classList.remove('text-blue-900', 'border-b-2', 'border-blue-900');
        document.getElementById('btn-nl').classList.add('text-gray-500');
    }
}
