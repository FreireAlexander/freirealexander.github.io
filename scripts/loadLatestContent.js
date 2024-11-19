import { cardBlog, cardProject } from '../components/cards.js';
import { icons, getLanguage } from './utils.js';

let allItems = [];
let currentIndex = 0;
const latest = 3; 
const language = getLanguage();

async function loadLatestContent(jsonFile) {
    try {
        const response = await fetch(jsonFile); // Ruta al archivo JSON
        if (!response.ok) {
            console.error("Error al cargar")
            throw new Error('Error al cargar el archivo JSON');
        }
        const data = await response.json();
        allItems = data.filter((item)=> item.show);
        if (jsonFile === "/data/blogs.json"){
            createCards(allItems.slice(0, latest),"latest-blogs");
        } if (jsonFile === "/data/portfolio.json"){
            allItems = allItems.sort((a, b) => new Date(b.lastUpdate) - new Date(a.lastUpdate));
            createCards(allItems.slice(0, latest),"top-projects");
        }
    } catch (error) {
        console.error(error);
    }
}

async function createCards(items, section, clear = false) {
    const container = document.getElementById(section);
    if (clear) {
        container.innerHTML = ''; // Limpiar el contenedor si el parámetro clear es verdadero
    }
    if (items.length === 0 && currentIndex === 0) {
        container.innerHTML = '';
        const noResultsMessage = document.createElement('div');
        noResultsMessage.classList.add('card');
        noResultsMessage.innerHTML = `
            <figure>
                <img src="/media/icons/404-error.webp" alt="No results" style="width: 250px; height: 250px; object-fit: contain;">
            </figure>
        `;
        container.appendChild(noResultsMessage);
        return;
    }
    if (section === 'latest-blogs') {
        items.forEach(item => {
            const card = document.createElement('article');
            card.classList.add('card');
            const CardContent = cardBlog(item, language, icons);
            card.innerHTML = CardContent;
            container.appendChild(card);
        });
    } else {
        items.forEach(item => {
            const card = document.createElement('article');
            card.classList.add('card');
            card.innerHTML = cardProject(item, language, icons);
            container.appendChild(card);
        });
    }
}

// Cargar los datos cuando el documento esté listo
document.addEventListener('DOMContentLoaded', loadLatestContent("/data/blogs.json"));
document.addEventListener('DOMContentLoaded', loadLatestContent("/data/portfolio.json"));


