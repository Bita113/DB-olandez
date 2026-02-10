// Toggle Meniu Mobil
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Inchide meniul dupa click pe link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

function setLanguage(lang) {
    // ... (aceeași logică de traducere ca înainte)
    
    // Update UI Butoane Limba
    const isNl = lang === 'nl';
    document.getElementById('btn-nl').className = isNl ? 'px-2 py-1 rounded-full btn-active' : 'px-2 py-1 rounded-full btn-inactive';
    document.getElementById('btn-en').className = isNl ? 'px-2 py-1 rounded-full btn-inactive' : 'px-2 py-1 rounded-full btn-active';
}

// Render Portfolio Fix (Vertical pe mobil)
function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    grid.innerHTML = projects.map(p => `
        <div class="bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
            <div class="flex flex-col gap-2">
                <div class="relative">
                    <img src="${p.before}" class="rounded-lg w-full h-48 object-cover">
                    <span class="absolute top-2 left-2 bg-black text-white text-[8px] px-2 py-1 rounded">BEFORE</span>
                </div>
                <div class="relative">
                    <img src="${p.after}" class="rounded-lg w-full h-48 object-cover border-2 border-blue-500">
                    <span class="absolute top-2 left-2 bg-blue-600 text-white text-[8px] px-2 py-1 rounded">AFTER</span>
                </div>
            </div>
            <div class="mt-3 px-2">
                <h4 class="font-bold text-sm">${p.title}</h4>
                <p class="text-[10px] text-blue-600">${p.location}</p>
            </div>
        </div>
    `).join('');
}
