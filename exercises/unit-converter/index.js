const enteredAmount = document.querySelector("#entered-amount");
const userInput = document.querySelector("#user-input");
const updateBtn = document.querySelector("#update-btn");
const meterToFeet = document.querySelector("#meter-to-feet");

let userInputValue = 0;

const convertMeterToFeet = (userInputValue) => userInputValue * 3.28084;

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        updateBtn.click();
    }
});
updateBtn.addEventListener("click", function () {
    userInputValue = Number(userInput.value);
    enteredAmount.textContent = userInputValue;
    userInput.value = "";
    updateText();
});

function updateText() {
    meterToFeet.textContent = generateConversionSentence("meters", "feet", userInputValue, convertMeterToFeet(userInputValue).toFixed(2));
}

function generateConversionSentence(srcUnit, destUnit, srcValue, destValue) {
    return `${srcValue} ${srcUnit} = ${destValue} ${destUnit}`;
}

