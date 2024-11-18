async function loadCode(filePath, elementId) {
    try {
        // Fetch el archivo de texto
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo: ${response.statusText}`);
        }
        // Obtener el contenido del archivo como texto
        const text = await response.text();

        // Buscar el elemento por su ID
        const element = document.getElementById(elementId);
        if (!element) {
            throw new Error(`Elemento con ID "${elementId}" no encontrado.`);
        }

        // Insertar el texto en el elemento
        element.textContent = text;
        
    } catch (error) {
        console.error(error.message);
    }
}
