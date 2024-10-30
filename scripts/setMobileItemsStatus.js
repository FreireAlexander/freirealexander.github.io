async function setMobileItemsStatus() {
    const activePage = window.location.pathname;
    const navLinks = document.querySelectorAll('.mobile-menu-item');
    const headerMenuLinks = document.querySelectorAll('.header-menu > ul > li > a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (activePage === linkHref || activePage.startsWith(linkHref + '/') || activePage.startsWith(linkHref + '/index.html')) {
            link.classList.add('active');
        }
    });

    headerMenuLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (activePage === linkHref || activePage.startsWith(linkHref + '/') || activePage.startsWith(linkHref + '/index.html')) {
            link.classList.add('active');
        }
    });
}
