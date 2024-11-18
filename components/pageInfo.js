import { icons } from "../scripts/utils.js";

const translate = {
    "": {
        lastUpdate: "Last Update ",
        lastRevision: "Last Revision:", 
        firstPublishedOn: "First published on "
    },
    "es": {
        lastUpdate: "Ultima Actualización ",
        lastRevision: "Ultima Revisión:", 
        firstPublishedOn: "Publicado por primera vez el"
    },
    "it": {
        lastUpdate: "Ultima Actualizazione ",
        lastRevision: "Ultima Revisione:", 
        firstPublishedOn: "primo rilascio il"
    }
}

export function BlogInfo(item, language) {
    const title = item.title[language] ? item.title[language] : item.title[""];
    const status = item.type[language] ? item.type[language] : item.type[""];
    const tags = item.tags[language] ? item.tags[language] : item.tags[""];    
    const cardContentBlog = `
        <section id="page-cover">
            <img 
                fetchpriority="high" 
                class="cover-page" 
                src="${item.href}coverPageSmall.webp" 
                alt="${title}"
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
            <div class="status ${icons[status] ? icons[status][1] : icons[status][1]}">
                <span class="icon--nf">${icons[status] ? icons[status][0] : icons[status][0]}</span>
                <h3>${status}</h3>
            </div>
        </section>
        <section id="page-data">
            <section class="section">
                <h1 class="title">${title}</h1>
                <div>
                    <p class="author"> ${item.author}</p>
                    <p>${translate[language].firstPublishedOn} ${new Date(item.publishDate + "T00:00:00-05:00").toLocaleDateString()}</p>
                    <p>Last update ${new Date(item.lastUpdate + "T00:00:00-05:00").toLocaleDateString()}</p>
                    <div class="card-tags">
                        ${tags.map(tag => `
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
                        <p>${title}</p>
                    </div>
                </div>
            </section>
        </section>
    `;
    return cardContentBlog;
}

export function projectInfo(item, language) {
    const title = item.title[language] ? item.title[language] : item.title[""];
    const status = item.status[language] ? item.status[language] : item.status[""];
    const tags = item.tags[language] ? item.tags[language] : item.tags[""];    
    const cardContentBlog = `
        <section id="page-cover">
            <img 
                fetchpriority="high" 
                class="cover-page" 
                src="${item.href}coverPageSmall.webp" 
                alt="${title}"
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
            <div class="status ${icons[status] ? icons[status][1] : icons[status][1]}">
                <span class="icon--nf">${icons[status] ? icons[status][0] : icons[status][0]}</span>
                <h3>${status}</h3>
            </div>
        </section>
        <section id="page-data">
            <section class="section">
                <h1 class="title">${title} - ${item.version}</h1>
                <div>
                    <p class="author"> ${item.author}</p>
                    <p>${translate[language].firstPublishedOn} ${new Date(item.firstPublishDate + "T00:00:00-05:00").toLocaleDateString()}</p>
                    <p>${translate[language].lastUpdate} ${new Date(item.firstPublishDate + "T00:00:00-05:00").toLocaleDateString()}</p>
                    <div class="card-tags">
                        ${tags.map(tag => `
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
                        <p>${title}</p>
                    </div>
                </div>
            </section>
        </section>
    `;
    return cardContentBlog;
}