import { ThemeProvider } from "./contexts/Theme"
import DashboardPage from "./pages/dashboard/page"

function App() {
  return (
    <ThemeProvider>
      <DashboardPage/>
    </ThemeProvider>
  )
}

export default App
