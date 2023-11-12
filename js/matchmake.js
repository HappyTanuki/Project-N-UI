let showCharacters = document.getElementsByClassName("character");
let body = document.getElementById("bodySection");
let backspace = document.getElementById("backspace");
let gamestart = document.getElementById("gameStart");

for (let item of showCharacters) {
    item.addEventListener("click", gotoCharacterDesc);
}

function gotoCharacterDesc() {
    console.log("clicked");
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