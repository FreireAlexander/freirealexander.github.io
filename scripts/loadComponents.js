// Función para cargar contenido desde un archivo HTML en un elemento específico
function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la carga del archivo: ' + response.status);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

// Cargar el header y el footer al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    loadHTML('header', '/components/header.html');
    loadHTML('footer', '/components/footer.html');
});
