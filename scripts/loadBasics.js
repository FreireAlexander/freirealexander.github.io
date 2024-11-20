// En loadBasics.js
import { setHeaderMobile, setHeader } from '../components/headers.js';
import { setFooter } from '../components/footer.js';
import { setLanguageSelector } from '../components/languageSelector.js';
import { setBuyMeACoffe } from '../components/buyMeACoffe.js';
import { setContactForm } from '../components/contactForm.js';
import { setKeepExploring } from '../components/keepExploring.js';
import { getLanguage, getLanguageBack } from './utils.js';

const currentPage = window.location.pathname;
const language = ["/thanks/", "/complete/", "/404"].some(link => currentPage.startsWith(link)) ? getLanguageBack() : getLanguage();

function loadHeader() {
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
        const footerContent =  setFooter(language);
        footerElement.innerHTML = footerContent;
    } else {
        console.error('No se encontró el elemento con id "footer".');
    }
}

function loadLanguageSelector() {
    const languageElement = document.getElementById('lang-selector');
    if (languageElement) {
        const languageContent =  setLanguageSelector(language);
        languageElement.innerHTML = languageContent;
    } else {
        console.error('No se encontró el elemento con id "lang-selector".');
    }
}

function loadBuyMeACoffe(){
    const coffeElement = document.getElementById("buy-me-a-coffe");
    if (coffeElement){
        coffeElement.innerHTML = setBuyMeACoffe(language);
    }
}

function loadContactForm(){
    const coffeElement = document.getElementById("contact");
    if (coffeElement){
        coffeElement.innerHTML = setContactForm(language);
    }
}

function loadKeepExploring(){
    const coffeElement = document.getElementById("keep-exploring");
    if (coffeElement){
        coffeElement.innerHTML = setKeepExploring(language);
    }
}


document.addEventListener('DOMContentLoaded', loadHeader);
document.addEventListener('DOMContentLoaded', loadFooter);
document.addEventListener('DOMContentLoaded', loadBuyMeACoffe);
document.addEventListener('DOMContentLoaded', loadContactForm);
document.addEventListener('DOMContentLoaded', loadKeepExploring);
document.addEventListener('DOMContentLoaded', loadLanguageSelector);
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
