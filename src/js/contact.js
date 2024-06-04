function clear() {
    const contactName = document.getElementById('name');
    const contactMail = document.getElementById('mail');
    const contactMessage = document.getElementById('message');

    contactName.value = '';
    contactMail.value = '';
    contactMessage.value = '';
    showInfo('Ihre Nachricht wurde erfolgreich übermittelt.')   
}

function showInfo(message) {
    const info = document.getElementById('contactinfo');
    info.textContent = message;
    info.classList.remove('d-none');
    setTimeout(() => info.classList.add('d-none'), 1500);
}

window.onload = function() {
    includeHTML();
}