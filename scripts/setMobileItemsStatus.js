window.onload = function(){
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
    document.getElementById("copyright-year").textContent = currentYear;

    const activePage = window.location.pathname;
    const navLinks = document.querySelectorAll('.mobile-menu-item');
    const headerMenuLinks = document.querySelectorAll('.header-menu > ul > li > a');
    navLinks.forEach(link => {
        // Comparamos usando `startsWith` en caso de que haya subpáginas o parámetros
        const linkHref = link.getAttribute('href');

        // Comparación más estricta para evitar coincidencias incorrectas
        if (activePage === linkHref || activePage.startsWith(linkHref + '/') || activePage.startsWith(linkHref + '/index.html')) {
            link.classList.add('active');
        }
    });
    headerMenuLinks.forEach(link => {
        // Comparamos usando `startsWith` en caso de que haya subpáginas o parámetros
        const linkHref = link.getAttribute('href');

        // Comparación más estricta para evitar coincidencias incorrectas
        if (activePage === linkHref || activePage.startsWith(linkHref + '/') || activePage.startsWith(linkHref + '/index.html')) {
            link.classList.add('active');
        }
    });
}