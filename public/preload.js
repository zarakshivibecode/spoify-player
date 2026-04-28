const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // File operations
  openFileDialog: (options) => ipcRenderer.invoke('dialog:openFile', options),
  readDirectory: (path) => ipcRenderer.invoke('fs:readDirectory', path),
  readFile: (path) => ipcRenderer.invoke('fs:readFile', path),
  
  // Music metadata operations
  extractMetadata: (filePath) => ipcRenderer.invoke('music:extractMetadata', filePath),
  
  // App operations
  minimize: () => ipcRenderer.send('window:minimize'),
  maximize: () => ipcRenderer.send('window:maximize'),
  close: () => ipcRenderer.send('window:close'),
  
  // Listen for events
  onReady: (callback) => ipcRenderer.on('app:ready', callback),
  onError: (callback) => ipcRenderer.on('app:error', callback)
});
