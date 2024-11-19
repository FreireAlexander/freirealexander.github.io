import { cardBlog, cardProject } from '../components/topCards.js';
import { icons, getLanguage, getJSONFilePath, getPath } from './utils.js';

let allItems = [];
let filteredItems = [];
const path = getPath();
const language = getLanguage();

async function setTopCards() {
    const jsonFile = getJSONFilePath();
    try {
        const response = await fetch(jsonFile);
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        const data = await response.json();
        allItems = data.filter((item)=>item.show);
        filteredItems =  allItems.filter((item) => item.top);
        createTopCards(filteredItems);
    } catch (error) {
        console.error(error);
    }
}

function createTopCards(items) {
    const container = document.getElementById('top-3');
    if (items.length === 0) {
        container.innerHTML = '';
        const noResultsMessage = document.createElement('div');
        noResultsMessage.classList.add('card');
        noResultsMessage.innerHTML = `
            <figure style="display: grid; place-items: center;">
                <img src="/media/icons/404-error.webp" alt="No results" style="width: 250px; height: 250px; object-fit: contain;">
            </figure>
            <h2 style="width: 100%; text-align: center;">NOTHING TO SHOW HERE</h2>
        `;
        container.appendChild(noResultsMessage);
        return;
    }
    if (path === 'blogs') {
        items.forEach(item => {
            const card = document.createElement('article');
            card.classList.add('article');
            const CardContent = cardBlog(item, language, icons);
            card.innerHTML = CardContent;
            container.appendChild(card);
        });
    } else {
        items.forEach(item => {
            const card = document.createElement('article');
            card.classList.add('portfolio');
            card.innerHTML = cardProject(item, language, icons);
            container.appendChild(card);
        });
    }
    if (items.length === 1){
        container.style = 'min-height: 350px';
    }
}

document.addEventListener('DOMContentLoaded', setTopCards);