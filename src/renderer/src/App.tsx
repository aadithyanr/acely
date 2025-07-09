import React from "react"
import {WelcomeScreen} from "./components/welcome-screen"
import { QueryProvider } from "./providers/query-provider"
import { useToast } from "./providers/toast-context"
import { ToastProvider } from "./providers/toast-provider"

// function ToastExample(): React.JSX.Element {
//   const { showToast } = useToast()
//   return <button onClick={() => showToast('Hello', 'This is a toast message', 'success')}>Show Toast</button>
// }


function App(): React.JSX.Element {
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false)

  const handleOpenSettings = () => {
    setIsSettingsOpen(true)
  }
  return (
    <QueryProvider>
      <ToastProvider>
        <WelcomeScreen onOpenSettings={handleOpenSettings} /> 
      </ToastProvider>
    </QueryProvider>
  )
}

export default App
