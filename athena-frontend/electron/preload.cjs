const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
    startExam: (name,urn)=>ipcRenderer.invoke("start-exam",name,urn),

})