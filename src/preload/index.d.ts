import { ElectronAPI } from '@electron-toolkit/preload'

interface Config {
  apiKey?: string
  apiProvider?: 'openai' | 'gemini'
  extractionModel?: string
  solutionModel?: string
  debuggingModel?: string
}

interface CustomAPI {
  updateConfig: (config: Config) => Promise<boolean>
  getConfig: () => Promise<Config>
  openExternal: (url: string) => Promise<boolean>
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: CustomAPI
  }
}
