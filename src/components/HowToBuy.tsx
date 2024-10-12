import React from 'react';

const HowToBuy: React.FC = () => {
  const steps = [
    "Set up a Solana wallet (like Phantom or Solflare).",
    "Purchase SOL from an exchange and transfer it to your wallet.",
    "Visit Raydium.",
    "Connect your Solana wallet to Raydium.",
    "Select SOL as the \"From\" currency and Akhenaton Coin as the \"To\" currency.",
    "Enter the amount of SOL you want to swap.",
    "Review the transaction details and confirm the swap.",
    "Congratulations! You now own Akhenaton Coins!"
  ];

  return (
    <section id="how-to-buy" className="container mx-auto py-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-white shadow-text">
        How to Buy Akhenaton Coin
      </h2>
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <ol className="list-decimal list-inside space-y-4">
          {steps.map((step, index) => (
            <li key={index} className="text-lg">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowToBuy;