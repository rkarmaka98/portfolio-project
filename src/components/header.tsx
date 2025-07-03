"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#articles', label: 'Articles' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    const sections = navLinks.map(link => document.querySelector(link.href)).filter(el => el);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' } 
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderNavLink = (link: typeof navLinks[0], isMobile = false) => (
    <Link
      key={link.href}
      href={link.href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-foreground',
        activeSection === link.href.substring(1) ? 'text-foreground' : 'text-muted-foreground'
      )}
      onClick={isMobile ? () => setIsMenuOpen(false) : undefined}
      prefetch={false}
    >
      {link.label}
    </Link>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b border-border/40 bg-background/80 backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <span className="text-lg font-bold">Rajarshi Karmakar</span>
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          {navLinks.map((link) => renderNavLink(link))}
          <Button asChild>
             <a href="/resume.pdf" download>Download Resume</a>
          </Button>
        </nav>
        <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4 border-t">
            {navLinks.map((link) => renderNavLink(link, true))}
             <Button asChild>
                <a href="/resume.pdf" download>Download Resume</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
