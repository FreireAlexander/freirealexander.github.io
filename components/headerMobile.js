// /components/headerMobile.js
const activePage = window.location.pathname;
async function setActiveClass(href) {
    if (href === activePage || activePage.startsWith(href) && activePage !== '/') {
        return " active";
    } else if (['/', '/es/'].includes(href)) {
        return " active";
    } else {
        return "";
    }
}

async function setHeaderMobile() {
    const homeClass = await setActiveClass("/");
    const portfolioClass = await setActiveClass("/portfolio/");
    const blogsClass = await setActiveClass("/blogs/");
    const freireClass = await setActiveClass("/freire/");

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

export default setHeaderMobile;
