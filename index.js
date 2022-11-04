let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let incrementNumberHome = 0
let incrementNumberGuest = 0

        // Home Score Functions for Scoring buttons
function plus1Home() {
    incrementNumberHome += 1
    homeScoreEl.innerText = incrementNumberHome    
}

function plus2Home() {
    incrementNumberHome += 2
    homeScoreEl.innerText = incrementNumberHome
}

function plus3Home() {
    incrementNumberHome += 3 
    homeScoreEl.innerText = incrementNumberHome
}

        // Guest Score Functions for Scoring buttons
function plus1Guest() {
    incrementNumberGuest += 1
    guestScoreEl.innerText = incrementNumberGuest 
}

function plus2Guest() {
    incrementNumberGuest += 2
    guestScoreEl.innerText = incrementNumberGuest 
}

function plus3Guest() {
    incrementNumberGuest += 3
    guestScoreEl.innerText = incrementNumberGuest 
}

        // Clear Score function for Home & Guest
function clearScore() {
    incrementNumberHome = 0
    incrementNumberGuest = 0
    homeScoreEl.innerText = incrementNumberHome
    guestScoreEl.innerText = incrementNumberGuest
    
}