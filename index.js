let score = 0;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function increment1Home() {
    score += 1;
    homeScore.textContent = score;
}

function increment2Home() {
    score += 2;
    homeScore.textContent = score;
}

function increment3Home() {
    score += 3;
    homeScore.textContent = score;
}

function increment1Guest() {
    score += 1;
    guestScore.textContent = score;
}

function increment2Guest() {
    score += 2;
    guestScore.textContent = score;
}

function increment3Guest() {
    score += 3;
    guestScore.textContent = score;
}

function reset() {
    score = 0;
    homeScore.textContent = score;
    guestScore.textContent = score;
}