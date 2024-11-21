const translate = {
    "":{
        title: "Keep Exploring More Content",
        intro: ` 
            There are many interesting Blogs and Projects
             in different topics that could catch your 
             attention and get you hooked, so I invite you 
             to continue to see much more content on the website.
        `,
        buttonProjects: "Take a look on Projects",
        buttonBlogs: "Explore Blogs & News"
    },
    es:{
        title: "Sigue Explorando Más Contenido",
        intro: ` Hay muchos Blogs y Proyectos interesantes 
        en diversas temáticas que podrían llamar tu atención 
        y engancharte, así que te invito a seguir viendo mucho 
        más contenido en la pagina web
        `,
        buttonProjects: "Dale un vistazo a los Proyectos",
        buttonBlogs: "Explorar Blogs y Noticias"
    },
    it:{
        title: "Continua ad Esplorare Altri Contenuti",
        intro: `  
                Ci sono molti blog e progetti interessanti 
                su diversi argomenti che potrebbero attirare 
                la vostra attenzione e appassionarvi, quindi 
                vi invito a continuare a vedere molti più contenuti 
                sul sito
        `,
        buttonProjects: "Date un'occhiata ai Progetti",
        buttonBlogs: "Scopri Blogs e Notizie"   
    }
}

export function setKeepExploring(language){
    let translation = translate[language] ? translate[language] : translate[""];
    const content = `
        <h2>${translation.title}</h2>
            <p>${translation.intro}</p>
            <div class="flex">
                <a href="/portfolio/" class="button-primary">
                ${translation.buttonProjects}
                </a>
                <a href="/blogs/" class="button-secondary">
                ${translation.buttonBlogs}
                </a>
            </div>
    `;
    return content;
}