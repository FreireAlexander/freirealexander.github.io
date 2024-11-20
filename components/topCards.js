import { icons } from "../scripts/utils.js";

export function topCardBlog(item, language) {
    const title = item.title[language] ? item.title[language] : item.title[""];
    const type = item.type[language] ? item.type[language] : item.type[""];
    
    const cardContentBlog = `
        <a class="card--top" href="${item.href}${language}">
            <img
                class="card-image" 
                src="${item.href}coverPageSmall.webp" 
                alt="cover page for ${title}"
            >
            <p>${title}</p>
        </a>
        <div class="status ${icons[type] ? icons[type][1] : icons[""][1] }">${type}</div>
    `;
    return cardContentBlog;
}

export function topCardProject(item, language) {
    const title = item.title[language] ? item.title[language] : item.title[""];  
    const cardContentBlog = `    
            <a class="card--top" href="${item.href}${language}">
                <img
                class="card-image" 
                src="${item.href}coverPageSmall.webp" 
                alt="cover page for ${title}"
                >
                <p>${title}</p>
            </a>
            `;
    return cardContentBlog;
}