window.onload = function(){
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
    document.getElementById("copyright-year").textContent = currentYear;

    const activePage = window.location.pathname;
    const navLinks = document.querySelectorAll('.mobile-menu-item');
    console.log(navLinks);
    navLinks.forEach(link => {
        // Comparamos usando `startsWith` en caso de que haya subpáginas o parámetros
        const linkHref = link.getAttribute('href');

        // Comparación más estricta para evitar coincidencias incorrectas
        if (activePage === linkHref || activePage.startsWith(linkHref + '/') || activePage.startsWith(linkHref + '/index.html')) {
            link.classList.add('active');
        }
    });
}