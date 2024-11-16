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

export function cardBlog(item, language) {
    const title = item.title[language] ? item.title[language] : item.title[""];
    const type = item.type[language] ? item.type[language] : item.type[""];
    const cardContentBlog = `
        <a href="${item.href}${language}">
            <img fetchpriority="high" src="${item.href}coverPage.webp" alt="Cover Page">
            <h4>${title}</h4>
            <div class="status ${icons[type] ? icons[type][1] : icons[""][1] }">${type}</div>
        </a>
    `;
    return cardContentBlog;
}

export function cardProject(item, language) {
    const title = item.title[language] ? item.title[language] : item.title[""];     
    const cardContentBlog = `    
            <a href="${item.href}${language}">
                <img fetchpriority="high" src="${item.href}coverPageSmall.webp" alt="Cover Page">
                <h4>${title}</h4>
            </a>
            `;
    return cardContentBlog;
}