export const icons = {
    "": ["\udb81\udcf9", "green"],
    //Status for Projects
    "archived": ["\uf187", "gray"],
    "development": ["\ueea7", "green"],
    "en desarrollo": ["\ueea7", "green"],
    "produzione": ["\ueea7", "green"],
    "released": ["\uf164", "green"],
    //Types of Articles
    "news": ["\uf1ea", "yellow"],
    "blog": ["\uef36", "red"],
    "article": ["\uedc2", "blue"],
    //Tags for everyone
    "civil engineering": ["&#xf1ad;","red"],
    "ingeniería civil": ["&#xf1ad;","red"],
    "ingegneria civile": ["&#xf1ad;","red"],
    "cad": ["&#xF0821;","blue"],
    "design": ["\udb83\udf49", "yellow"],
    "diseño": ["\udb83\udf49", "yellow"],
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
    // Civil Engineering softwares
    "civil 3d": ["\ueb2f", "blue"],
    "autocad": ["&#xF0821;","red"],

}

export function getLanguage() {
    const activePage = window.location.pathname;
    const splitActivePage = activePage.slice(0,-1).split('/');
    const lastSegment = splitActivePage[splitActivePage.length-1];
    const result = ["es", "it"].includes(lastSegment) ? lastSegment : "";
    return result;
}

export function getLanguageBack() {
    let userLanguage = navigator.language || navigator.userLanguage;
    userLanguage = userLanguage.split('-')[0];
    const result = ["es", "it"].some(lang => userLanguage.startsWith(lang)) ? userLanguage : "";
    return result;
}

export function getPath() {
    const path = window.location.pathname;
    if (path.includes('/blogs/')) {
        return 'blogs'; // Ruta al archivo JSON para la página de blogs
    } else if (path.includes('/portfolio/')) {
        return 'portfolio'; // Ruta al archivo JSON para la página de portafolio
    }
    return null; // En caso de que no coincida con ninguna de las rutas
}

export function getJSONFilePath() {
    const path = window.location.pathname;
    if (path.includes('/blogs/')) {
        return '/data/blogs.json'; // Ruta al archivo JSON para la página de blogs
    } else if (path.includes('/portfolio/')) {
        return '/data/portfolio.json'; // Ruta al archivo JSON para la página de portafolio
    }
    return null; // En caso de que no coincida con ninguna de las rutas
}