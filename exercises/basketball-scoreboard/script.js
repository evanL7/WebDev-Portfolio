let homeScore = document.getElementById("home");
let homePlus1El = document.getElementById("home-plus-1-btn");
let homePlus2El = document.getElementById("home-plus-2-btn");
let homePlus3El = document.getElementById("home-plus-3-btn");

let guestScore = document.getElementById("guest");
let guestPlus1El = document.getElementById("guest-plus-1-btn");
let guestPlus2El = document.getElementById("guest-plus-2-btn");
let guestPlus3El = document.getElementById("guest-plus-3-btn");

// Home team buttons
homePlus1El.addEventListener("click", function () {
    homeScore.textContent = parseInt(homeScore.textContent) + 1;
});
homePlus2El.addEventListener("click", function () {
    homeScore.textContent = parseInt(homeScore.textContent) + 2;
});
homePlus3El.addEventListener("click", function () {
    homeScore.textContent = parseInt(homeScore.textContent) + 3;
});

// Guest team buttons
guestPlus1El.addEventListener("click", function () {
    guestScore.textContent = parseInt(guestScore.textContent) + 1;
});
guestPlus2El.addEventListener("click", function () {
    guestScore.textContent = parseInt(guestScore.textContent) + 2;
});
guestPlus3El.addEventListener("click", function () {
    guestScore.textContent = parseInt(guestScore.textContent) + 3;
});
    