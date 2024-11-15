// headers.js
const activePage = window.location.pathname;
// Traducciones para los headers en diferentes idiomas
const translations = {
    '': { home: "Home", portfolio: "Portfolio", blogs: "Blogs & News", me: "About me" },
    es: { home: "Inicio", portfolio: "Portafolio", blogs: "Blogs y Noticias", me: "Sobre mí" },
    it: { home: "Home", portfolio: "Progetti", blogs: "Blog e Notizie", me: "Su di me" }
};

async function setActiveClass(href) {
    if (activePage === href || activePage.startsWith(href + '/') || activePage.startsWith(href + '/es')) {
        return " active";
    } else {
        return "";
    }
}


const portfolioClass = await setActiveClass("/portfolio");
const blogsClass = await setActiveClass("/blogs");
const aboutMeClass = await setActiveClass("/about-me");

export async function setHeaderMobile(language) {
    const homeClass = await setActiveClass(`/${language}`);
    const { home, portfolio, blogs, me } = translations[language];
    const headerMobile = `
        <nav class="menu">
            <ul>
                <li>
                    <a href="/${language}" class="mobile-menu-item${homeClass}">
                        <figure>
                            <img src="/media/icons/home.webp" alt="Home mobile icon">
                        </figure>
                        <p>${home}</p>
                    </a>
                </li>
                <li>
                    <a href="/portfolio/${language}" class="mobile-menu-item${portfolioClass}">
                        <figure>
                            <img src="/media/icons/portfolio.webp" alt="Portfolio mobile icon">
                        </figure>
                        <p>${portfolio}</p>
                    </a>
                </li>
                <li>
                    <a href="/blogs/${language}" class="mobile-menu-item${blogsClass}">
                        <figure>
                            <img src="/media/icons/blogs.webp" alt="Blogs mobile icon">
                        </figure>
                        <p>${blogs}</p>
                    </a>
                </li>
                <li>
                    <a href="/about-me/${language}" class="mobile-menu-item${aboutMeClass}">
                        <figure>
                            <img src="/media/icons/info.webp" alt="More info icon">
                        </figure>
                        <p>${me}</p>
                    </a>
                </li>
            </ul>
        </nav>
    `;
    return headerMobile;
}

export async function setHeader(language) {
    const homeClass = await setActiveClass(`/${language}`);
    const { home, portfolio, blogs, me } = translations[language];
    const header = `
        <section class="section">
            <a href="/${language}">
                <section class="brand">
                    <div class="logo">
                        <p style="font-family: 'Times New Roman', Times, serif;">F</p>
                    </div>
                    <div>
                        <p>Freire</p>
                        <p>Palomino</p>
                    </div>
                </section>
            </a>
            <nav class="header-menu">
                <ul>
                    <li><a class="header-item${homeClass}" href="/${language}">${home}</a></li>
                    <li><a class="header-item${portfolioClass}" href="/portfolio/${language}/">${portfolio}</a></li>
                    <li><a class="header-item${blogsClass}" href="/blogs/${language}/">${blogs}</a></li>
                    <li><a class="header-item${aboutMeClass}" href="/about-me/${language}/">${me}</a></li>
                </ul>
            </nav>
        </section>
    `;
    return header;
}
