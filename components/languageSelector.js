async function detectLanguage() {
    const activePage = window.location.pathname;
    const segments = activePage.slice(0,-1).split('/');
    const lastSegment = segments[segments.length - 1];
    const language = ['es', 'it'].includes(lastSegment) ? lastSegment : '';
    return language;
}

const language = await detectLanguage();

const translations = {
    '': {lang: "us", alt: "Select Language"},
    es: {lang: "es", alt: "Seleccionar Idioma"},
    it: {lang: "it", alt: "Scegliere Lingua"}
};

export async function setLanguageSelector() {
    const langSelector = `
    <section class="section">
    <label for="langSelector"><img src="/media/icons/tech/flag-${translations[language]["lang"]}-svgrepo-com.svg" alt="${translations[language]["alt"]}"></label>
        <select id="langSelector">
            <option value="" ${language === "" ? "selected" : ""}>English</option>
            <option value="es" ${language === "es" ? "selected" : ""}>Español</option>
            <option value="it" ${language === "it" ? "selected" : ""}>Italiano</option>
        </select>
    </section>
    `;
    return langSelector;
}