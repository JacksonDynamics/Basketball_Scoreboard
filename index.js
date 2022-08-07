let homeScoreBoard = 0;
let guestScoreBoard = 0;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function increment1Home() {
    homeScoreBoard += 1;
    homeScore.textContent = homeScoreBoard;
}

function increment2Home() {
    homeScoreBoard += 2;
    homeScore.textContent = homeScoreBoard;
}

function increment3Home() {
    homeScoreBoard += 3;
    homeScore.textContent = homeScoreBoard;
}

function increment1Guest() {
    guestScoreBoard += 1;
    guestScore.textContent = guestScoreBoard;
}

function increment2Guest() {
    guestScoreBoard += 2;
    guestScore.textContent = guestScoreBoard;
}

function increment3Guest() {
    guestScoreBoard += 3;
    guestScore.textContent = guestScoreBoard;
}

function reset() {
    homeScoreBoard = 0;
    guestScoreBoard = 0;
    homeScore.textContent = homeScoreBoard;
    guestScore.textContent = guestScoreBoard;
}