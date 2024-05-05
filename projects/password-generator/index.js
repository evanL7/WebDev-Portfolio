let uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let digits = '0123456789'.split('');
let symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.split('');

let maxVisibleLength = 45;

let pwResultEl = document.getElementById("pw-result");
let pwCopyBtnEl = document.getElementById("pw-copy-btn");

let lengthNumEl = document.getElementById("length-num");
let lengthRangeEl = document.getElementById("length-range");

lengthNumEl.addEventListener("input", function() {
    lengthRangeEl.value = lengthNumEl.value;
});

lengthRangeEl.addEventListener("input", function() {
    lengthNumEl.value = lengthRangeEl.value;
});

pwCopyBtnEl.addEventListener("click", copyToClipboard);

window.onload = function() {
    pwResultEl.textContent = generatePassword();
}

function generatePassword() {
    let length = lengthNumEl.value;
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
    alert("Password copied to clipboard: " + copyText.textContent);
}
