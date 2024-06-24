const { app, BrowserWindow } = require('electron')
const { url } = require('url')
const path = require('path')

let win

function createWindow(){
    win = new BrowserWindow({
        width: 1200,
        height: 750,
        backgroundColor: '#ffffff'
    })

    win.loadURL(path.join(__dirname, 'index.html'))

    win.on('closed', function(){
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

app.on('activate', function(){
    if (win=== null){
        createWindow()
    }
})