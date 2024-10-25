// script.js

let allItems = []; // Variable para almacenar todos los datos cargados

// Función para cargar el archivo JSON
async function loadJSON() {
    try {
        const response = await fetch('/data/blogs.json'); // Ruta al archivo JSON
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        const data = await response.json();
        allItems = data; // Guardar los datos para el filtrado
        createCards(allItems); // Generar las cards iniciales
    } catch (error) {
        console.error(error);
    }
}

// script.js

// Función para generar las cards y añadirlas al contenedor
function createCards(items) {
    const container = document.getElementById('cards-container');
    container.innerHTML = ''; // Limpiar cualquier contenido previo

    if (items.length === 0) {
        // Mostrar mensaje de "No se encontraron resultados"
        const noResultsMessage = document.createElement('h3');
        noResultsMessage.textContent = 'No se encontraron resultados para la búsqueda actual.';
        noResultsMessage.classList.add('no-results-message');
        container.appendChild(noResultsMessage);
        return; // Salir de la función para no continuar con la generación de cards
    }

    items.forEach(item => {
        // Crear el elemento card
        const card = document.createElement('div');
        card.classList.add('card');

        // Agregar contenido al card
        card.innerHTML = `
            <figure class="card-cover">
                <img src="${item.coverPage}" alt="${item.title}">
            </figure>
            <div class="card-content">
                <h3>${item.title}</h3>
                <small>Por: ${item.author} - ${new Date(item.date).toLocaleDateString()}</small>
                <div class="card-tags">
                    ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
                </div>
                <p>${item.description}</p>
                <a href="${item.href}" class="card-link">Read more</a>
            </div>
        `;

        // Añadir la card al contenedor
        container.appendChild(card);
    });
}

// Función para filtrar las cards según el término de búsqueda y el filtro seleccionado
function filterCards(searchTerm, filter) {
    const filteredItems = allItems.filter(item => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        switch (filter) {
            case 'title':
                return item.title.toLowerCase().includes(lowerCaseSearchTerm);
            case 'tags':
                return item.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm));
            case 'date':
                return new Date(item.date).toLocaleDateString().includes(searchTerm);
            case 'all':
            default:
                // Buscar en título, descripción y etiquetas
                const titleMatch = item.title.toLowerCase().includes(lowerCaseSearchTerm);
                const descriptionMatch = item.description.toLowerCase().includes(lowerCaseSearchTerm);
                const tagsMatch = item.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm));
                return titleMatch || descriptionMatch || tagsMatch;
        }
    });

    createCards(filteredItems); // Volver a generar las cards con los elementos filtrados
}

// Cargar los datos cuando el documento esté listo
document.addEventListener('DOMContentLoaded', loadJSON);

// Escuchar los cambios en el campo de búsqueda
const searchInput = document.getElementById('search-input');
const searchFilter = document.getElementById('search-filter');

searchInput.addEventListener('input', () => {
    filterCards(searchInput.value, searchFilter.value);
});

// Escuchar los cambios en el filtro de búsqueda
searchFilter.addEventListener('change', () => {
    filterCards(searchInput.value, searchFilter.value);
});
