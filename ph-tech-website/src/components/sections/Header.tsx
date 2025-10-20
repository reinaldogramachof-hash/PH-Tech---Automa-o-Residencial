"use client";

import { useState } from 'react';
import { NavigationItem } from '@/types';

interface HeaderProps {
  navigation: NavigationItem[];
}

export default function Header({ navigation }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-primary-blue/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-blue to-primary-orange rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">PH</span>
            </div>
            <span className="text-white font-bold text-xl">
              <span className="neon-glow">PH</span>
              <span className="text-primary-orange">Tech</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-primary-blue transition-all duration-300 font-medium hover:neon-glow"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-gradient-to-r from-primary-blue to-primary-orange text-black px-6 py-2 rounded-full font-bold hover:shadow-lg hover:shadow-primary-blue/50 transition-all duration-300">
              Orçamento
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-primary-blue transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-primary-orange transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-primary-blue transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-primary-blue/20">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-primary-blue py-2 border-b border-gray-800 hover:border-primary-blue transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button className="bg-gradient-to-r from-primary-blue to-primary-orange text-black px-6 py-3 rounded-full font-bold mt-4 hover:shadow-lg hover:shadow-primary-blue/50 transition-all duration-300">
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
