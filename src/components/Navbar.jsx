import React from 'react'
import { links, social } from './data'
import { useState, useRef, useEffect } from 'react'
import { Menu } from 'lucide-react'

function Navbar() {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  // Determine if mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    if (isMobile) {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      if (showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
        linksContainerRef.current.style.height = '0px';
      }
    } else {
      linksContainerRef.current.style.height = 'auto';
    }
  }, [showLinks, isMobile]);

  return (
    <nav className={`custom-navbar ${showLinks ? 'expanded' : ''}`}>
      <div className='nav-header'>
        Logo
      </div>
      <div className='links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='nav-right'>
        <button className='nav-toggle' onClick={toggleLinks}>
          <Menu />
        </button>
        <ul className='social-links'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar