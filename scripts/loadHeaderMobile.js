import setHeaderMobile from '../components/headerMobile.js'; // Ajusta la ruta según tu estructura de carpetas

async function loadHeader() {
    const headerElement = document.getElementById('header-mobile');
    if (headerElement) {
        headerElement.innerHTML = await setHeaderMobile();  // Carga el contenido del headerMobile
    } else {
        console.error('No se encontró el elemento con id "header-mobile".');
    }
}

document.addEventListener('DOMContentLoaded', loadHeader);