import { cardBlog, cardProject } from '../components/topCards.js';
import { getLanguage } from './getLanguage.js';

let allItems = []; // Variable para almacenar todos los datos cargados
let filteredItems = []; // Variable para almacenar los elementos filtrados

function getJSONFilePath() {
    const path = window.location.pathname;

    if (path.includes('/blogs/')) {
        return '/data/blogs.json'; // Ruta al archivo JSON para la página de blogs
    } else if (path.includes('/portfolio/')) {
        return '/data/portfolio.json'; // Ruta al archivo JSON para la página de portafolio
    }
    return null; // En caso de que no coincida con ninguna de las rutas
}

function getPath() {
    const path = window.location.pathname;
    if (path.includes('/blogs/')) {
        return 'blogs'; // Ruta al archivo JSON para la página de blogs
    } else if (path.includes('/portfolio/')) {
        return 'portfolio'; // Ruta al archivo JSON para la página de portafolio
    }
    return null; // En caso de que no coincida con ninguna de las rutas
}

async function loadJSON() {
    const jsonFile = getJSONFilePath();
    try {
        const response = await fetch(jsonFile); // Ruta al archivo JSON
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        const data = await response.json();
        allItems = data; // Guardar los datos originales
        filteredItems =  allItems.filter((item) => item.top);
        createCards(filteredItems); // Generar las primeras tarjetas
    } catch (error) {
        console.error(error);
    }
}

async function createCards(items, clear = false) {
    const container = document.getElementById('top-3');
    if (clear) {
        container.innerHTML = ''; // Limpiar el contenedor si el parámetro clear es verdadero
    }
    if (items.length === 0) {
        // Mostrar mensaje de "No se encontraron resultados"
        container.innerHTML = ''; // Limpiar cualquier contenido previo
        const noResultsMessage = document.createElement('div');
        noResultsMessage.classList.add('card');
        noResultsMessage.innerHTML = `
            <figure style="display: grid; place-items: center;">
                <img src="/media/icons/404-error.webp" alt="No results" style="width: 250px; height: 250px; object-fit: contain;">
            </figure>
            <h2 style="width: 100%; text-align: center;">NOTHING TO SHOW HERE</h2>
        `;
        container.appendChild(noResultsMessage);
        return;
    }
    const path = getPath();
    const language = await getLanguage();
    
    if (path === 'blogs') {
        items.forEach(item => {
            const card = document.createElement('article');
            card.classList.add('article');
            const CardContent = cardBlog(item, language);
            card.innerHTML = CardContent;
            container.appendChild(card);
        });
    } else {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = items[0].href + "coverPageSmall.webp";
        document.head.appendChild(link);
        items.forEach(item => {
            const card = document.createElement('article');
            card.classList.add('portfolio');
            card.innerHTML = cardProject(item, language);
            container.appendChild(card);
        });
    }
}

// Cargar los datos cuando el documento esté listo
document.addEventListener('DOMContentLoaded', loadJSON);