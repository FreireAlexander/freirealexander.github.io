function updateStickySectionPosition() {
    const header = document.getElementById('header');
    const stickySection = document.getElementById('search-container');
    const headerHeight = header.offsetHeight;
    const minWidth = 768; // Ancho mínimo para aplicar el comportamiento

    if (window.innerWidth > minWidth) {
        // Solo aplica si el ancho de la ventana es mayor que el ancho mínimo
        stickySection.style.top = `${headerHeight}px`;
    } else {
        // Restablece la posición si la pantalla es más pequeña
        stickySection.style.top = '0';
    }
}

// Actualizar la posición al cargar la página
window.addEventListener('load', updateStickySectionPosition);

// Actualizar la posición cuando se redimensiona la ventana
window.addEventListener('resize', updateStickySectionPosition);

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
            <figure>
                <img src="/media/icons/404-error.webp" alt="No results" style="width: 250px; height: 250px; object-fit: contain;">
            </figure>
        `;
        container.appendChild(noResultsMessage);
        return;
    }
    const path = getPath();
    const colors = ['yellow', 'blue', 'red', 'green', 'grey'];
    if (path === 'blogs') {
        items.forEach(item => {
            const card = document.createElement('article');
            card.classList.add('card');
            card.innerHTML = `
                <figure class="card-cover">
                    <img src="${item.href}/coverPageSmall.webp" alt="${item.title}">
                    <div class="status ${item.type}"> ${item.type} </div>
                </figure>
                <div class="card-content">
                    <small class="update"> Last Revision: ${new Date(item.lastUpdate + "T00:00:00-05:00").toLocaleDateString()}</small>
                    <h3>${item.title}</h3>
                    <div class="card-data">
                        <small> By <strong>${item.author}</strong> first published on ${new Date(item.publishDate + "T00:00:00-05:00").toLocaleDateString()}</small>
                    </div>
                    <div class="card-tags">
                        ${item.tags.map((tag, index) => {
                            // Asigna el color correspondiente de la lista (si se excede, vuelve al inicio)
                            const color = colors[index % colors.length];
                            return `<span class="tag ${color}">${tag}</span>`;
                        }).join(' ')}
                    </div>
                    <div class="card-description">
                        <p>${item.description}</p>
                    </div>
                    <a href="${item.href}" class="card-button">Explore Article</a>
                </div>
            `;
            container.appendChild(card);
        });
    } else {
        items.forEach(item => {
            const card = document.createElement('article');
            card.classList.add('card');
            card.innerHTML = `
                <figure class="card-cover">
                    <img src="${item.href}/coverPageSmall.webp" alt="${item.title}">
                    <div class="status ${item.status} "> ${item.status} </div>
                </figure>
                <div class="card-content">
                    <small class="update"> Last Update: ${new Date(item.lastUpdate + "T00:00:00-05:00").toLocaleDateString()}</small>
                    <h3><span>${item.title}</span><span>${item.version}</span></h3>
                    <div class="card-data">
                        <small> By <strong>${item.author}</strong> on ${new Date(item.publishDate + "T00:00:00-05:00").toLocaleDateString()}</small>
                    </div>
                    <div class="card-tags">
                        ${item.tags.map((tag, index) => {
                            // Asigna el color correspondiente de la lista (si se excede, vuelve al inicio)
                            const color = colors[index % colors.length];
                            return `<span class="tag ${color}">${tag}</span>`;
                        }).join(' ')}
                    </div>
                    <div class="card-description">
                        <p>${item.description}</p>
                    </div>
                    <a href="${item.href}" class="card-button">Explore Project</a>
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


