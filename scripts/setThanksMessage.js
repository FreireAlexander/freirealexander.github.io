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
        typeWriter();
    }
    const textElement = document.getElementById("thanks-completed");
    const roles = [
                "Merci :)",
                "Obrigado :)",
                "Grazie :)",
                "Gracias :)",
                "Danke :)",
                "gràcies :)",
                "ありがとう :)"
            ];
    const colors = {
                "light_blue": "#0099FF",
                "red": "#ff2600",
                "green": "#00ff62",
                "yellow": "#fff200"
            };
    createTypewriterAnimation(textElement, roles, colors);
});