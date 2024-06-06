import React, { useRef } from "react";
import HowItWorks from "@/components/home/HowItWorks";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HomeCard from "@/components/home/HomeCard";
import mongoose from "mongoose";
import Creator from "@/model/Creator";
import Link from "next/link";

import Image from "next/image";
import LogoBar from "./LogoBar";
import { Button } from "@/components/ui/button";




const Index = ({ creator }) => {
  const backgroundImageStyle = {
    backgroundImage: "url('assets/background.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh' // Ensure it covers the full viewport height
  };
  const howItWorksRef = useRef(null);
  const scrollToHowItWorks = () => {
    if (howItWorksRef.current) {
      window.scrollTo({
        behavior: "smooth",
        top: howItWorksRef.current.offsetTop,
      });
    }
  };
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-20 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="flex flex-row justify-between max-w-6xl">
          <div className="text-container w-2/4">
            <h1 className="text-5xl h-auto font-bold md:text-6xl lg:text-5xl bg-gradient-to-l from-[#e73ade] to-[#f6517d] bg-clip-text text-transparent whitespace-normal text-left leading-tight">
              Empowering Brands through Influencer-Led Strategies
            </h1>
            <p className="mt-5 max-w-prose text-zinc-400 sm:text-lg text-left leading-loose">
              Find and hire top Instagram, YouTube, and Facebook influencers to
              create unique content for your brand
            </p>
            <Button
              className="mt-20 text-white bg-black text-left rounded-full"
              onClick={scrollToHowItWorks}
            >
              How It Works
            </Button>
          </div>
          <div className="image-container w-2/4">
            <Image src="/assets/inf2.jpg" height={1200} width={1200}></Image>
          </div>
        </div>
      </MaxWidthWrapper>
      <LogoBar />
      <div className="mt-20"></div>
      {/* value proposition section */}
      <div id="howItWorksSection" className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 my-4">
          <h1 className="text-xl font-semibold">Featured</h1>
          <p className="max-w-prose text-zinc-400">
            Hire top influencers across all platforms
          </p>
          <div className="mt-10 flex flex-wrap justify-center">
            <div className="m-2 flex flex-row justify-evenly gap-4 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              {creator.slice(1, 5).map((item) => (
                <div className="m-2" style={{ width: "292px" }}>
                  <Link key={item._id} href={`/creator/${item.username}`}>
                    <HomeCard
                      imageLink={item.profileImage}
                      platform={item.platforms.map(
                        (cur) => `${cur.platform}, `
                      )}
                      price={
                        item.packages && item.packages.length > 0
                          ? item.packages[0].price
                          : ""
                      }
                      categories={[item.category]}
                      style={{ width: "100%", height: "300px" }}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Instagram */}
        <div className="mx-auto max-w-7xl px-6 my-16">
          <h1 className="text-xl font-semibold">Instagram</h1>
          <p className="max-w-prose text-zinc-400">
            Hire Instagram influencers
          </p>
          <div className="mt-10 flex flex-wrap justify-center">
            <div className="m-2 flex flex-row justify-evenly gap-4 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              {creator.slice(0, 4).map((item) => (
                <div className="m-2" style={{ width: "292px" }}>
                  <Link key={item._id} href={`/creator/${item.username}`}>
                    <HomeCard
                      imageLink={item.profileImage}
                      platform={item.platforms.map(
                        (cur) => `${cur.platform}, `
                      )}
                      price={
                        item.packages && item.packages.length > 0
                          ? item.packages[0].price
                          : ""
                      }
                      categories={[item.category]}
                      style={{ width: "100%", height: "300px" }}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Youtube */}
        <div className="mx-auto max-w-7xl px-6 my-16">
          <h1 className="text-xl font-semibold">Youtube</h1>
          <p className="max-w-prose text-zinc-400">Hire Youtube influencers</p>
          <div className="mt-10 flex flex-wrap justify-center">
            <div className="m-2 flex flex-row justify-evenly gap-4 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              {creator.slice(8, 12).map((item) => (
                <div className="m-2" style={{ width: "292px" }}>
                  <Link key={item._id} href={`/creator/${item.username}`}>
                    <HomeCard
                      imageLink={item.profileImage}
                      platform={item.platforms.map(
                        (cur) => `${cur.platform}, `
                      )}
                      price={
                        item.packages && item.packages.length > 0
                          ? item.packages[0].price
                          : ""
                      }
                      categories={[item.category]}
                      style={{ width: "100%", height: "300px" }}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div ref={howItWorksRef}></div>
      <HowItWorks />
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