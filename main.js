const {app, BrowserWindow, ipcMain, session} = require("electron");
const path = require('path');
let SERVERADDRESS;

let fs = require("fs");
fs.readFile("serverAddress", "utf-8", (err, data) => {
    if (err) {
        SERVERADDRESS = "http://127.0.0.1:1397";
        fs.writeFile("serverAddress", SERVERADDRESS, (err) => console.log(err));
    }
    else {
        SERVERADDRESS = data;
    }
});

let window;

function createWindow() {
    const window = new BrowserWindow({
        width: 1600,
        height: 900,
        resizable: false,
        title: "Promether",
        frame: false,
        show: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });
    window.webContents.toggleDevTools(); //only for develop purpose

    window.loadFile(path.join(__dirname, 'html/index.html'))
        .then(() => {
            window.show();
        });

    return window;
}

app.on("ready", () => {
    window = createWindow();
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

ipcMain.handle("set:id", async (event, data) => {
    const cookie = {
        url: SERVERADDRESS,
        name: data["id"],
        value: data["passwd"]
    };
    session.defaultSession.cookies.set(cookie)
    .then(() => {
        console.log("id set: " + JSON.stringify(cookie));
    }, (error) => {
        console.error(error);
    });
});

ipcMain.handle("get:id", async (event) => {
    const filter = {
        url: SERVERADDRESS
    };
    return session.defaultSession.cookies.get(filter);
});

ipcMain.handle("get:serverAddress", async (event) => {
    return SERVERADDRESS;
});