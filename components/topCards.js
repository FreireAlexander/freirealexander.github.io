export function cardBlog(item, language, iconsExport) {
    const title = item.title[language] ? item.title[language] : item.title[""];
    const type = item.type[language] ? item.type[language] : item.type[""];
    const cardContentBlog = `
        <a class="card--top" href="${item.href}${language}">
            <img src="${item.href}coverPageSmall.webp" alt="Cover Page">
            <p>${title}</p>
        </a>
        <div class="status ${iconsExport[type] ? iconsExport[type][1] : iconsExport[""][1] }">${type}</div>
    `;
    return cardContentBlog;
}

export function cardProject(item, language) {
    const title = item.title[language] ? item.title[language] : item.title[""];     
    const cardContentBlog = `    
            <a class="card--top" href="${item.href}${language}">
                <img src="${item.href}coverPageSmall.webp" alt="Cover Page">
                <p>${title}</p>
            </a>
            `;
    return cardContentBlog;
}