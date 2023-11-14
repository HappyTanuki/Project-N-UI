let SERVERADDRESS;
let body = document.getElementById("bodySection");
let backspace = document.getElementById("backspace").addEventListener("click", gotoLobby);
let gamestart = document.getElementById("gameStart");

function gotoLobby() {
    location.href="lobby.html";
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

document.addEventListener('DOMContentLoaded', async () => {
    window.ipcAPI.getServerAddress()
        .then((payload) => {
            SERVERADDRESS = payload;
            console.log(SERVERADDRESS);
    });
});

function addLeaderMark(user) {
    document.getElementsByClassName("user")[user].innerHTML = "<img src=\"../UI_Image/UI/User_Lounge/Leader.png\"></img>";
}