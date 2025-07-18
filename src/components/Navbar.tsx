import React, { useState, useRef, useEffect } from 'react';
import { links, social } from './data';
import { Menu } from 'lucide-react';

export interface NavbarProps {
  links?: typeof links;
  social?: typeof social;
  logo?: string;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ 
  links: customLinks = links, 
  social: customSocial = social, 
  logo = "Logo",
  className = ""
}) => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  // Determine if mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    if (isMobile && linksContainerRef.current && linksRef.current) {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      if (showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
        linksContainerRef.current.style.height = '0px';
      }
    } else if (linksContainerRef.current) {
      linksContainerRef.current.style.height = 'auto';
    }
  }, [showLinks, isMobile]);

  return (
    <nav className={`custom-navbar ${showLinks ? 'expanded' : ''} ${className}`}>
      <div className='nav-header'>
        {logo}
      </div>
      <div className='links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
          {customLinks.map((link) => {
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
          {customSocial.map((socialIcon) => {
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
};

export default Navbar; 