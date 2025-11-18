'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-brand-surface shadow-md border-b border-white/10 sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span className="text-xl font-bold text-brand-text">
              Algorithmic Trading Research
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-brand-text-secondary hover:text-brand-text transition-colors">
              Home
            </Link>
            <Link href="/performance" className="text-brand-text-secondary hover:text-brand-text transition-colors">
              Performance
            </Link>
            <Link href="/architecture" className="text-brand-text-secondary hover:text-brand-text transition-colors">
              Architecture
            </Link>
            <Link href="/about" className="text-brand-text-secondary hover:text-brand-text transition-colors">
              About
            </Link>
            <a 
              href="https://github.com/ahjavid/live-trader-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View on GitHub
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-brand-text-secondary hover:text-brand-text hover:bg-brand-secondary"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block text-brand-text-secondary hover:text-brand-text transition-colors">
              Home
            </Link>
            <Link href="/performance" className="block text-brand-text-secondary hover:text-brand-text transition-colors">
              Performance
            </Link>
            <Link href="/architecture" className="block text-brand-text-secondary hover:text-brand-text transition-colors">
              Architecture
            </Link>
            <Link href="/about" className="block text-brand-text-secondary hover:text-brand-text transition-colors">
              About
            </Link>
            <a 
              href="https://github.com/ahjavid/live-trader-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="block btn-primary text-center"
            >
              View on GitHub
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
