import { QueryProvider } from "./providers/query-provider"
import { useToast } from "./providers/toast-context"
import { ToastProvider } from "./providers/toast-provider"

function ToastExample(): React.JSX.Element {
  const { showToast } = useToast()
  return <button onClick={() => showToast('Hello', 'This is a toast message', 'success')}>Show Toast</button>
}

function App(): React.JSX.Element {
  return (
    <QueryProvider>
      <ToastProvider>
      <div className="text-3xl">Hello World</div>
      <ToastExample />
      </ToastProvider>
    </QueryProvider>
  )
}

export default App
