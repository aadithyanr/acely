import { Button } from './ui/button'

interface WelcomeScreenProps {
  onOpenSettings: () => void
}

export const WelcomeScreen = ({ onOpenSettings }: WelcomeScreenProps): React.JSX.Element => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white border border-black/10 rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
          <span>Silent Coder</span>
        </h1>

        <div className="mb-8">
          <h2 className="text-lg font-medium text-black mb-3">Welcome to Silent Coder</h2>
          <p className="text-black/70 text-sm mb-4">
            This application helps you by providing AI powered solutions to coding problems.
          </p>
          <div className="bg-black/5 border border-black/10 rounded-lg p-4 mb-4">
            <h3 className="text-black/90 font-medium mb-2">Global Shortcuts</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-sm">
                <span className="text-black/70">Toggle Visibility</span>
                <span className="text-black/90">Ctrl+B / Cmd+B</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-black/70">Take Screenshot</span>
                <span className="text-black/90">Ctrl+H / Cmd+H</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-black/70">Delete Last Screenshot</span>
                <span className="text-black/90">Ctrl+L / Cmd+L</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-black/70">Process Screenshot</span>
                <span className="text-black/90">Ctrl+Enter / Cmd+Enter</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-black/70">Reset View</span>
                <span className="text-black/90">Ctrl+R / Cmd+R</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-black/70">Quit App</span>
                <span className="text-black/90">Ctrl+Q / Cmd+Q</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-black/5 border border-black/10 rounded-lg p-4 mb-6">
          <h3 className="text-black/90 font-medium mb-2">Getting Started</h3>
          <p className="text-black/70 text-sm mb-3">
            Before using the application, you need to set up your API key.
          </p>
          <Button
            className="w-full px-4 py-3 bg-black text-white rounded-xl font-medium hover:bg-black/90 transition-colors flex items-center justify-center gap-2"
            onClick={onOpenSettings}
          >
            Open Settings
          </Button>
        </div>

        <div className="text-black/40 text-xs text-center">
          Start by taking screenshots of your coding problem (Ctrl+H / Cmd+H)
        </div>
      </div>
    </div>
  )
}