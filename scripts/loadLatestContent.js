let allItems = []; // Variable para almacenar todos los datos cargados
let filteredItems = []; // Variable para almacenar los elementos filtrados
let currentIndex = 0; // Índice para el número de tarjetas cargadas inicialmente
const latest = 3; // Cantidad de tarjetas a cargar por vez

// Función para cargar el archivo JSON
async function loadJSON(jsonFile) {
    try {
        const response = await fetch(jsonFile); // Ruta al archivo JSON
        if (!response.ok) {
            console.log("Error al cargar")
            throw new Error('Error al cargar el archivo JSON');
        }
        const data = await response.json();
        allItems = data;
        if (jsonFile === "/data/blogs.json"){
            createCards(allItems.slice(0, latest),"latest-blogs");
        } if (jsonFile === "/data/portfolio.json"){
            createCards(allItems.slice(0, latest),"top-projects");
        }
    } catch (error) {
        console.error(error);
    }
}

// Función para generar las cards y añadirlas al contenedor
function createCards(items, section, clear = false) {
    const container = document.getElementById(section);
    
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
    const colors = ['yellow', 'blue', 'red', 'green', 'grey'];
    if (section === 'latest-blogs') {
        items.forEach(item => {
            const card = document.createElement('article');
            card.classList.add('card');
            card.innerHTML = `
                <figure class="card-cover">
                    <img src="${item.coverPage}" alt="${item.title}">
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
                    <a href="${item.href}" class="card-button">Look Full Page</a>
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
                    <img src="${item.coverPage}" alt="${item.title}">
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

// Cargar los datos cuando el documento esté listo
document.addEventListener('DOMContentLoaded', loadJSON("/data/blogs.json"));
document.addEventListener('DOMContentLoaded', loadJSON("/data/portfolio.json"));


