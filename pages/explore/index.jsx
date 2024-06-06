import React, { useState } from 'react';
import HowItWorks from '@/components/home/HowItWorks';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import HomeCard from '@/components/home/HomeCard';
import mongoose from 'mongoose';
import Creator from '@/model/Creator';
import Link from 'next/link';
import Dropdown from '../components/Dropdown';

const Index = ({ creator }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  console.log(selectedCategory);

  const filteredCreators = selectedCategory
    ? creator.filter((item) => item.category.includes(selectedCategory))
    : creator;

  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-20 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-[#7042f88b] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-7 py-2 shadow-md transition-all Welcome-box">
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
        <div className="mx-auto max-w-8xl px-6 my-4">
          <h1 className="text-2xl font-semibold text-gray-800">Featured</h1>
          <p className="max-w-prose text-gray-600">
            Hire top influencers across all platforms
          </p>

          <div className="my-4">
            <Dropdown onSelectCategory={setSelectedCategory} />
          </div>
          <div className="mt-10 flow-root">
            <div className="m-2 justify-evenly gap-4 rounded-xl bg-white p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredCreators.map((item) => (
                <Link key={item._id} href={`/creator/${item.username}`}>
                  <a className="transition-transform transform hover:scale-105 duration-300 ease-in-out">
                    <HomeCard
                      name={item.username}
                      imageLink={item.profileImage}
                      platform={item.platforms.map((cur) => `${cur.platform}, `)}
                      price={item.packages && item.packages.length > 0 ? item.packages[0].price : ''}
                      categories={item.category}
                    />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
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

