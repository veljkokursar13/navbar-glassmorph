import './components/homepage.css'
import './components/navbar.css'
import Navbar from './components/Navbar'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import Home from './pages/Home'
import { useEffect } from 'react'

function App() {
  
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
