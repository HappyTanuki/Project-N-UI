let closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", closeWindow);
closeBtn.addEventListener("mouseover", closeBtnOver);
closeBtn.addEventListener("mouseout", closeBtnOut);

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