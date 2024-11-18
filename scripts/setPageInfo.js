import { projectInfo, BlogInfo } from '../components/pageInfo.js';
import { getJSONFilePath, getLanguage, icons } from './utils.js';

const jsonFile = getJSONFilePath();
const language = getLanguage();

async function loadSingleItemById() {
    const activePage = window.location.pathname;
    const itemId = activePage.split('/')[2];
    try {
        const response = await fetch(jsonFile);
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        const data = await response.json();
        const item = data.find(i => i.id === itemId);
        if (item) {
            if (jsonFile === "/data/blogs.json"){
                displayBlog(item, language);
            }else {
                displayProject(item, language);
            }
        } else {
            console.error(`No se encontró el ítem con ID ${itemId}`);
        }
    } catch (error) {
        console.error(error);
    }
}

function displayProject(item, language) {
    const title = item.title[language] ? item.title[language] : item.title[""];
    document.title = title;
    const container = document.getElementById('page-info'); // ID del contenedor donde mostrarás el ítem
    container.innerHTML = projectInfo(item, language);
}

function displayBlog(item, language) {
    const title = item.title[language] ? item.title[language] : item.title[""];
    document.title = title;
    const container = document.getElementById('page-info'); // ID del contenedor donde mostrarás el ítem
    container.innerHTML = BlogInfo(item, language);
}

document.addEventListener('DOMContentLoaded', loadSingleItemById());