const translate = {
    "":{
        title: "Keep Exploring",
        intro: ` There are a lot of 
            interesting Blogs and Projects
        `,
        buttonProjects: "Take a look on projects",
        buttonBlogs: "Explore Blogs"
    },
    es:{
        title: "Sigue Explorando Más Contenido",
        intro: ` Existen Muchos Blogs y Proyectos
        Interesantes para seguir viendo
        `,
        buttonProjects: "Dale una ojeada a los proyectos",
        buttonBlogs: "Explorar Blogs y Noticias"
    },
    it:{
        title: "Invite me a coffe",
        intro: ` Ci sono molti blog e 
        progetti interessanti
        `,
        buttonProjects: "Da uno sguardo ai progetti",
        buttonBlogs: "Leggi Blogs e notizie"   
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