import React from 'react'
import { links, social } from './data'
import { useState, useRef, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { X } from 'lucide-react'

function Navbar() {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const navbarRef = useRef(null);
  const navHeaderRef = useRef(null);
  const navRightRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }
 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Reset menu state when switching from mobile to desktop
      if (!mobile && showLinks) {
        setShowLinks(false);
      } 
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, [showLinks]);

useEffect(() => {
  if (!linksRef.current || !linksContainerRef.current) return;

  const linksEl = linksRef.current;
  const containerEl = linksContainerRef.current;

  const fullHeight = linksEl.scrollHeight;

  if (showLinks) {
    containerEl.style.height = `${fullHeight}px`;
  } else {
    containerEl.style.height = '0px';
  }
}, [showLinks]);

  // Trap focus on open mobile menu
  useEffect(() => {
    if (isMobile && showLinks) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [showLinks, isMobile]);

  // ESC key close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && showLinks) {
        setShowLinks(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [showLinks]);

  return (
    <nav className={`custom-navbar ${showLinks ? 'expanded' : ''}`} ref={navbarRef}>
      <div className='nav-header' ref={navHeaderRef}>
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
      <div className='nav-right' ref={navRightRef}>
        <button className='nav-toggle' onClick={toggleLinks}>
          {showLinks ? <X /> : <Menu />}
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