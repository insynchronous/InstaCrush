
// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')


function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 750,
    height: 500,
    webPreferences: {
     nodeIntegration : true,
     nodeIntegrationInWorker : true,
     enableRemoteModule: true
    },
    frame : false,
    resizable: false,
    
  })
  mainWindow.setMenu = null;

  // and load the index.html of the app.
  mainWindow.loadFile('./gui/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

app.whenReady().then( () => {
  createWindow()

})