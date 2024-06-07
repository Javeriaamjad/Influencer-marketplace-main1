
import React, { useState } from 'react';

const FollowersDropDown = ({ onSelectFollower }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const followers = ['100K','200k','500k', '600k', '1M', '19M'];

  const handleFollowerClick = (follower) => {
    onSelectFollower(follower);
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="dropbtn bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
        Followers
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {followers.map((follower, index) => (
              <button
                onClick={() => handleFollowerClick(follower)}
                key={index}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {follower}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FollowersDropDown;

