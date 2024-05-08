const enteredAmount = document.querySelector("#entered-amount");
const userInput = document.querySelector("#user-input");
const updateBtn = document.querySelector("#update-btn");

const meterToFeet = document.querySelector("#meter-to-feet");
const feetToMeter = document.querySelector("#feet-to-meter");
const literToGallon = document.querySelector("#liter-to-gallon");
const gallonToLiter = document.querySelector("#gallon-to-liter");
const kgToLb = document.querySelector("#kg-to-lb");
const lbToKg = document.querySelector("#lb-to-kg");

let userInputValue = 0;

const convertMeterToFeet = (userInputValue) => userInputValue * 3.28084;
const convertFeetToMeter = (userInputValue) => userInputValue / 3.28084;
const convertLiterToGallon = (userInputValue) => userInputValue * 0.264172;
const convertGallonToLiter = (userInputValue) => userInputValue / 0.264172;
const convertKgToLb = (userInputValue) => userInputValue * 2.20462;
const convertLbToKg = (userInputValue) => userInputValue / 2.20462;

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        updateBtn.click();
    }
});
updateBtn.addEventListener("click", function () {
    const testNum = Number(userInput.value);
    if (!isNaN(testNum) && testNum >= 0 && userInput.value !== "") {
        userInputValue = Number(userInput.value);
        enteredAmount.textContent = userInputValue;
        userInput.value = "";
        updateText();
    }
});

function updateText() {
    meterToFeet.textContent = generateConversionSentence("meters", "feet", userInputValue, convertMeterToFeet(userInputValue));
    feetToMeter.textContent = generateConversionSentence("feet", "meters", userInputValue, convertFeetToMeter(userInputValue));
    literToGallon.textContent = generateConversionSentence("liters", "gallons", userInputValue, convertLiterToGallon(userInputValue));
    gallonToLiter.textContent = generateConversionSentence("gallons", "liters", userInputValue, convertGallonToLiter(userInputValue));
    kgToLb.textContent = generateConversionSentence("kilograms", "pounds", userInputValue, convertKgToLb(userInputValue));
    lbToKg.textContent = generateConversionSentence("pounds", "kilograms", userInputValue, convertLbToKg(userInputValue));
}

function generateConversionSentence(srcUnit, destUnit, srcValue, destValue) {
    return `${srcValue} ${srcUnit} = ${destValue.toFixed(3)} ${destUnit}`;
}

