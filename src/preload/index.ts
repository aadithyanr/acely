import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

interface Config {
  apiKey?: string
  apiProvider?: 'openai' | 'gemini'
  extractionModel?: string
  solutionModel?: string
  debuggingModel?: string
}

// Custom APIs for renderer
const api = {
  updateConfig: (config: Config) => ipcRenderer.invoke('updateConfig', config),
  getConfig: () => ipcRenderer.invoke('getConfig'),
  openExternal: (url: string) => ipcRenderer.invoke('openExternal', url)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
