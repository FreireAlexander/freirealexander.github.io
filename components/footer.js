export function setFooter(language) {
    const translate = {
        signature: {
            "": "Design by ",
            "es": "Diseñado por ",
            "it": "Design di "
        } 
    };
    const footer = `
        <section class="brand">
            <div class="logo">
                <p style="font-family: 'Times New Roman', Times, serif;">F</p>
            </div>
            <div>
                <p>Freire</p>
                <p>Palomino</p>
            </div>
        </section>
        <p class="copyright">
            Copyrights ${ new Date().getFullYear() } <sup class="icon--nf">&#xf1f9;</sup>
        </p>
        <section class="socials">
            <a href="https://www.linkedin.com/in/freirealexander/" class="icon--nf">
                &#xf08c;
            </a>
            <a href="https://github.com/FreireAlexander"  class="icon--nf">
                &#xf09b;
            </a>
            <a href="https://www.youtube.com/channel/UCx2OMBd9f3XKPjedSKJAPqw" class="icon--nf" style="font-size: 2.8rem;">
                &#xf16a;
        </a>
        </section>
        <section class="signature">
            <p>${translate.signature[language]} Freire Alexander Palomino Palma</p>
        </section>
    `;
    return footer;
}