// En loadBasics.js
import { setHeaderMobile, setHeader } from '../components/headers.js';
import { setFooter } from '../components/footer.js';
import { setLanguageSelector } from '../components/languageSelector.js';

function getLanguage() {
    const activePage = window.location.pathname;
    const splitActivePage = activePage.slice(0,-1).split('/');
    const lastSegment = splitActivePage[splitActivePage.length-1];
    const result = ["es", "it"].includes(lastSegment) ? lastSegment : "";
    return result;
}

function loadHeader() {
    const language = getLanguage();
    const headerMobileElement = document.getElementById('header-mobile');
    const headerElement = document.getElementById('header');

    if (headerMobileElement) {
        const headerMobileContent = setHeaderMobile(language);
        headerMobileElement.innerHTML = headerMobileContent;
    } else {
        console.error('No se encontró el elemento con id "header-mobile".');
    }

    if (headerElement) {
        const headerContent = setHeader(language);
        headerElement.innerHTML = headerContent;
    } else {
        console.error('No se encontró el elemento con id "header".');
    }
}

function loadFooter() {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
        const footerContent =  setFooter();
        footerElement.innerHTML = footerContent;
    } else {
        console.error('No se encontró el elemento con id "footer".');
    }
}

function loadLanguageSelector() {
    const languageElement = document.getElementById('lang-selector');
    if (languageElement) {
        const languageContent =  setLanguageSelector();
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
        const activePage = window.location.pathname;
        const splitActivePage = activePage.slice(0,-1).split('/');
        const lastSegment = splitActivePage[splitActivePage.length-1];
        const result = ["es", "it"].includes(lastSegment) ? lastSegment : "";
        if (result === ""){
            window.location.pathname = activePage + selectedLanguage;
        } else{
            window.location.pathname = activePage.slice(0,-3) + selectedLanguage;
        }
    });
});
