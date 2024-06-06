import React, { useState } from 'react';

const FollowersDropDown = ({ onSelectFollower }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const followers = ['1k to 10k', '19M'];

  const handleFollowerClick = (follower) => {
    onSelectFollower(follower);
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="dropbtn">
        Followers
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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

FollowersDropDown