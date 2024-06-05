function handleSubmit(event) {
    event.preventDefault();
    const contactName = document.getElementById('name').value.trim();
    const contactMail = document.getElementById('mail').value.trim();
    const contactMessage = document.getElementById('message').value.trim();

    if (!validateEmail(contactMail)) {
        showInfo('Bitte geben Sie eine gültige E-Mail-Adresse ein.', 'error');
        return;
    }

    if (contactName && contactMail && contactMessage) {
        clear();
    } else {
        showInfo('Bitte alle Felder ausfüllen!', 'error');
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function clear() {
    const contactName = document.getElementById('name');
    const contactMail = document.getElementById('mail');
    const contactMessage = document.getElementById('message');

    contactName.value = '';
    contactMail.value = '';
    contactMessage.value = '';
    showInfo('Ihre Nachricht wurde erfolgreich übermittelt.', 'success')   
}


function showInfo(message, type) {
    const info = document.getElementById('contactinfo');
    info.textContent = message;
    info.classList.remove('d-none');
    setTimeout(() => info.classList.add('d-none'), 1500);

    if (type === 'error') {
        info.style.backgroundColor = '#ffdddd';
        info.style.color = '#d8000c';
    } else if (type === 'success') {
        info.style.backgroundColor = '#ddffdd';
        info.style.color = '#00d86c';
    }
}


window.onload = function() {
    includeHTML();
}