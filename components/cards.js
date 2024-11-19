var icons = {
    "": ["\udb81\udcf9", "green"],
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
    "cad": ["&#xF0821;","blue"],
    "design": ["\udb83\udf49", "yellow"],
    "software": ["\udb82\udcb9", "green"],
    "web design": ["\uebeb","blue"],
    "coding": ["\uf121","blue"],
    "learning": ["\udb85\udec9","green"],
    // Programming language
    "python": ["\ued1b", "yellow"],
    "html": ["\ue736", "red"],
    "css": ["\ue749", "blue"],
    "javascript": ["\ue781", "yellow"],
    "php": ["\ue608", "blue"],
    "go": ["\ue627", "blue"],
    "lisp": ["\ue6b0", "blue"],
    "autolisp": ["\ue6b0", "blue"],
    //CMS
    "joomla": ["\ue741", "red"],
    "wordpress": ["\uf19a", "blue"],

}
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

export function cardBlog(item, language) {
    const title = item.title[language] ? item.title[language] : item.title[""];
    const type = item.type[language] ? item.type[language] : item.type[""];
    const tags = item.tags[language] ? item.tags[language] : item.tags[""];
    const description = item.description[language] ? item.description[language] : item.description[""];    
    const cardContentBlog = `
        <figure class="card-cover">
            <img src="${item.href}coverPageSmall.webp" alt="${title}">
            <div class="status ${icons[type] ? icons[type][1] : icons[""][1] }">
                <span class="icon--nf">${icons[type] ? icons[type][0] : icons[""][0] }</span>
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
                    <p class="tag ${icons[tag] ? icons[tag][1] : icons[""][1]}">
                        <span class="icon--nf">
                            ${icons[tag] ? icons[tag][0] : icons[""][0]}
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

export function cardProject(item, language) {
    const title = item.title[language] ? item.title[language] : item.title[""];
    const status = item.status[language] ? item.status[language] : item.status[""];
    const tags = item.tags[language] ? item.tags[language] : item.tags[""];
    const description = item.description[language] ? item.description[language] : item.description[""];     
    const cardContentBlog = `
                <figure class="card-cover">
                    <img src="${item.href}coverPageSmall.webp" alt="${title}">
                    <div class="status ${icons[status] ? icons[status][1] : icons[""][1] }">
                        <span class="icon--nf">${icons[status] ? icons[status][0] : icons[""][0] }</span>
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
                            <p class="tag ${icons[tag] ? icons[tag][1] : icons[""][1]}">
                                <span class="icon--nf">
                                    ${icons[tag] ? icons[tag][0] : icons[""][0]}
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