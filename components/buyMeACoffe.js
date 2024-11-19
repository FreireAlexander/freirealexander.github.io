const translate = {
    "":{
        title: "Invite me a coffe",
        intro: `I invite you to buy me a coffe, 
                a shot of coffe helps me to bring 
                more and more interestings projects 
                and content`,
        button: "Buy me a coffe "
    },
    es:{
        title: "Invitame un Café",
        intro: `Invitame un café, una copa de café 
                me brindaría las energías necesarias para continuar
                desarrollando más y más proyectos y muchísimos más
                contenido        
        `,
        button: "Invitar Café"   
    },
    it:{
        title: "Invite me a coffe",
        intro: `Vi invito a offrirmi un caffè, 
        un caffè mi aiuta a realizzare 
        progetti sempre più interessanti 
        e contenuti`,
        button: "Invitare al caffè"   
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