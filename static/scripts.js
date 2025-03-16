document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const button = document.createElement('button');
    button.textContent = 'Toggle Dark Mode';
    button.style.position = 'fixed';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.padding = '10px';
    button.style.backgroundColor = '#4A148C';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';
    button.style.zIndex = '1000';

    button.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    body.appendChild(button);
});

function copyToEncrypt() {
    const textToEncrypt = document.getElementById('text_to_encrypt');
    textToEncrypt.select();
    textToEncrypt.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Text copied to clipboard!');
}

function pasteToDecrypt() {
    const textToDecrypt = document.getElementById('text_to_decrypt');
    textToDecrypt.focus();
    document.execCommand('paste');

    // Automatically fill the decryption box with the encrypted text
    const encryptedText = document.getElementById('encrypted_text').innerText;
    textToDecrypt.value = encryptedText;
}
