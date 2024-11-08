var icons = {
    "default": ["", "blue"],
    "blog": ["", "blue"],
    "development": ["&#xf1ad;","green"],
    "civil engineering": ["&#xf1ad;","green"],
}
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
            if (jsonFile === "/data/blogs.json"){
                displayBlog(item);
            }else {
                displayProject(item);
            }
        } else {
            console.error(`No se encontró el ítem con ID ${itemId}`);
        }
    } catch (error) {
        console.error(error);
    }
}

// Función para mostrar el ítem en el contenedor
function displayProject(item) {
    document.title = `${item.title}`;
    const container = document.getElementById('page-info'); // ID del contenedor donde mostrarás el ítem
    const colors = ['yellow', 'blue', 'red', 'green', 'grey'];
    container.innerHTML = `
        <section id="page-cover">
            <img 
                fetchpriority="high" 
                class="cover-page" 
                src="${item.href}coverPageSmall.webp" 
                alt="${item.title}"
                srcset="
                    ${item.href}coverPageSmall.webp 425w,
                    ${item.href}coverPage.webp 768w,
                    ${item.href}coverPageBig.webp 1024w
                "
                sizes="
                    (max-width: 480px) 425px,
                    (max-width: 768px) 768px,
                    1024px
                "
            >
            <div class="status ${icons[item.status] ? icons[item.status][1] : "blue" }">
                <span class="icon--nf">${icons[item.status] ? icons[item.status][0] : "" }</span>
                <h3>${item.status}</h3>
            </div>
        </section>
        <section id="page-data">
            <section class="section">
                <h1 class="title">${item.title} - ${item.version}</h1>
                <div>
                    <p class="author">By ${item.author}</p>
                    <p>Since ${new Date(item.firstPublishDate + "T00:00:00-05:00").toLocaleDateString()}</p>
                    <p>Last update ${new Date(item.firstPublishDate + "T00:00:00-05:00").toLocaleDateString()}</p>
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
                    <div class="breadcrumb">
                        <a href="/">Home</a>
                        <p>  / </p>
                        <a href="/portfolio/">Portfolio</a>
                        <p>  / </p>
                        <p>${item.title}</p>
                    </div>
                </div>
            </section>
        </section>
    `;
}

function displayBlog(item) {
    document.title = `${item.title}`;
    const container = document.getElementById('page-info'); // ID del contenedor donde mostrarás el ítem
    const colors = ['yellow', 'blue', 'red', 'green', 'grey'];
    container.innerHTML = `
        <section id="page-cover">
            <img 
                fetchpriority="high" 
                class="cover-page" 
                src="${item.href}coverPageSmall.webp" 
                alt="${item.title}"
                srcset="
                    ${item.href}coverPageSmall.webp 425w,
                    ${item.href}coverPage.webp 768w,
                    ${item.href}coverPageBig.webp 1024w
                "
                sizes="
                    (max-width: 480px) 425px,
                    (max-width: 768px) 768px,
                    1024px
                "
            >
            <div class="status ${icons[item.type] ? icons[item.type][1] : "blue" }">
                <span class="icon--nf">${icons[item.type] ? icons[item.type][0] : "" }</span>
                <h3>${item.type}</h3>
            </div>
        </section>
        <section id="page-data">
            <section class="section">
                <h1 class="title">${item.title} </h1>
                <div>
                    <p class="author">By ${item.author}</p>
                    <p>Since ${new Date(item.firstPublishDate + "T00:00:00-05:00").toLocaleDateString()}</p>
                    <p>Last update ${new Date(item.firstPublishDate + "T00:00:00-05:00").toLocaleDateString()}</p>
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
                    <div class="breadcrumb">
                        <a href="/">Home</a>
                        <p>  / </p>
                        <a href="/blogs/">Blogs & News</a>
                        <p>  / </p>
                        <p>${item.title}</p>
                    </div>
                </div>
            </section>
        </section>
    `;
}
