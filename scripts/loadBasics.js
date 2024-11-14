// En loadBasics.js
import { setHeaderMobile, setHeader } from '../components/headers.js';
import { setFooter } from '../components/footer.js';
import { setLanguageSelector } from '../components/languageSelector.js';

function detectLanguage() {
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

async function loadHeader() {
    const language = detectLanguage();
    const headerMobileElement = document.getElementById('header-mobile');
    const headerElement = document.getElementById('header');

    if (headerMobileElement) {
        const headerMobileContent = await setHeaderMobile(language);
        headerMobileElement.innerHTML = headerMobileContent;
    } else {
        console.error('No se encontró el elemento con id "header-mobile".');
    }

    if (headerElement) {
        const headerContent = await setHeader(language);
        headerElement.innerHTML = headerContent;
    } else {
        console.error('No se encontró el elemento con id "header".');
    }
}

async function loadFooter() {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
        const footerContent = await setFooter();
        footerElement.innerHTML = footerContent;
    } else {
        console.error('No se encontró el elemento con id "footer".');
    }
}

async function loadLanguageSelector() {
    const languageElement = document.getElementById('lang-selector');
    if (languageElement) {
        const languageContent = await setLanguageSelector();
        languageElement.innerHTML = languageContent;
    } else {
        console.error('No se encontró el elemento con id "lang-selector".');
    }
}

document.addEventListener('DOMContentLoaded', loadHeader);
document.addEventListener('DOMContentLoaded', loadFooter);
document.addEventListener('DOMContentLoaded', loadLanguageSelector);

// Agregar el selector de idioma
document.addEventListener('DOMContentLoaded', () => {
    const langSelector = document.getElementById('langSelector');
    langSelector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        const activePage = window.location.pathname.slice(0,-1);
        console.log("valor seleccionado");
        console.log(selectedLanguage);
        if (!activePage.endsWith("")){
            const nextPage = activePage+"/"+selectedLanguage;
            console.log("sgte pagina");
            console.log(nextPage);
        } else{
            const nextPage = activePage+"/"+selectedLanguage;
            console.log("sgte pagina");
            console.log(nextPage);
        }


        // Falta Logica
        // window.location.pathname = '/';
    });
});
