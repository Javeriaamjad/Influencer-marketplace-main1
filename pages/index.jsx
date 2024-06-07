// import React, { useState } from 'react';

// import MaxWidthWrapper from '@/components/MaxWidthWrapper';
// import HomeCard from '@/components/home/HomeCard';
// import mongoose from 'mongoose';
// import Creator from '@/model/Creator';
// import Link from 'next/link';
// import Dropdown from '../components/Dropdown';


// const Index = ({ creator }) => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   console.log(selectedCategory);

//   const followerRanges = {
//     "1k to 10k": { min: 1000, max: 10000 },
//     "10k to 100k": { min: 10000, max: 100000 },
//     "100k to 1M": { min: 100000, max: 1000000 },
//   };

//   const parseFollowerRange = (range) => followerRanges[range];

//   const filterByFollowerRange = (item, range) => {
//     const { min, max } = parseFollowerRange(range) || {}; 
//     return item.followers >= min && item.followers <= max;
//   };


//   const filteredCreators = selectedCategory
//     ? creator.filter((item) => item.category.includes(selectedCategory))
//     : creator;

//   return (
//     <div
//       style={{
//         backgroundImage: 'url("/assets/pink.jpg")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//       }}
//     >
//      <header>
//         <nav className="flex justify-between p-4 bg-white shadow-md">
         
         
//         </nav>
//       </header>
      
//       <MaxWidthWrapper className="mb-12 mt-20 sm:mt-40 flex flex-col items-center justify-center text-center">
//         <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-[#7042f88b] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-7 py-2 shadow-md transition-all Welcome-box">
//           <p className="Welcome-text text-sm font-semibold text-white cursor-pointer">
//             Influenzar is now public!
//           </p>
//         </div>
//         <h1 className="max-w-6xl text-5xl h-14 font-bold md:text-6xl lg:text-5xl bg-gradient-to-l from-[#e73ade] to-[#f6517d] bg-clip-text text-transparent animate-pulse">
//           Influencer Marketing Made Easy.
//         </h1>
//         <p className="mt-5 max-w-prose text-gray-600 sm:text-lg">
//           Find and hire top Instagram, YouTube, and Facebook influencers to create unique content for your brand.
//         </p>
//       </MaxWidthWrapper>

//       <div className="mt-20"></div>

//       <div className="relative isolate">
//         <div className="mx-auto max-w-7xl px-6 my-4">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-2xl font-semibold text-gray-800">Featured</h1>
//               <p className="max-w-prose text-gray-600">
//                 Hire top influencers across all platforms
//               </p>
//             </div>
//             <div>
//               <Dropdown onSelectCategory={setSelectedCategory} />
//               <FollowersDropDown onSelectFollower={setSelectedFollowerRange} />

//             </div>
//           </div>

//           <div className="mt-10 flow-root">
//             <div className="m-2 justify-evenly gap-4 rounded-xl bg-white p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {filteredCreators.map((item) => (
//                 <Link key={item._id} href={`/creator/${item.username}`} className="transition-transform transform hover:scale-105 duration-300 ease-in-out">
                
//                     <HomeCard
//                       name={item.username}
//                       imageLink={item.profileImage}
//                       platform={item.platforms.map((cur) => `${cur.platform}, `)}
//                       price={item.packages && item.packages.length > 0 ? item.packages[0].price : ''}
//                       categories={item.category}
//                     />
                
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;


// export async function getServerSideProps({ params }) {
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(process.env.MONGODB_URI);
//   }
//   let creator = await Creator.find({});
//   return {
//     props: {
//       creator: JSON.parse(JSON.stringify(creator)),
//     },
//   };
// }


import React, { useState } from 'react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import HomeCard from '@/components/home/HomeCard';
import mongoose from 'mongoose';
import Creator from '@/model/Creator';
import Link from 'next/link';
import Dropdown from '../components/Dropdown';
import FollowersDropDown from '@/components/followersDropdown';

const Index = ({ creator }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedFollower, setSelectedFollower] = useState(null); // Add state for selected follower count

  const filteredCreators = creator.filter((item) => {
    if (selectedCategory && !item.category.includes(selectedCategory)) {
      return false;
    }
    if (selectedFollower) {
      const follower = item.platforms.find(
        (platform) => platform.followers === selectedFollower
      );
      return !!follower;
    }
    return true;
  });


  return (
    <div
      style={{
        backgroundImage: 'url("/assets/pink.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <header>
        <nav className="flex justify-between p-4 bg-white shadow-md"></nav>
      </header>
      
      <MaxWidthWrapper className="mb-12 mt-20 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className=" text-white mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-[#7042f88b] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-7 py-2 shadow-md transition-all Welcome-box">
          <p className="Welcome-text text-sm font-semibold text-white cursor-pointer">
            Influenzar is now public!
          </p>
        </div>
        <h1 className="max-w-6xl text-5xl h-14 font-bold md:text-6xl lg:text-5xl bg-gradient-to-l from-[#e73ade] to-[#f6517d] bg-clip-text text-transparent animate-pulse">
          Influencer Marketing Made Easy.
        </h1>
        <p className="mt-5 max-w-prose text-gray-600 sm:text-lg">
          Find and hire top Instagram, YouTube, and Facebook influencers to create unique content for your brand.
        </p>
      </MaxWidthWrapper>

      <div className="mt-20"></div>

      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 my-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">Featured</h1>
              <p className="max-w-prose text-gray-600">
                Hire top influencers across all platforms
              </p>
            </div>
            <div className='flex'>
              <Dropdown onSelectCategory={setSelectedCategory} />
              <FollowersDropDown onSelectFollower={setSelectedFollower} />

            </div>
          </div>

          <div className="mt-10 flow-root">
            <div className="m-2 justify-evenly gap-4 rounded-xl bg-white p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredCreators.map((item) => (
                <Link key={item._id} href={`/creator/${item.username}`} className="transition-transform transform hover:scale-105 duration-300 ease-in-out">
                  <HomeCard
                    name={item.username}
                    imageLink={item.profileImage}
                    platform={item.platforms.map((cur) => `${cur.platform}, `)}
                    //price={item.packages && item.packages.length > 0 ? item.packages[0].price : ''}
                    categories={item.category}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

export async function getServerSideProps({ params }) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  let creator = await Creator.find({});
  return {
    props: {
      creator: JSON.parse(JSON.stringify(creator)),
    },
  };
}
