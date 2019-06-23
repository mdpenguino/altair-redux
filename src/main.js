const {app, BrowserWindow} = require('electron')
const url = require('url');
const path = require('path');

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight:600,
    icon: "src/icons/ico/altair.ico",
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
    win.once('ready-to-show', () => {
  })
  win.webContents.openDevTools()
  win.maximize()
}

app.on('ready', createWindow)

app.on('windows-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
