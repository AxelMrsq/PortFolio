document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('terminal-input');
    const output = document.querySelector('.output');

    const commands = {
        help: 'Available commands list\nhelp - Show help\nabout - Informations about me\nprojects - My project\ncontact - How contact me\nhire - Hire me\n',
    };

    const displayCommand = (command) => {
        output.innerHTML += `<div class="command">\$ ${command}</div>`;
        if (commands[command]) {
            output.innerHTML += `<div class="result">${commands[command]}</div>`;
        } else if (['about', 'projects', 'contact'].includes(command)) {
            output.innerHTML += `<div class="result">Navigating to ${command}...</div>`;
            document.getElementById(command).scrollIntoView({ behavior: 'smooth' });
        } else if (command === 'hire') {
            output.innerHTML += `<div class="result">Opening mail client...</div>`;
            window.location.href = 'mailto:axel.mrsq@gmail.com';
        } else {
            output.innerHTML += `<div class="result">Commande non reconnue : ${command}</div>`;
        }
        output.scrollTop = output.scrollHeight;
    };

    // Afficher le contenu de "help" par défaut à l'ouverture
    displayCommand('help');

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = input.value.trim();
            displayCommand(command);
            input.value = '';
        }
    });
});

