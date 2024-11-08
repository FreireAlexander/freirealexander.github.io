let allItems = []; // Variable para almacenar todos los datos cargados
let filteredItems = []; // Variable para almacenar los elementos filtrados
let currentIndex = 0; // Índice para el número de tarjetas cargadas inicialmente
const latest = 3; // Cantidad de tarjetas a cargar por vez
var icons = {
    //Status for Projects
    "archived": ["\uf187", "gray"],
    "development": ["\ueea7", "green"],
    "released": ["\uf164", "green"],
    //Types of Articles
    "news": ["\uf1ea", "yellow"],
    "blog": ["\uef36", "red"],
    "article": ["\uedc2", "blue"],
    //Tags for everyone
    "civil engineering": ["&#xf1ad;","red"],
    "cAD": ["&#xF0821;","blue"],
    "design": ["\udb83\udf49", "yellow"],
    "software": ["\udb82\udcb9", "green"],
    "web design": ["\uebeb","blue"],
    "coding": ["\uf121","blue"],
    "learning": ["\udb85\udec9","green"],
    // Programming language
    "python": ["\ued1b", "yellow"],
    "hTML": ["\ue736", "red"],
    "cSS": ["\ue749", "blue"],
    "javascript": ["\ue781", "yellow"],
    "pHP": ["\ue608", "blue"],
    "go": ["\ue627", "blue"],
    "lisp": ["\ue6b0", "blue"],
    "autolisp": ["\ue6b0", "blue"],
    //CMS
    "joomla": ["\ue741", "red"],
    "wordpress": ["\uf19a", "blue"],

}
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
                    <img src="${item.href}/coverPageSmall.webp" alt="${item.title}">
                    <div class="status ${icons[item.type] ? icons[item.type][1] : "blue" }">
                        <span class="icon--nf">${icons[item.type] ? icons[item.type][0] : "" }</span>
                        <p>${item.type}</p>
                    </div>
                </figure>
                <div class="card-content">
                    <small class="update"> Last Revision: ${new Date(item.lastUpdate + "T00:00:00-05:00").toLocaleDateString()}</small>
                    <h3>${item.title}</h3>
                    <div class="card-data">
                        <small> By <strong>${item.author}</strong> first published on ${new Date(item.publishDate + "T00:00:00-05:00").toLocaleDateString()}</small>
                    </div>
                    <div class="card-tags">
                        ${item.tags.map(tag => `
                            <p class="tag ${icons[tag] ? icons[tag][1] : "blue"}">
                                <span class="icon--nf">
                                    ${icons[tag] ? icons[tag][0] : ""}
                                </span>
                                ${tag}
                            </p>
                            `).join('')}
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
                    <div class="status ${icons[item.status] ? icons[item.status][1] : "blue" }">
                        <span class="icon--nf">${icons[item.status] ? icons[item.status][0] : "" }</span>
                        <p>${item.status}</p>
                    </div>
                </figure>
                <div class="card-content">
                    <small class="update"> Last Update: ${new Date(item.lastUpdate + "T00:00:00-05:00").toLocaleDateString()}</small>
                    <h3><span>${item.title}</span><span>${item.version}</span></h3>
                    <div class="card-data">
                        <small> By <strong>${item.author}</strong> on ${new Date(item.publishDate + "T00:00:00-05:00").toLocaleDateString()}</small>
                    </div>
                    <div class="card-tags">
                        ${item.tags.map(tag => `
                            <p class="tag ${icons[tag] ? icons[tag][1] : "blue"}">
                                <span class="icon--nf">
                                    ${icons[tag] ? icons[tag][0] : ""}
                                </span>
                                ${tag}
                            </p>
                            `).join('')}
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


