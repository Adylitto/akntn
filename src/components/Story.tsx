import React from 'react';

const Story: React.FC = () => {
  return (
    <section id="story" className="container mx-auto py-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-white shadow-text">
        The Akhenaton Story
      </h2>
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <p className="text-lg mb-4">
          Legend has it that Akhenaton, the ancient Egyptian Pharaoh, was not just a revolutionary monotheist, but also a time-traveling crypto enthusiast! One day, while meditating in his solar temple, he was suddenly transported to the year 2023.
        </p>
        <p className="text-lg mb-4">
          Confused but curious, Akhenaton stumbled upon a crypto conference. As he listened to talks about decentralization and digital assets, he had an epiphany: "This is the future of currency!"
        </p>
        <p className="text-lg">
          Before being whisked back to ancient Egypt, Akhenaton vowed to create a coin that would transcend time. And thus, Akhenaton Coin was born – a memecoin that bridges the ancient wisdom of Egypt with the wild world of crypto!
        </p>
      </div>
    </section>
  );
};

export default Story;