let allItems = []; // Variable para almacenar todos los datos cargados
let filteredItems = []; // Variable para almacenar los elementos filtrados
let currentIndex = 0; // Índice para el número de tarjetas cargadas inicialmente
const increment = 3; // Cantidad de tarjetas a cargar por vez

// Función para determinar el archivo JSON según la ruta actual
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

// Función para cargar el archivo JSON
async function loadJSON() {
    const jsonFile = getJSONFilePath();
    try {
        const response = await fetch(jsonFile); // Ruta al archivo JSON
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        const data = await response.json();
        allItems = data; // Guardar los datos originales
        filteredItems = allItems; // Inicialmente, los elementos filtrados son todos los elementos
        createCards(filteredItems.slice(0, increment)); // Generar las primeras tarjetas
        currentIndex = increment; // Actualizar el índice
        toggleLoadMoreButton(); // Mostrar u ocultar el botón de cargar más
    } catch (error) {
        console.error(error);
    }
}

// Función para generar las cards y añadirlas al contenedor
function createCards(items, clear = false) {
    const container = document.getElementById('cards-container');
    
    if (clear) {
        container.innerHTML = ''; // Limpiar el contenedor si el parámetro clear es verdadero
    }

    if (items.length === 0 && currentIndex === 0) {
        // Mostrar mensaje de "No se encontraron resultados"
        container.innerHTML = ''; // Limpiar cualquier contenido previo
        const noResultsMessage = document.createElement('div');
        noResultsMessage.classList.add('card');
        noResultsMessage.innerHTML = `
            <h3>No Results</h3>
            <figure class="card-cover">
                <img src="/media/icons/404-error.webp" alt="No results">
            </figure>
        `;
        container.appendChild(noResultsMessage);
        return;
    }
    const path = getPath();
    if (path === 'blogs') {
        items.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <figure class="card-cover">
                    <img src="${item.coverPage}" alt="${item.title}">
                </figure>
                <div class="card-content">
                    <h3>${item.title}</h3>
                    <small>Por: ${item.author} - ${new Date(item.publishDate)}</small>
                    <div class="card-tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
                    </div>
                    <p>${item.description}</p>
                    <a href="${item.href}" class="card-link">Read more</a>
                </div>
            `;
            container.appendChild(card);
        });
    } else {
        items.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <figure class="card-cover">
                    <img src="${item.coverPage}" alt="${item.title}">
                </figure>
                <div class="card-content">
                    <h3>${item.title}</h3>
                    <small>Por: ${item.author} - ${new Date(item.publishDate)}</small>
                    <div class="card-tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
                    </div>
                    <p>${item.description}</p>
                    <a href="${item.href}" class="card-link">Read more</a>
                </div>
            `;
            container.appendChild(card);
        });
    }
}

// Función para manejar el botón de cargar más
function loadMoreCards() {
    const nextItems = filteredItems.slice(currentIndex, currentIndex + increment);
    createCards(nextItems); // Agregar las siguientes tarjetas sin borrar las existentes
    currentIndex += increment; // Actualizar el índice
    toggleLoadMoreButton(); // Mostrar u ocultar el botón de cargar más si no hay más tarjetas
}

// Función para mostrar u ocultar el botón de cargar más
function toggleLoadMoreButton() {
    const loadMoreButton = document.getElementById('load-more-button');
    if (currentIndex >= filteredItems.length) {
        loadMoreButton.style.display = 'none';
    } else {
        loadMoreButton.style.display = 'block';
    }
}

// Función para filtrar las cards según el término de búsqueda y el filtro seleccionado
function filterCards(searchTerm, filter) {
    const dateInput = document.getElementById('date-input').value;
    const dateFilter = document.getElementById('date-filter').value;

    // Filtrado inicial por título, descripción o etiquetas
    filteredItems = allItems.filter(item => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        const titleMatch = item.title.toLowerCase().includes(lowerCaseSearchTerm);
        const descriptionMatch = item.description.toLowerCase().includes(lowerCaseSearchTerm);
        const tagsMatch = item.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm));

        return titleMatch || descriptionMatch || tagsMatch;
    });

    // Filtrado adicional por fecha si se selecciona "Date" y hay una fecha ingresada
    if (filter === 'date' && dateInput) {
        const filterDate = new Date(dateInput);

        filteredItems = filteredItems.filter(item => {
            const itemDate = new Date(item.date);
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

// Cargar los datos cuando el documento esté listo
document.addEventListener('DOMContentLoaded', loadJSON);

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
    filterCards(searchInput.value, searchFilter.value);
});
