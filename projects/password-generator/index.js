const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const digits = '0123456789'.split('');
const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.split('');

const pwResultEl = document.getElementById("pw-result");
const pwCopyBtnEl = document.getElementById("pw-copy-btn");

const copyEmojiBtnEl = document.getElementById("copy-emoji-btn");
const refreshEmojiBtnEl = document.getElementById("refresh-emoji-btn");

const lengthNumEl = document.getElementById("length-num");
const lengthRangeEl = document.getElementById("length-range");

lengthNumEl.addEventListener("input", function() {
    lengthRangeEl.value = lengthNumEl.value;
    updatePassword();
});
lengthRangeEl.addEventListener("input", function() {
    lengthNumEl.value = lengthRangeEl.value;
    updatePassword();
});

refreshEmojiBtnEl.addEventListener("click", updatePassword);
copyEmojiBtnEl.addEventListener("click", copyToClipboard);
pwCopyBtnEl.addEventListener("click", copyToClipboard);

window.onload = updatePassword;

function updatePassword() {
    pwResultEl.textContent = generatePassword();
}

function generatePassword() {
    const length = lengthNumEl.value;
    let password = '';
    let characters = [];

    if (document.getElementById("uppercase").checked) {
        characters = characters.concat(uppercaseAlphabet);
    }
    if (document.getElementById("lowercase").checked) {
        characters = characters.concat(lowercaseAlphabet);
    }
    if (document.getElementById("digits").checked) {
        characters = characters.concat(digits);
    }
    if (document.getElementById("symbols").checked) {
        characters = characters.concat(symbols);
    }
    if (characters.length === 0) {
        return "";
    }

    shuffle(characters);

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

function copyToClipboard() {
    let copyText = document.getElementById("pw-result");
    let range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges(); // Clear previous selection
    window.getSelection().addRange(range); // Select the text
    document.execCommand("copy"); // Copy the selected text
    window.getSelection().removeAllRanges(); // Clear the selection
    alert("Password copied to clipboard.");
}

// Fisher-Yates shuffle algorithm
function shuffle(characters) {
    // Shuffle the characters array
    for (let i = characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
    }
}