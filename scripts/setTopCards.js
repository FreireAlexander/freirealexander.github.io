import { topCardBlog, topCardProject } from '../components/topCards.js';
import { getLanguage, getJSONFilePath } from './utils.js';

let filteredItems = [];
const language = getLanguage();
const jsonFile = getJSONFilePath();

async function setTopCards() {
    try {
        const response = await fetch(jsonFile);
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        const data = await response.json();
        filteredItems =  data.filter((item) => item.top && item.show);
        if (jsonFile.includes('/portfolio.json')){
            console.log("Displaying Projects TOP");
            displayTopPortfolio(filteredItems, language);
        } else{
            console.log("Displaying BLOGS TOP")
            displayTopBlogs(filteredItems, language);
        }
    } catch (error) {
        console.error(error);
    }
}

function displayTopPortfolio(items, language){
    const container = document.getElementById('top-3');
    items.forEach(item => {
        const card = document.createElement('article');
        card.classList.add('portfolio');
        card.innerHTML = topCardProject(item, language);
        container.appendChild(card);
    });
}

function displayTopBlogs(items, language){
    const container = document.getElementById('top-3');
    items.forEach(item => {
        const card = document.createElement('article');
        card.classList.add('article');
        card.innerHTML = topCardBlog(item, language);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', setTopCards);