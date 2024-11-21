const translate = {
    "":{
        title: "Buy me a coffe",
        intro: `A shot of coffe brings me energy for
                creating more interesting projects and content`,
        button: "Send coffe"
    },
    es:{
        title: "Invitame un Café",
        intro: `Una taza de café 
                me brinda la energía necesaria para 
                desarrollar proyectos y contenido 
                interesante        
        `,
        button: "Invitar Café"   
    },
    it:{
        title: "Offritemi un caffè",
        intro: ` 
        Un caffè mi aiuta a realizzare 
        progetti e contenuti sempre più interessanti 
        `,
        button: "Offrire un caffè"   
    }
}

export function setBuyMeACoffe(language){
    const content = `
        <h2>${translate[language].title}</h2>
        <p>${translate[language].intro}</p>
        <div class="center" id="buy-me-a-coffe">
            <figure style="display: grid; place-items: center; width: 100%;">
                <img src="/media/icons/dogLaptop.webp" alt="Dog browsing on internet" style="width: 280px; height: 280px; border-radius: 8px; object-fit: cover;">
            </figure>
            <div class="flex" style="justify-content: center; padding: 12px;">
                <a href="https://www.paypal.com/donate/?hosted_button_id=VFUWTH3EM5TFE" class="button-primary container--icon">
                    ${translate[language].button}
                    <span class="icon--nf" >&#xe26f;</span>
                </a>
            </div>
        </div>
    `;
    return content;
}