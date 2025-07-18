import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export interface NavLink {
  id: number;
  url: string;
  text: string;
}

export interface SocialLink {
  id: number;
  url: string;
  icon: React.ReactElement;
}

export const links: NavLink[] = [
  {
    id: 1,
    url: '/',
    text: 'home'
  },
  {
    id: 2,
    url: '/about',
    text: 'about'
  },
  {
    id: 3,
    url: '/contact',
    text: 'contact'
  },
  {
    id: 4,
    url: '/services',
    text: 'services'
  },
  {
    id: 5,
    url: '/projects',
    text: 'projects'
  }
];

export const social: SocialLink[] = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <Twitter size={10} />
  },
  {
    id: 2,
    url: 'https://www.facebook.com',
    icon: <Facebook size={10} />
  },
  {
    id: 3,
    url: 'https://www.instagram.com',
    icon: <Instagram size={10} />
  },
  {
    id: 4,
    url: 'https://www.linkedin.com',
    icon: <Linkedin size={10} />
  }
]; 