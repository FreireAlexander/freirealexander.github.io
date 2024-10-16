// Index.js
document.addEventListener("DOMContentLoaded", function() {
    function createTypewriterAnimation(element, roles, colors) {
        const colorNames = Object.keys(colors);
        let roleIndex = 0;
        let charIndex = 0;
        let previousColorIndex = -1;

        function getRandomColorIndex() {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * colorNames.length);
            } while (newIndex === previousColorIndex);
            return newIndex;
        }

        function typeWriter() {
            if (charIndex < roles[roleIndex].length) {
                element.textContent += roles[roleIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 100); // Ajusta el intervalo de tiempo para la velocidad de escritura
            } else {
                setTimeout(changeText, 2000); // Espera antes de borrar el texto y cambiar al siguiente rol
            }
        }

        function changeText() {
            roleIndex = (roleIndex + 1) % roles.length;
            charIndex = 0;
            element.textContent = '';
            const colorIndex = getRandomColorIndex();
            element.style.color = colors[colorNames[colorIndex]];
            previousColorIndex = colorIndex;
            typeWriter();
        }

        // Iniciar la animación de la máquina de escribir
        typeWriter();
    }

    // Ejemplo de uso
    const textElement = document.querySelector(".animated-text");
    const roles = [
        "a Civil Engineer",
        "a Web Developer",   
        "a CAD Technician",
        "a Top Professional"
      ];
    const colors = {
        "blue": "#0068BD",
        "red": "#ff6f69",
        "yellow": "#ffeead",
        "green": "#96ceb4"
    };

    createTypewriterAnimation(textElement, roles, colors);
});