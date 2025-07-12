import React from "react"
import {WelcomeScreen} from "./components/welcome-screen"
import { QueryProvider } from "./providers/query-provider"
import { ToastProvider } from "./providers/toast-provider"
import { SettingsDialog } from "./components/settings-dialog"

function App(): React.JSX.Element {
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false)

  const handleOpenSettings = () => {
    setIsSettingsOpen(true)
  }

  return (
    <QueryProvider>
      <ToastProvider>
        <WelcomeScreen onOpenSettings={handleOpenSettings} />
        <SettingsDialog 
          open={isSettingsOpen} 
          onOpenChange={setIsSettingsOpen} 
        />
      </ToastProvider>
    </QueryProvider>
  )
}

export default App
