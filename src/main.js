const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')
const os = require('os');

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    title: "AltaiR",
    show: false,
    autoHideMenuBar: true,
    icon: "src/icons/ico/altair.ico",
    webPreferences: {
    //  preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
    }
  })

  mainWindow.loadURL('http://localhost:3000')
  mainWindow.maximize()
  mainWindow.webContents.openDevTools()

  //Import React devtools from the developers chrome folder, if its not working, install the React devtools through chrome
  BrowserWindow.addDevToolsExtension(
     path.join(os.homedir(), 'AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.6.0_0')
  )

  mainWindow.once('ready-to-show', () => {
    win.show()
  })

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
