import React, { useState } from 'react';
import { Menu, X, MessageCircle, Twitter } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-yellow-500 bg-opacity-90 p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/akhenaton-logo.png" alt="Akhenaton Coin" className="w-12 h-12 mr-2" />
          <span className="text-2xl font-bold text-white">Akhenaton Coin</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#story" className="text-white hover:text-yellow-200 transition duration-300">Story</a>
              </li>
              <li>
                <a href="#how-to-buy" className="text-white hover:text-yellow-200 transition duration-300">How to Buy</a>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a
              href="https://t.me/akhenaton_3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-200 transition duration-300"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/AkhenatonCoin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-200 transition duration-300"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-48' : 'max-h-0'
        }`}
      >
        <nav>
          <ul className="space-y-2 mt-4">
            <li>
              <a href="#story" className="block text-white hover:text-yellow-200 transition duration-300" onClick={toggleMenu}>Story</a>
            </li>
            <li>
              <a href="#how-to-buy" className="block text-white hover:text-yellow-200 transition duration-300" onClick={toggleMenu}>How to Buy</a>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://t.me/akhenaton_3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-200 transition duration-300"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/AkhenatonCoin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-200 transition duration-300"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;