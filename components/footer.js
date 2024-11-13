export async function setFooter() {
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
        <section class="copyright">
            <p class="icon--nf" style="text-align: center;">Copyrights &#xf1f9;</p>
            <span id="copyright-year">2024</span>
        </section>
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
    `;
    return footer;
}