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
    const cardContentBlog = ` `;
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
                    <p class="author">By ${item.author}</p>
                    <p>Since ${new Date(item.firstPublishDate + "T00:00:00-05:00").toLocaleDateString()}</p>
                    <p>Last update ${new Date(item.firstPublishDate + "T00:00:00-05:00").toLocaleDateString()}</p>
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