// DATE
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

// CLOCK
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let currentMonth;
let currentDay;

// DATE EVERYTHING

let currentDD;
let currentMM;
let currentYYYY;

let currentHH;
let currentMMM;
let currentSS;

let currentDString;

currentTime();
getCurrentDay();
getCurrentMonth();
getCurrentTime();

function currentTime() {
    const today = new Date();

    currentDD = String(today.getDate());
    currentMM = String(today.getMonth() + 1);
    currentYYYY = today.getFullYear();
    currentDString = String(today.getDay());
    currentHH = String(today.getHours());
    currentMMM = String(today.getMinutes());
    currentSS = String(today.getSeconds());

    setTimeout(currentTime, 1000);
}

function getCurrentDay() {
    if (currentDString === "1") {
        currentDay = "lundi";
    }
    if (currentDString === "2") {
        currentDay = "mardi";
    }
    if (currentDString === "3") {
        currentDay = "mercredi";
    }
    if (currentDString === "4") {
        currentDay = "jeudi";
    }
    if (currentDString === "5") {
        currentDay = "vendredi";
    }
    if (currentDString === "6") {
        currentDay = "samedi";
    }
    if (currentDString === "0") {
        currentDay = "dimanche";
    }

    day.innerHTML = `${currentDay} ${currentDD}`;
}

function getCurrentMonth() {
    if (currentMM === "1") {
        currentMonth = "janvier";
    }
    if (currentMM === "2") {
        currentMonth = "février";
    }
    if (currentMM === "3") {
        currentMonth = "mars";
    }
    if (currentMM === "4") {
        currentMonth = "avril";
    }
    if (currentMM === "5") {
        currentMonth = "mai";
    }
    if (currentMM === "6") {
        currentMonth = "juin";
    }
    if (currentMM === "7") {
        currentMonth = "juillet";
    }
    if (currentMM === "8") {
        currentMonth = "août";
    }
    if (currentMM === "9") {
        currentMonth = "septembre";
    }
    if (currentMM === "10") {
        currentMonth = "octobre";
    }
    if (currentMM === "11") {
        currentMonth = "novembre";
    }
    if (currentMM === "12") {
        currentMonth = "décembre";
    }

    month.innerHTML = currentMonth;
    year.innerHTML = currentYYYY;
}

function getCurrentTime() {
    minutes.innerHTML = currentMMM;

    // HOURS
    if (parseInt(currentHH) < 10) {
        hours.innerHTML = "0" + currentHH;
    }

    if (parseInt(currentHH) >= 10) {
        hours.innerHTML = currentHH;
    }

    // MINUTES
    if (parseInt(currentMMM) < 10) {
        minutes.innerHTML = "0" + currentMMM;
    }

    if (parseInt(currentMMM) >= 10) {
        minutes.innerHTML = currentMMM;
    }

    // SECONDS
    if (parseInt(currentSS) < 10) {
        seconds.innerHTML = "0" + currentSS;
    }

    if (parseInt(currentSS) >= 10) {
        seconds.innerHTML = currentSS;
    }

    setTimeout(getCurrentTime, 1000);
}
