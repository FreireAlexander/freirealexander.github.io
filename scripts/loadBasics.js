import { setHeaderMobile, setHeader } from '../components/headers.js'; // Ajusta la ruta según tu estructura de carpetas
import { setFooter } from '../components/footer.js';

async function loadHeader() {
    const headerMobileElement = document.getElementById('header-mobile');
    const headerElement = document.getElementById('header');

    if (headerMobileElement) {
        const headerMobileContent = await setHeaderMobile();
        headerMobileElement.innerHTML = headerMobileContent;
    } else {
        console.error('No se encontró el elemento con id "header-mobile".');
    }

    if (headerElement) {
        const headerContent = await setHeader();
        headerElement.innerHTML = headerContent;
    } else {
        console.error('No se encontró el elemento con id "header".');
    }
}

async function loadFooter() {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
        const footerMobileContent = await setFooter();
        footerElement.innerHTML = footerMobileContent;
    } else {
        console.error('No se encontró el elemento con id "header-mobile".');
    }
}

document.addEventListener('DOMContentLoaded', loadHeader);
document.addEventListener('DOMContentLoaded', loadFooter);
