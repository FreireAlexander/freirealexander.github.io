const translate = {
    "": {
        lastRevision: "Last Revision:", 
        firstPublishedOn: "first published on ",
        buttonBlog: "Keep Reading",
        buttonProject: "Explore Project"
    },
    "es": {
        lastRevision: "Ultima Revisión:", 
        firstPublishedOn: "primera publicación el",
        buttonBlog: "Seguir Leyendo",
        buttonProject: "Explorar Proyecto"
    },
    "it": {
        lastRevision: "Ultima Revisione:", 
        firstPublishedOn: "primo rilascio il",
        buttonBlog: "Dare Uno Sguardo",
        buttonProject: "Scoprire di píu"
    }
}

export function cardBlog(item, language, iconsExport) {
    const title = item.title[language] ? item.title[language] : item.title[""];
    const type = item.type[language] ? item.type[language] : item.type[""];
    const tags = item.tags[language] ? item.tags[language] : item.tags[""];
    const description = item.description[language] ? item.description[language] : item.description[""];    
    const cardContentBlog = `
        <figure class="card-cover">
            <img src="${item.href}coverPageSmall.webp" alt="${title}">
            <div class="status ${iconsExport[type] ? iconsExport[type][1] : iconsExport[""][1] }">
                <span class="icon--nf">${iconsExport[type] ? iconsExport[type][0] : iconsExport[""][0] }</span>
                <p>${type}</p>
            </div>
        </figure>
        <div class="card-content">
            <small class="update"> ${translate[language].lastRevision} ${new Date(item.lastUpdate + "T00:00:00-05:00").toLocaleDateString()}</small>
            <h3>${title}</h3>
            <div class="card-data">
                <small><strong>${item.author}</strong> ${translate[language].firstPublishedOn} ${new Date(item.publishDate + "T00:00:00-05:00").toLocaleDateString()}</small>
            </div>
            <div class="card-tags">
                ${tags.map(tag => `
                    <p class="tag ${iconsExport[tag] ? iconsExport[tag][1] : iconsExport[""][1]}">
                        <span class="icon--nf">
                            ${iconsExport[tag] ? iconsExport[tag][0] : iconsExport[""][0]}
                        </span>
                        ${tag}
                    </p>
                    `).join('')}
            </div>
            <div class="card-description">
                <p>${description}</p>
            </div>
            <a href="${item.href}${language}" class="card-button">${translate[language].buttonBlog}</a>
        </div>
    `;
    return cardContentBlog;
}

export function cardProject(item, language, iconsExport) {
    const title = item.title[language] ? item.title[language] : item.title[""];
    const status = item.status[language] ? item.status[language] : item.status[""];
    const tags = item.tags[language] ? item.tags[language] : item.tags[""];
    const description = item.description[language] ? item.description[language] : item.description[""];     
    const cardContentBlog = `
                <figure class="card-cover">
                    <img src="${item.href}coverPageSmall.webp" alt="${title}">
                    <div class="status ${iconsExport[status] ? iconsExport[status][1] : iconsExport[""][1] }">
                        <span class="icon--nf">${iconsExport[status] ? iconsExport[status][0] : iconsExport[""][0] }</span>
                        <p>${status}</p>
                    </div>
                </figure>
                <div class="card-content">
                    <small class="update"> ${translate[language].lastRevision} ${new Date(item.lastUpdate + "T00:00:00-05:00").toLocaleDateString()}</small>
                    <h3><span>${title}</span><span>${item.version}</span></h3>
                    <div class="card-data">
                        <small><strong>${item.author}</strong> ${translate[language].firstPublishedOn} ${new Date(item.publishDate + "T00:00:00-05:00").toLocaleDateString()}</small>
                    </div>
                    <div class="card-tags">
                        ${tags.map(tag => `
                            <p class="tag ${iconsExport[tag] ? iconsExport[tag][1] : iconsExport[""][1]}">
                                <span class="icon--nf">
                                    ${iconsExport[tag] ? iconsExport[tag][0] : iconsExport[""][0]}
                                </span>
                                ${tag}
                            </p>
                            `).join('')}
                    </div>
                    <div class="card-description">
                        <p>${description}</p>
                    </div>
                    <a href="${item.href}${language}" class="card-button">${translate[language].buttonProject}</a>
                </div>
            `;
    return cardContentBlog;
}