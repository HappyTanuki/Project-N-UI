let SERVERADDRESS;

document.addEventListener('DOMContentLoaded', async () => {
    parent.window.ipcAPI.getServerAddress()
        .then((payload) => {
            SERVERADDRESS = payload;
    });
});

document.getElementById("registerForm").addEventListener("submit", submit);

function gotoLobby(response, encPasswd){
    const ID = document.getElementById("ID").value;
    const payload = {
        id: ID,
        passwd: encPasswd
    };
    console.log("submitted");
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
                gotoLobby(response, encPasswd);
            } else {
                document.querySelector("#ID").remove();
                document.querySelector("#idBorder").remove();
                document.querySelector("#passwd").remove();
                document.querySelector("#passwdBorder").remove();
                document.querySelector("#passwdCheck").remove();
                document.querySelector("#passwdCheckBorder").remove();
                document.querySelector("#submitBtn").remove();
                document.querySelector("#submitBox>a").remove();
                if (response.status === 409){
                        document.querySelector("#registerBox").innerHTML="<h2>이미 가입한 계정입니다.</h2>";
                } else {
                        document.querySelector("#registerBox").innerHTML="<h2>알 수 없는 오류가 발생하였습니다.</h2>";
                }
            }
        });
    } catch(error) {
         console.error(error);
    }
}