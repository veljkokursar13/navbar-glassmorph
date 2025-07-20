import './index.css'
import Navbar from './components/Navbar'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import Home from './pages/Home'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      setTheme(theme)
    }
  }, [])
  return (
    <ThemeProvider>
      <main>
        <Navbar />
        <Home />
      </main>
    </ThemeProvider>
  )
}


export default App
