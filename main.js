const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            disableBlinkFeatures: "Auxclick",
            sandbox: true,
            contextIsolation: true
        }
    })
    win.webContents.on('will-navigate', (event, url) => {
        console.log(`Prevented navigation to: ${url}`);
        event.preventDefault();
    });

    win.webContents.on('new-window', (event, url) => {
        console.log(`Prevented opening new window for: ${url}`);
        event.preventDefault();
    });

    win.loadFile('index.html')
}

//above code creates a new window

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
    app.on('ready', () => {
        session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
            // Deny all permission requests
            callback(false);
        });
    });
})

//above code is boilerplate for when app windows close on different system types.