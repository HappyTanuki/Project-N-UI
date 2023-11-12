let SERVERADDRESS;

document.addEventListener('DOMContentLoaded', async () => {
    parent.window.ipcAPI.getServerAddress()
        .then((payload) => {
            SERVERADDRESS = payload;
    });
});

document.getElementById("loginForm").addEventListener("submit", submit);

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
    // const passwd = document.getElementById("passwd").value;

    gotoLobby({}, "Passwd");
        
    // if ((ID.length !== 0) && (passwd.length !== 0)){
    //     const encPasswd = sha256(passwd).toString();
    //     try {
    //         fetch(SERVERADDRESS + "/login", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 id: ID,
    //                 passwd: encPasswd,
    //             }),
    //         })
    //         .then((response) => {
    //             if (response.ok){
    //                 gotoLobby(response, encPasswd);
    //             } else {
    //                 document.querySelector("#id").remove();
    //                 document.querySelector("#idBorder").remove();
    //                 document.querySelector("#passwd").remove();
    //                 document.querySelector("#passwdBorder").remove();
    //                 document.querySelector("#loginBtn").remove();
    //                 document.querySelector("#loginBox>a").remove();
    //                 if (response.status === 404){
    //                     document.querySelector("#loginBox").innerHTML="<h2>아이디, 패스워드가 틀렸거나 없는 계정입니다.</h2>";
    //                 } else {
    //                     document.querySelector("#loginBox").innerHTML="<h2>알 수 없는 오류가 발생하였습니다.</h2>";
    //                 }
    //             }
    //         });
    //     } catch(error) {
    //          console.error(error);
    //     }
    // }
}