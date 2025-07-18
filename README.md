# React Glassmorph Navbar

A beautiful, responsive glassmorphism navbar component for React applications with smooth animations and mobile-friendly design.

![Glassmorph Navbar](https://img.shields.io/badge/React-18+-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## Features

- ✨ **Glassmorphism Design** - Beautiful blurred glass effect with transparency
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Customizable** - Easy to customize colors, links, and styling
- ⚡ **Smooth Animations** - Fluid transitions and hover effects
- 🔧 **TypeScript Support** - Full TypeScript definitions included
- 📦 **Zero Dependencies** - Only requires React and lucide-react for icons

## Installation

```bash
npm install react-glassmorph-navbar
```

or

```bash
yarn add react-glassmorph-navbar
```

## Quick Start

```jsx
import React from 'react';
import { GlassmorphNavbar } from 'react-glassmorph-navbar';
import 'react-glassmorph-navbar/src/styles.css';

function App() {
  return (
    <div>
      <GlassmorphNavbar />
      {/* Your app content */}
    </div>
  );
}
```

## Basic Usage

### Default Navbar

```jsx
import { GlassmorphNavbar } from 'react-glassmorph-navbar';
import 'react-glassmorph-navbar/src/styles.css';

function App() {
  return (
    <div>
      <GlassmorphNavbar />
      <main>
        <h1>Welcome to my app!</h1>
        <p>Your content goes here...</p>
      </main>
    </div>
  );
}
```

### Custom Configuration

```jsx
import { GlassmorphNavbar, links, social } from 'react-glassmorph-navbar';
import 'react-glassmorph-navbar/src/styles.css';

// Custom navigation links
const customLinks = [
  { id: 1, url: '/', text: 'Home' },
  { id: 2, url: '/about', text: 'About' },
  { id: 3, url: '/contact', text: 'Contact' },
];

// Custom social links
const customSocial = [
  { 
    id: 1, 
    url: 'https://github.com/yourusername', 
    icon: <Github size={10} /> 
  },
  { 
    id: 2, 
    url: 'https://linkedin.com/in/yourusername', 
    icon: <Linkedin size={10} /> 
  },
];

function App() {
  return (
    <div>
      <GlassmorphNavbar 
        links={customLinks}
        social={customSocial}
        logo="My App"
        className="custom-navbar"
      />
      <main>
        <h1>Welcome to my app!</h1>
        <p>Your content goes here...</p>
      </main>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `links` | `NavLink[]` | Default links | Array of navigation links |
| `social` | `SocialLink[]` | Default social links | Array of social media links |
| `logo` | `string` | "Logo" | Text or logo to display |
| `className` | `string` | "" | Additional CSS classes |

## Types

### NavLink
```typescript
interface NavLink {
  id: number;
  url: string;
  text: string;
}
```

### SocialLink
```typescript
interface SocialLink {
  id: number;
  url: string;
  icon: React.ReactElement;
}
```

### NavbarProps
```typescript
interface NavbarProps {
  links?: NavLink[];
  social?: SocialLink[];
  logo?: string;
  className?: string;
}
```

## Default Data

The package includes default navigation and social links that you can import and modify:

```jsx
import { links, social } from 'react-glassmorph-navbar';

// Default navigation links
const defaultLinks = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: '/about', text: 'about' },
  { id: 3, url: '/contact', text: 'contact' },
  { id: 4, url: '/services', text: 'services' },
  { id: 5, url: '/projects', text: 'projects' }
];

// Default social links
const defaultSocial = [
  { id: 1, url: 'https://www.twitter.com', icon: <Twitter size={10} /> },
  { id: 2, url: 'https://www.facebook.com', icon: <Facebook size={10} /> },
  { id: 3, url: 'https://www.instagram.com', icon: <Instagram size={10} /> },
  { id: 4, url: 'https://www.linkedin.com', icon: <Linkedin size={10} /> }
];
```

## Styling

The navbar comes with built-in glassmorphism styling. The main CSS classes you can override are:

- `.custom-navbar` - Main navbar container
- `.nav-header` - Logo/brand area
- `.links-container` - Navigation links container
- `.links` - Navigation links list
- `.social-links` - Social media links
- `.nav-toggle` - Mobile menu toggle button

### Custom Styling Example

```css
/* Override default styles */
.custom-navbar {
  background: rgba(255, 0, 0, 0.2) !important; /* Red tint */
  backdrop-filter: blur(20px) !important; /* More blur */
}

.links a:hover {
  color: #ff6b6b !important; /* Custom hover color */
}
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Requirements

- React 16.8+ (for hooks support)
- lucide-react (for icons)

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ by [veljkokursar13](https://github.com/veljkokursar13)
