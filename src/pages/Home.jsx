import React from 'react'
import { ToggleTheme } from '../contexts/ThemeContext.jsx'
import { 
  Sparkles, 
  Smartphone, 
  Palette, 
  Zap, 
  Target, 
  Wrench, 
  Rocket, 
  Package, 
  Settings, 
  FolderOpen, 
  Heart, 
  FileText 
} from 'lucide-react'

function Home() {
  return (
    <main className="main-center">
      <div className="page-content">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero-title">React Glassmorph Navbar</h1>
          <p className="hero-subtitle">
            A sleek, modern, fully responsive glassmorphism navbar built with <strong>React + Vite</strong>.
          </p>
          <div className="toggle-theme-wrapper">
            <ToggleTheme />
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <h2><Sparkles className="section-icon" /> Features</h2>
          <div className="features-grid">
            <FeatureItem icon={<Sparkles />} title="Glassmorphism" text="Blurred background & frosted glass effect" />
            <FeatureItem icon={<Smartphone />} title="Fully Responsive" text="Mobile nav with hamburger toggle" />
            <FeatureItem icon={<Palette />} title="Pure CSS" text="Easily customizable styles" />
            <FeatureItem icon={<Zap />} title="React + Vite" text="Fast, modern dev stack" />
            <FeatureItem icon={<Wrench />} title="Plug & Play" text="Easy to modify & use" />
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta">
          <h2><Rocket className="section-icon" /> Ready to Try It?</h2>
          <a className="cta-button" href="#">Live Demo Coming Soon</a>
        </section>

        {/* Tech Stack */}
        <section className="tech-stack">
          <h2><Wrench className="section-icon" /> Tech Stack</h2>
          <ul>
            <li><strong>React</strong></li>
            <li><strong>Vite</strong></li>
            <li><strong>CSS</strong> (Glassmorphism styles)</li>
          </ul>
        </section>

        {/* Installation */}
        <section className="install">
          <h2><Package className="section-icon" /> Installation</h2>
          <pre>
{`git clone https://github.com/veljkokursar13/react-glassmorph-navbar.git
cd react-glassmorph-navbar
npm install
npm run dev`}
          </pre>
        </section>

        {/* Customization Guide */}
        <section className="customization">
          <h2><Settings className="section-icon" /> Customization Guide</h2>
          <ul>
            <li><Palette className="list-icon" /> Change colors, fonts, and links in Navbar.jsx and styles.css</li>
            <li><Smartphone className="list-icon" /> Tweak mobile behavior in the CSS media queries</li>
            <li><Target className="list-icon" /> Replace "LOGO" with your actual brand/logo</li>
          </ul>
        </section>

        {/* File Structure */}
        <section className="structure">
          <h2><FolderOpen className="section-icon" /> File Structure</h2>
          <pre>
{`├── components/
│   └── Navbar.jsx
├── styles/
│   └── styles.css
├── App.jsx
└── main.jsx`}
          </pre>
        </section>

        {/* About */}
        <section className="about">
          <h2><Heart className="section-icon" /> About the Creator</h2>
          <p>
            Built with ❤️ by <strong>@veljkokursar13</strong><br />
            Security guy turned frontend warrior 🧠🔥
          </p>
        </section>

        {/* License */}
        <section className="license">
          <h2><FileText className="section-icon" /> License</h2>
          <p>
            MIT — free for personal or commercial use.<br />
            Just don't forget to star the repo! ⭐
          </p>
        </section>
      </div>
    </main>
  )
}

function FeatureItem({ icon, title, text }) {
  return (
    <div className="feature-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Home 