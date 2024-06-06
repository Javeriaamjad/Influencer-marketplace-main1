import React from 'react';
import Image from 'next/image';

const logos = [
  { src: '/assets/airbnb.jpeg', name: 'Airbnb', alt: 'Airbnb Logo', width: 90, height: 40 },
  { src: '/assets/himalaya.jpg', name: 'Himalayas', alt: 'Himalayas Logo', width: 100, height: 50 },
  { src: '/assets/Monzo.png', name: 'Monzo', alt: 'Monzo Logo', width: 100, height: 50 },
  { src: '/assets/Splunk.png', name: 'Splunk', alt: 'Splunk Logo', width: 100, height: 50 },
  { src: '/assets/maze.jpg', name: 'Maze', alt: 'Maze Logo', width: 100, height: 50 },
];

const LogoBar = () => {
  return (
    <div className="flex justify-around items-center bg-gray-100 py-4">
      {logos.map((logo, index) => (
        <div key={index} className="flex flex-col items-center">
          <span className="text-gray-700 mb-2">{logo.name}</span>
          <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
        </div>
      ))}
    </div>
  );
};

export default LogoBar;

