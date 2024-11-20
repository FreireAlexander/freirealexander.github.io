import { icons } from "../scripts/utils.js";

export function topCardBlog(item, language, counter) {
    const title = item.title[language] ? item.title[language] : item.title[""];
    const type = item.type[language] ? item.type[language] : item.type[""];
    
    const cardContentBlog = `
        <a class="card--top" href="${item.href}${language}">
            <img 
                ${counter===0 ? 'fetchpriority="high"' : `` }
                class="card-image" 
                src="${item.href}coverPageSmall.webp" 
                alt="${title}"
            >
            <p>${title}</p>
        </a>
        <div class="status ${icons[type] ? icons[type][1] : icons[""][1] }">${type}</div>
    `;
    return cardContentBlog;
}

export function topCardProject(item, language, counter) {
    const title = item.title[language] ? item.title[language] : item.title[""];  
    const cardContentBlog = `    
            <a class="card--top" href="${item.href}${language}">
                <img 
                ${counter===0 ? 'fetchpriority="high"' : `` }
                class="card-image" 
                src="${item.href}coverPageSmall.webp" 
                alt="${title}"
                >
                <p>${title}</p>
            </a>
            `;
    return cardContentBlog;
}