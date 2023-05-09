let SERVERADDRESS;

document.addEventListener('DOMContentLoaded', async () => {
    parent.window.ipcAPI.getServerAddress()
        .then((payload) => {
            SERVERADDRESS = payload;
    });
});
document.getElementById("registerForm").addEventListener("submit", submit);
document.getElementById("registerBox").addEventListener("click", (event) => {
    if (event.target.id === "returnBtn") {
        location.href="register.html";
    }
});

async function gotoLobby(response, ID, encPasswd){
    const payload = {
        id: ID,
        passwd: encPasswd
    };
    parent.window.ipcAPI.setId(payload);
    parent.location.href="lobby.html";
}

async function submit(event) {
    event.preventDefault();
    
    const ID = document.getElementById("ID").value;
    const passwd = document.getElementById("passwd").value;
    const passwdCheck = document.getElementById("passwdCheck").value;
        
    if (passwd !== passwdCheck) {
        document.getElementById("registerBox").appendChild(document.createElement(p));
        document.getElementById("registerBox>p").innerText = "비밀번호가 일치하지 않습니다.";
        return;
    }

    const encPasswd = sha256(passwd).toString();
    try {
        fetch(SERVERADDRESS + "/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: ID,
                passwd: encPasswd,
            }),
        })
        .then((response) => {
            if (response.ok){
                gotoLobby(response, ID, encPasswd);
            } else {
                document.querySelector("#registerBox>h1").remove();
                document.getElementById("ID").remove();
                document.getElementById("idBorder").remove();
                document.getElementById("passwd").remove();
                document.getElementById("passwdBorder").remove();
                document.getElementById("passwdCheck").remove();
                document.getElementById("passwdCheckBorder").remove();
                document.getElementById("submitBtn").remove();
                document.getElementById("registerBox").appendChild(document.createElement("h1"));
                let returnBtn = document.createElement("button");
                returnBtn.id = "returnBtn";
                returnBtn.appendChild(document.createTextNode("재입력하기"));
                document.getElementById("registerBox").appendChild(returnBtn);
                if (response.status === 409){
                    document.querySelector("#registerBox>h1").innerText = "이미 가입한 계정입니다.";
                } else {
                    document.querySelector("#registerBox>h1").innerText = "알 수 없는 오류가 발생하였습니다.";
                }
            }
        });
    } catch(error) {
         console.error(error);
    }
}