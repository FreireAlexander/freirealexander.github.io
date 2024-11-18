import { cardBlog, cardProject } from '../components/cards.js';
import { getLanguage, getPath, getJSONFilePath } from './utils.js';

let allItems = [];
let filteredItems = [];
let currentIndex = 0;
const increment = 3;
const path = getPath();
const language = getLanguage();
const jsonFile = getJSONFilePath();

function updateStickySectionPosition() {
    const header = document.getElementById('header');
    const stickySection = document.getElementById('search-container');
    const headerHeight = header.offsetHeight;
    const minWidth = 768;
    if (window.innerWidth > minWidth) {
        stickySection.style.top = `${headerHeight}px`;
    } else {
        stickySection.style.top = '0';
    }
}

async function setCardsPages() {
    try {
        const response = await fetch(jsonFile); // Ruta al archivo JSON
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        const data = await response.json();
        const show = data.filter((item)=>item.show);
        if (jsonFile.includes('portfolio.json')){
            allItems = show.sort((a, b) => new Date(b.lastUpdate) - new Date(a.lastUpdate));
        }else{
            allItems = show;
        }
        filteredItems = allItems;
        createCards(filteredItems.slice(0, increment)); 
        currentIndex = increment;
        toggleLoadMoreButton();
    } catch (error) {
        console.error(error);
    }
}

function createCards(items, clear = false) {
    const container = document.getElementById('cards-container');
    if (clear) {
        container.innerHTML = '';
    }
    if (items.length === 0 && currentIndex === 0) {
        container.innerHTML = '';
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
    if (path === 'blogs') {
        items.forEach(item => {
            const card = document.createElement('article');
            card.classList.add('card');
            const CardContent = cardBlog(item, language);
            card.innerHTML = CardContent;
            container.appendChild(card);
        });
    } else {
        items.forEach(item => {
            const card = document.createElement('article');
            card.classList.add('card');
            card.innerHTML = cardProject(item, language);
            container.appendChild(card);
        });
    }
}

function loadMoreCards() {
    const nextItems = filteredItems.slice(currentIndex, currentIndex + increment);
    createCards(nextItems);
    currentIndex += increment;
    toggleLoadMoreButton();
}

function toggleLoadMoreButton() {
    const translate = {
        "": "Load More Cards",
        es: "Cargar Más Tarjetas",
        it: "Caricare piú Cards"
    }
    const loadMoreButton = document.getElementById('load-more-button');
    if (currentIndex >= filteredItems.length) {
        loadMoreButton.style.display = 'none';
    } else {
        loadMoreButton.style.display = 'block';
        loadMoreButton.innerText = translate[language];
        console.log(loadMoreButton);
    }
}

// Función para filtrar las cards según el término de búsqueda y el filtro seleccionado
function filterCards(searchTerm, filter) {
    const dateInput = document.getElementById('date-input').value;
    const dateFilter = document.getElementById('date-filter').value;

    // Filtrado inicial por título, descripción o etiquetas
    filteredItems = allItems.filter(item => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const title = item.title[language] ? item.title[language] : item.title[""];
        const tags = item.tags[language] ? item.tags[language] : item.tags[""];
        const description = item.description[language] ? item.description[language] : item.description[""]; 

        const titleMatch = title.toLowerCase().includes(lowerCaseSearchTerm);
        const descriptionMatch = description.toLowerCase().includes(lowerCaseSearchTerm);
        const tagsMatch = tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm));

        return titleMatch || descriptionMatch || tagsMatch;
    });

    // Filtrado adicional por fecha si se selecciona "Date" y hay una fecha ingresada
    if (filter === 'date' && dateInput) {
        const filterDate = new Date(dateInput);

        filteredItems = filteredItems.filter(item => {
            const itemDate = new Date(item.publishDate + "T00:00:00-05:00").toLocaleDateString();
            if (dateFilter === 'on') {
                return itemDate.toDateString() === filterDate.toDateString();
            } else if (dateFilter === 'before') {
                return itemDate < filterDate;
            } else if (dateFilter === 'after') {
                return itemDate > filterDate;
            }
            return false;
        });
    }

    currentIndex = filteredItems.length < increment ? filteredItems.length : increment; // Reiniciar el índice de carga
    createCards(filteredItems.slice(0, currentIndex), true); // Limpiar el contenedor y mostrar tarjetas filtradas
    toggleLoadMoreButton(); // Mostrar u ocultar el botón de cargar más
}

// Actualizar la posición al cargar la página
window.addEventListener('load', updateStickySectionPosition);

// Actualizar la posición cuando se redimensiona la ventana
window.addEventListener('resize', updateStickySectionPosition);

// Cargar los datos cuando el documento esté listo
document.addEventListener('DOMContentLoaded', setCardsPages);

// Escuchar el clic en el botón de cargar más
const loadMoreButton = document.getElementById('load-more-button');
loadMoreButton.addEventListener('click', loadMoreCards);

// Escuchar los cambios en el campo de búsqueda
const searchInput = document.getElementById('search-input');
const searchFilter = document.getElementById('search-filter');
const dateInput = document.getElementById('date-input');
const dateFilter = document.getElementById('date-filter');

searchInput.addEventListener('input', () => {
    filterCards(searchInput.value, searchFilter.value);
});

searchFilter.addEventListener('change', () => {
    const isDateFilter = searchFilter.value === 'date';
    dateInput.style.display = isDateFilter ? 'inline-block' : 'none';
    dateFilter.style.display = isDateFilter ? 'inline-block' : 'none';
    filterCards(searchInput.value, searchFilter.value);
});

dateInput.addEventListener('input', () => {
    filterCards(searchInput.value, searchFilter.value);
});

dateFilter.addEventListener('change', () => {
    console.log("He Cambiado de Valor");
    filterCards(searchInput.value, searchFilter.value);
});