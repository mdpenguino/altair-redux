const {app, BrowserWindow} = require('electron')

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight:600,
    x: 0,
    y: 0,
    'web-preferences': {
      'web-security': false,
      nodeIntegration: false,
      nodeIntegrationInWorker: true,
      offscreen: true
      }
  })
  win.loadURL('http://localhost:3000/')
  win.webContents.openDevTools()
}

app.on('ready', createWindow)
