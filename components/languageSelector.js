async function detectLanguage() {
    const activePage = window.location.pathname;
    const segments = activePage.slice(0,-1).split('/');
    const lastSegment = segments[segments.length - 1];
    const language = ['es', 'en', 'it'].includes(lastSegment) ? lastSegment : '';
    console.log("detect Language");
    console.log("Segments");
    console.log(segments);
    console.log("Last Segment");
    console.log(lastSegment);
    console.log("Language");
    console.log(language);
    return language;
}

const language = await detectLanguage();

export async function setLanguageSelector() {
    const langSelector = `
        <select id="langSelector">
            <option value="es" ${language === "es" ? "selected" : ""}>Español</option>
            <option value="" ${language === "" ? "selected" : ""}>English</option>
            <option value="it" ${language === "it" ? "selected" : ""}>Italiano</option>
        </select>
    `;
    return langSelector;
}