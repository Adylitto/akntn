import React from 'react';
import { MessageCircle, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow-600 bg-opacity-90 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://t.me/akhenaton_3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-200 transition duration-300"
          >
            <MessageCircle className="w-8 h-8" />
          </a>
          <a
            href="https://twitter.com/AkhenatonCoin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-200 transition duration-300"
          >
            <Twitter className="w-8 h-8" />
          </a>
        </div>
        <p>
          &copy; 2023 Akhenaton Coin. All rights reserved.
        </p>
        <p className="mt-2 text-sm">
          Disclaimer: This is a meme coin. Invest at your own risk and always do your own research.
        </p>
      </div>
    </footer>
  );
};

export default Footer;