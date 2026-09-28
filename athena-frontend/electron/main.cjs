const { BrowserWindow, app,ipcMain } = require("electron");
const path = require("path");

app.whenReady().then(() => {
  const window = new BrowserWindow({
    title: "AD Contest",
    height: 500,
    width: 800,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs")
    },
});

  window.on("ready-to-show", () => window.show());
  window.loadURL("http://localhost:5173/");

  ipcMain.handle("start-exam",async (event,name,urn)=>{
    // console.log("Exam Started",name,urn);
    const session=fetch('http://localhost:3000/exam/start',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({'UserId':urn,'name':name})
    }).then(res=>res.json())

  })
});
