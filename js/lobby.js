let closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click",      closeWindow);
closeBtn.addEventListener("mouseover", closeBtnOver);
closeBtn.addEventListener("mouseout",   closeBtnOut);

let gameStartBtn = document.getElementById("gameStart");

gameStartBtn.addEventListener("click",   handleGameStartBtn);
gameStartBtn.addEventListener("mouseover", gameStartBtnOver);
gameStartBtn.addEventListener("mouseout",   gameStartBtnOut);

function handleGameStartBtn() {
    location.href="matchmake.html";
}

function gameStartBtnOver() {
    gameStartBtn.style.backgroundColor = "#e81123";
}

function gameStartBtnOut() {
    gameStartBtn.style.backgroundColor = "#cccccc";
}

gameStartBtn.onselectstart = () => {
    return false;
}

gameStartBtn.ondragstart = () => {
    return false;
}

gameStartBtn.oncontextmenu = () => {
    return false;
}

document.addEventListener('DOMContentLoaded', async () => {
    window.ipcAPI.getId()
    .then((payload) => {
        console.log(payload);
        document.querySelector("#profile").innerHTML = payload[0]["name"];
    });
});

closeBtn.onselectstart = () => {
    return false;
}

closeBtn.ondragstart = () => {
    return false;
}

closeBtn.oncontextmenu = () => {
    return false;
}

function closeWindow(){
    window.close();
}

function closeBtnOver(){
    closeBtn.style.backgroundColor = "#e81123";
}

function closeBtnOut(){
    closeBtn.style.backgroundColor = "#3c3c3c";
}