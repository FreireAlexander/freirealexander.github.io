const translate = {
    "":{
        title: " Let's get in contact Now ",
        name: "Name",
        yourName: "Your Name",
        email: "Email",
        yourEmail: "youremail@email.com",
        message: "Leave your message",
        yourMessage: `Feel free to write anything you want to share, I'll be glad to read and get in contact as soon as possible...`,        
        button: "Send Message"
    },
    es:{
        title: " Pongámonos en contacto ",
        name: "Nombre",
        yourName: "Tu Nombre",
        email: "Email",
        yourEmail: "tuemail@email.com",
        message: "Deja tu mensaje",
        yourMessage: "Siéntete libre de escribir cualquier cosa que quieras compartir, estaré encantado de leerte y ponerme en contacto contigo lo antes posible...",
        button: "Enviar Mensaje"  
    },
    it:{
        title: " Mettiamoci in contatto ora ",
        name: "Nome",
        yourName: "Tuo Nome",
        email: "Email",
        yourEmail: "latuaemail@email.com",
        message: "Lasciate il vostro messaggio",
        yourMessage: `Sentitevi liberi di scrivere qualsiasi cosa vogliate condividere, sarò lieto di leggervi e di mettermi in contatto al più presto...`,
        button: "Invia il Messagio" 
    }
}

export function setContactForm(language){
    let translation = translate[language] ? translate[language] : translate[""];
    const content = `
        <h2>${translation.title}</h2>
        <form 
            id="contact-form" 
            class="contact-form" 
            action="https://formsubmit.co/freirealexander0214+website@gmail.com" 
            method="POST"
            >
            <label for="name">${translation.name}</label>
            <input type="text" id="name" name="name" required autocomplete="name" placeholder="${translation.yourName}" required>
            <label for="email">${translation.email}</label>
            <input type="email" id="email" name="email" required autocomplete="email" placeholder="${translation.yourEmail}" required>
            <label  for="message">${translation.message}</label>
            <textarea class="textarea" id="message" name="message" placeholder="${translation.yourMessage}" required></textarea>
            <input type="hidden" name="_next" value="https://freirealexander.top/thanks/">
            <input type="text" name="_honey" style="display:none">
            <input type="hidden" name="_subject" value="New submission from home page!">
            <input type="hidden" name="_autoresponse" value="Thank you for your message. We will be in contact as soon as possible, have a nice day &#128075;">
            <button type="submit" id="button--send" class="button-primary container--icon"><span class="icon--nf send">&#xf1d8;</span>${translation.button}</button>
        </form>
    `;
    return content;
}