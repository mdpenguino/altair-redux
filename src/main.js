const {app, BrowserWindow} = require('electron')
const url = require('url');
const path = require('path');

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight:600,
    x: 0,
    y: 0,
    autoHideMenuBar: true,
    'web-preferences': {
      contextIsolation: true,
      offscreen: true
      }
  })
  win.loadURL(url.format({
    pathname: path.join('localhost:3000/'),
    protocol: 'http',
  }))
  win.webContents.openDevTools()
  win.setFullScreen(true)
}

app.on('ready', createWindow)

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('windows-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
