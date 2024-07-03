const { app, BrowserWindow } = require("electron");
const path = require("path");

(async () => {
  const isDev = (await import("electron-is-dev")).default;

  function createWindow() {
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, "../public/preload.js"),
        nodeIntegration: true,
        contextIsolation: false, // Ensure context isolation is disabled if needed
      },
    });

    mainWindow.loadURL(
      isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "../build/index.html")}`
    );

    if (isDev) {
      mainWindow.webContents.openDevTools();
    }
  }

  app.on("ready", createWindow);

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
})();
