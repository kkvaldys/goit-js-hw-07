const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', updateName);

function updateName() {
    const inputText = nameInput.value.trim();

    nameOutput.textContent = inputText || 'Anonymous';
}