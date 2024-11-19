const translate = {
    searchBy:{
        "": "Search in ...",
        es: "Buscar en ...",
        it: "Cercare in ..."
    },
    all:{
        "": "All",
        es: "Todo",
        it: "Tutti"
    },
    title:{
        "": "Title",
        es: "Título",
        it: "Titulo"
    },
    tag:{
        "": "tag",
        es: "etiquetas",
        it: "tag"
    },
    description:{
        "": "resume",
        es: "resumen",
        it: "riassunto"
    },
    date:{
        "": "Date",
        es: "Fecha",
        it: "Data"
    },
    on:{
        "": "on",
        es: "el",
        it: "il"
    },
    after:{
        "": "after",
        es: "despues del",
        it: "dopo"
    },
    before:{
        "": "before",
        es: "antes del",
        it: "prima di"
    }
}

export function searchBar(language){
    const searchBy = translate.searchBy[language] ? translate.searchBy[language] : translate.searchBy[""];
    const all = translate.all[language] ? translate.all[language] : translate.all[""];
    const title = translate.title[language] ? translate.title[language] : translate.title[""];
    const tag = translate.tag[language] ? translate.tag[language] : translate.tag[""];
    const description = translate.description[language] ? translate.description[language] : translate.description[""];
    const date = translate.date[language] ? translate.date[language] : translate.date[""];
    const on = translate.on[language] ? translate.on[language] : translate.on[""];
    const after = translate.after[language] ? translate.after[language] : translate.after[""];
    const before = translate.before[language] ? translate.before[language] : translate.before[""];
    const content = `
        <div class="search-container">
                    <input type="text" id="search-input" placeholder="${searchBy}" class="search-bar">
                    <select id="search-filter" class="search-filter" aria-label="search-filter">
                        <option value="all">${all}</option>
                        <option value="title">${title}</option>
                        <option value="tags">${tag}</option>
                        <option value="description">${description}</option>
                        <option value="date">${date}</option>
                    </select>
                    <select id="date-filter" class="date-filter" style="display: none;" aria-label="date-filter">
                        <option value="on">${on}</option>
                        <option value="before">${before}</option>
                        <option value="after">${after}</option>
                    </select>
                    <input type="date" id="date-input" class="date-input" style="display: none;">
                    
        </div>
    `;
    return content;
}