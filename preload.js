const { ipcRenderer, contextBridge }   = require('electron');

contextBridge.exposeInMainWorld(
  "ipcAPI", {
    setId: (data) => ipcRenderer.invoke('set:id', data),
    getId: () => ipcRenderer.invoke('get:id'),
    getServerAddress: () => ipcRenderer.invoke('get:serverAddress')
  }
);