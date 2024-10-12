import React from 'react';
import { ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto py-16 text-center">
      <img src="/akhenaton-logo.png" alt="Akhenaton Coin" className="w-48 h-48 mx-auto mb-8" />
      <h1 className="text-6xl font-bold mb-4 text-white shadow-text">
        Welcome to Akhenaton Coin
      </h1>
      <p className="text-2xl mb-8 text-white shadow-text">
        The memecoin that's as timeless as the pyramids!
      </p>
      <a
        href="https://raydium.io/swap/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300 shadow-lg"
      >
        Buy on Raydium <ExternalLink className="ml-2" />
      </a>
    </div>
  );
};

export default Hero;