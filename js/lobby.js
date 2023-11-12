let showCharacters = document.getElementsByClassName("character");
let body = document.getElementById("bodySection");
let backspace = document.getElementById("backspace");
let gamestart = document.getElementById("gameStart");

backspace.addEventListener("click", gotoLogin);
gamestart.addEventListener("click", gotoMatchmake);

for (let item of showCharacters) {
    if (item.id == "Lb") {
        item.addEventListener("click", gotoLbDesc);
    }
    else if (item.id == "Riana") {
        item.addEventListener("click", gotoRianaDesc);
    }
    else if (item.id == "Allium") {
        item.addEventListener("click", gotoAlliumDesc);
    }
}

function gotoLbDesc() {
    console.log("Lb clicked");
    location.href="characterIntroduce.html?char=Lb"
}

function gotoRianaDesc() {
    console.log("Riana clicked");
    location.href="characterIntroduce.html?char=Riana"
}

function gotoAlliumDesc() {
    console.log("Alium clicked");
    location.href="characterIntroduce.html?char=Allium"
}

function gotoLogin() {
    console.log("clicked");
    location.href="index.html"
}

function gotoMatchmake() {
    console.log("clicked");
    location.href="matchmake.html"
}

body.onselectstart = () => {
    return false;
}

body.ondragstart = () => {
    return false;
}

body.oncontextmenu = () => {
    return false;
}