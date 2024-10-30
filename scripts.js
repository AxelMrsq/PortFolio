document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('terminal-input');
    const output = document.querySelector('.output');
    const overlay = document.querySelector('.overlay');
    
    const commands = {
        help: 'Available commands list\nhelp - Show help\nabout - Informations about me\nprojects - My project\ncontact - How contact me\nhire - Hire me\n',
    };

    const displayCommand = (command) => {
        output.innerHTML += `<div class="command">\$ ${command}</div>`;
        if (commands[command]) {
            output.innerHTML += `<div class="result">${commands[command]}</div>`;
        } else if (['about', 'projects', 'contact'].includes(command)) {
            output.innerHTML += `<div class="result">Opening ${command}...</div>`;
            showPopup(command);
        } else if (command === 'hire') {
            output.innerHTML += `<div class="result">Opening mail client...</div>`;
            window.location.href = 'mailto:axel.mrsq@gmail.com';
        } else {
            output.innerHTML += `<div class="result">Commande non reconnue : ${command}</div>`;
        }
        output.scrollTop = output.scrollHeight;
    };

    const showPopup = (sectionId) => {
        document.getElementById(sectionId).style.display = 'block';
        overlay.style.display = 'block';
    };

    const hidePopup = () => {
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        overlay.style.display = 'none';
    };

    // Ferme le pop-up lorsqu’on clique sur l’overlay
    overlay.addEventListener('click', hidePopup);

    // Afficher le contenu de "help" par défaut à l'ouverture
    displayCommand('help');

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = input.value.trim();
            displayCommand(command);
            input.value = '';
        }
    });

    // Ajouter un événement focusout pour gérer le clic sur "Done"
    input.addEventListener('focusout', () => {
        const command = input.value.trim();
        if (command) {
            displayCommand(command);
            input.value = '';
        }
    });
});


const hidePopup = () => {
    // Masquer toutes les sections de pop-up
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    // Masquer complètement l'overlay
    overlay.style.display = 'none';
    overlay.style.opacity = '0';  // Assure que l'overlay est invisible

    // Retourner au terminal en scrollant et en redonnant le focus
    document.querySelector('.terminal').scrollIntoView({ behavior: 'smooth' });
    input.focus();
};



