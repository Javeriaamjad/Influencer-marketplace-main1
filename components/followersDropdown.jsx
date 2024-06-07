// import React, { useState } from 'react';

// const FollowersDropDown = ({ onSelectFollower }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleDropdown = () => setIsOpen(!isOpen);

//   const followers = ['1k to 10k', '19M'];

//   const handleFollowerClick = (follower) => {
//     onSelectFollower(follower);
//     setIsOpen(false);
//   };
//   return (
//     <div className="relative">
//       <button onClick={toggleDropdown} className="dropbtn">
//         Followers
//       </button>
//       {isOpen && (
//         <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//           <div
//             className="py-1"
//             role="menu"
//             aria-orientation="vertical"
//             aria-labelledby="options-menu"
//           >
//             {followers.map((follower, index) => (
//               <button
//                 onClick={() => handleFollowerClick(follower)}
//                 key={index}
//                 className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                 role="menuitem"
//               >
//                 {follower}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FollowersDropDown;

// FollowersDropDown


// components/FollowersDropDown.jsx
import React from 'react';

const FollowersDropDown = ({ onSelectFollower }) => {
  return (
    <select onChange={(e) => onSelectFollower(e.target.value)}>
      <option value="1k to 10k">1k to 10k</option>
      <option value="10k to 100k">10k to 100k</option>
      <option value="100k to 1M">100k to 1M</option>
    </select>
  );
};

export default FollowersDropDown;
