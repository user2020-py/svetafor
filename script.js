// Core Variables
var colors = ["#F00", "#FFFF00", "#0F0"];
var lights = document.getElementsByClassName("light");
var btn = document.querySelector("#start-btn");
var secCoutdown = document.getElementsByClassName("sec");
var sec = 0;

// Start button clicking...
btn.addEventListener("click", start);

// Start button clicking function
function start() {
    sec = document.getElementById("s").value;
    if (sec > 0) setRed();
}

// Colors - Infinity loop
function setRed() {
    lights[0].style.background = colors[0];
    secCoutdown[0].innerHTML = sec;
    console.log(sec);
    if (sec === 0) {
        lights[0].style.background = "#b8b8b8";
        secCoutdown[0].innerHTML = "";
        sec = document.getElementById("s").value;
        setYellow();
    } else {
        sec--;
        setTimeout(setRed, 1000);
    }
}

function setYellow() {
    lights[1].style.background = colors[1];
    secCoutdown[1].innerHTML = sec;
    console.log(sec);
    if (sec === 0) {
        lights[1].style.background = "#b8b8b8";
        secCoutdown[1].innerHTML = "";
        sec = document.getElementById("s").value;
        setGreen();
    } else {
        sec--;
        setTimeout(setYellow, 1000);
    }
}

function setGreen() {
    lights[2].style.background = colors[2];
    secCoutdown[2].innerHTML = sec;
    console.log(sec);
    if (sec === 0) {
        lights[2].style.background = "#b8b8b8";
        secCoutdown[2].innerHTML = "";
        sec = document.getElementById("s").value;
        setRed();
    } else {
        sec--;
        setTimeout(setGreen, 1000);
    }
}