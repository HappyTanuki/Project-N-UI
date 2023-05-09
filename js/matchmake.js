document.addEventListener('DOMContentLoaded', async () => {
    window.ipcAPI.getId()
    .then((payload) => {
        console.log(payload);
        document.getElementById("profile").innerHTML = payload[0]["name"];
    });
});