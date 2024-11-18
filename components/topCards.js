import { icons } from '../scripts/utils.js';

export function cardBlog(item, language) {
    const title = item.title[language] ? item.title[language] : item.title[""];
    const type = item.type[language] ? item.type[language] : item.type[""];
    const cardContentBlog = `
        <a href="${item.href}${language}">
            <img fetchpriority="high" src="${item.href}coverPageSmall.webp" alt="Cover Page">
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