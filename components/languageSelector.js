async function detectLanguage() {
    const activePage = window.location.pathname;
    const segments = activePage.slice(0,-1).split('/');
    const lastSegment = segments[segments.length - 1];
    const language = ['es', 'it'].includes(lastSegment) ? lastSegment : '';
    return language;
}

const language = await detectLanguage();

export async function setLanguageSelector() {
    const langSelector = `
    <section class="section">
        <select id="langSelector">
            <option value="" ${language === "" ? "selected" : ""}>English</option>
            <option value="es" ${language === "es" ? "selected" : ""}>Español</option>
            <option value="it" ${language === "it" ? "selected" : ""}>Italiano</option>
        </select>
    </section>
    `;
    return langSelector;
}