import './index.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <main>
      <Navbar />
      <div className="main-center">
        <div className="page-content">
          <h1>🧊 React Glassmorph Navbar</h1>
          <p><strong>A sleek, modern, fully responsive glassmorphism navbar built with React + Vite.</strong><br/>
          Perfect for portfolios, landing pages, and modern web apps.</p>
          
          <h2>✨ Features</h2>
          <ul>
            <li>🔮 <strong>Glassmorphism</strong> design with blurred background & frosted glass effect</li>
            <li>📱 <strong>Fully responsive</strong> — mobile nav with hamburger toggle</li>
            <li>🎨 Built with <strong>pure CSS</strong>, easily customizable</li>
            <li>⚛️ Built using <strong>React + Vite</strong></li>
            <li>🛠️ Easy to plug in and modify as you wish</li>
          </ul>

          <h2>🚀 Demo</h2>
          <p><a href="#" style={{color: '#49a6e9', textDecoration: 'underline'}}>Live Demo Coming Soon</a></p>

          <h2>🧰 Tech Stack</h2>
          <ul>
            <li><strong>React</strong></li>
            <li><strong>Vite</strong></li>
            <li><strong>CSS</strong> (Glassmorphism styles)</li>
          </ul>

          <h2>📦 Installation</h2>
          <pre style={{background: 'rgba(0,0,0,0.1)', padding: '1rem', borderRadius: '8px', overflow: 'auto'}}>
{`git clone https://github.com/veljkokursar13/react-glassmorph-navbar.git
cd react-glassmorph-navbar
npm install
npm run dev`}
          </pre>

          <h2>🛠️ Customization Guide</h2>
          <p>Want to make it yours? You can:</p>
          <ul>
            <li>✏️ Change colors, fonts, and links in Navbar.jsx and styles.css</li>
            <li>📱 Tweak mobile behavior in the CSS media queries</li>
            <li>💡 Replace "LOGO" with your actual brand/logo</li>
          </ul>

          <h2>💻 File Structure</h2>
          <pre style={{background: 'rgba(0,0,0,0.1)', padding: '1rem', borderRadius: '8px', overflow: 'auto'}}>
{`├── components/
│   └── Navbar.jsx
├── styles/
│   └── styles.css
├── App.jsx
└── main.jsx`}
          </pre>

          <h2>💡 Inspiration</h2>
          <p>Glassmorphism UI is the modern aesthetic you see in macOS, iOS, and futuristic designs. This project is inspired by that visual — now brought to the React world.</p>

          <h2>🧠 About the Creator</h2>
          <p>Built with ❤️ by <strong>@veljkokursar13</strong><br/>
          Security guy turned frontend warrior 🧠🔥</p>

          <h2>📄 License</h2>
          <p>MIT — free for personal or commercial use.<br/>
          Just don't forget to star the repo! ⭐</p>
        </div>
      </div>
    </main>
  )
}

export default App
