// Función para determinar el archivo JSON según la ruta actual
function getJSONFilePath() {
    const path = window.location.pathname;
    if (path.includes('/blogs/')) {
        return '/data/blogs.json';
    } else if (path.includes('/portfolio/')) {
        return '/data/portfolio.json';
    }
    return null;
}

// Función para cargar un ítem específico basado en su ID
async function loadSingleItemById(itemId) {
    const jsonFile = getJSONFilePath();
    try {
        const response = await fetch(jsonFile);
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        const data = await response.json();
        
        // Encontrar el ítem con el ID proporcionado
        const item = data.find(i => i.id === itemId);
        
        if (item) {
            displayItem(item); // Mostrar el ítem si se encuentra
        } else {
            console.error(`No se encontró el ítem con ID ${itemId}`);
        }
    } catch (error) {
        console.error(error);
    }
}

// Función para mostrar el ítem en el contenedor
function displayItem(item) {
    const container = document.getElementById('page-info'); // ID del contenedor donde mostrarás el ítem
    const colors = ['yellow', 'blue', 'red', 'green', 'grey'];
    container.innerHTML = `
        <section id="page-cover" class="section">
            <img fetchpriority="high" class="cover-page" src="${item.href}/coverPageSmall.webp" alt="${item.title}">
        </section>
        <section id="page-data" class="section">
            <h1 class="title">${item.title}</h1>
            <div class="status ${item.status} "> ${item.status} </div>
            <div>
                <p class="author">Author: ${item.author}</p>
                <p class="publish">Publish date: ${new Date(item.publishDate + "T00:00:00-05:00").toLocaleDateString()}</p>
                <p class="card-tags">
                    ${item.tags.map((tag, index) => {
                        // Asigna el color correspondiente de la lista (si se excede, vuelve al inicio)
                        const color = colors[index % colors.length];
                        return `<span class="tag ${color}">${tag}</span>`;
                    }).join(' ')}
                </p>
            </div>
        </section>
    `;
}
