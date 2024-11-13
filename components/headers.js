const activePage = window.location.pathname;
console.log(activePage);

async function setActiveClass(href) {
    if (activePage === href || activePage.startsWith(href + '/') || activePage.startsWith(href + '/index.html')) {
        return " active";
    } else {
        return "";
    }
}

const homeClass = await setActiveClass("/");
const portfolioClass = await setActiveClass("/portfolio/");
const blogsClass = await setActiveClass("/blogs/");
const freireClass = await setActiveClass("/freire/");

export async function setHeaderMobile() {
    const headerMobile = `
        <nav class="menu">
            <ul>
                <li>
                    <a href="/" class="mobile-menu-item${homeClass}">
                        <figure>
                            <img src="/media/icons/home.webp" alt="Home mobile icon">
                        </figure>
                        <p>Home</p>
                    </a>
                </li>
                <li>
                    <a href="/portfolio/" class="mobile-menu-item${portfolioClass}">
                        <figure>
                            <img src="/media/icons/portfolio.webp" alt="Portfolio mobile icon">
                        </figure>
                        <p>Portfolio</p>
                    </a>
                </li>
                <li>
                    <a href="/blogs/" class="mobile-menu-item${blogsClass}">
                        <figure>
                            <img src="/media/icons/blogs.webp" alt="Blogs mobile icon">
                        </figure>
                        <p>Blogs & News</p>
                    </a>
                </li>
                <li>
                    <a href="/freire/" class="mobile-menu-item${freireClass}">
                        <figure>
                            <img src="/media/icons/info.webp" alt="More info icon">
                        </figure>
                        <p>Me</p>
                    </a>
                </li>
            </ul>
        </nav>
    `;
    return headerMobile;
}

export async function setHeader() {
    const header = `
        <section class="section">
            <a href="/">
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
                    <li>
                        <a class="header-item${homeClass}" href="/">Home</a>
                    </li>
                    <li>
                        <a class="header-item${portfolioClass}" href="/portfolio/">Portfolio</a>
                    </li>
                    <li>
                        <a class="header-item${blogsClass}" href="/blogs/">Blogs and News</a>
                    </li>
                    <li>
                        <a class="header-item${freireClass}" href="/freire/">About me</a>
                    </li>
                </ul>
            </nav>    
        </section>
    `;
    return header;
}
