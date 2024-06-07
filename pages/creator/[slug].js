


import Image from "next/image";
import mongoose from "mongoose";
import Creator from "@/model/Creator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { BiLogoInstagramAlt, BiLogoYoutube } from "react-icons/bi";
import Link from 'next/link';

export default function Page({ creator }) {
  const router = useRouter();
  const {name, profileImage, category, city, state } = creator;

  const handleSubmit = () => {
    router.push("/chats");
  };


return (
  <div className="linear bg-gradient-to-r from-purple-100 via-pink-200 to-black-100 animate-gradient-x">
  <div className="w-3/4 mx-auto flex flex-col gap-y-8 transition-all duration-500 ">
    <div className="relative">
      <Image
        src={creator.bannerImage}
        height={200}
        width={1440}
        alt="Banner Image"
        className="w-full h-60 object-cover rounded-xl transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute top-4 left-4 text-white text-1xl font-extrabold bg-gradient-to-r from-gray-200  p-2 rounded-lg">
        Welcome to {name}'s Page
      </div>
    </div>
    <div className="mt-10 flex items-center justify-between gap-x-5">
      <div className="flex items-center gap-x-5">
        <Image
          src={creator.profileImage}
          height={180}
          width={180}
          alt="user"
          className="rounded-full object-cover h-28 w-28 transition-transform duration-500 hover:scale-110 shadow-lg"
        />
        <div className="text-center">
          <h3 className="text-3xl font-extrabold text-gray-800">
            {name.toUpperCase()}{" "}
            <Badge variant={"secondary"} className="shadow-lg text-sm bg-gradient-to-r from-purple-400 via-pink-500 text-white p-1 rounded-md">
              {creator.category}
            </Badge>
          </h3>
          <span className="text-gray-500 block mt-2 text-lg">
            {creator.city}, {creator.state}
          </span>
          <div className="flex gap-x-3 items-center justify-center text-3xl mt-3">
            <a href={creator.profile} className="transition-transform duration-500 hover:scale-125 text-pink-400">
              <BiLogoInstagramAlt />
            </a>
            <a href={creator.profile} className="transition-transform duration-500 hover:scale-125 text-purple-400">
              <BiLogoYoutube />
            </a>
          </div>
       

        </div>
      </div>
      <div>
        <Link href="/my-next-chat/app/page">
          <Button className="bg-gradient-to-r from-purple-400 via-pink-500 text-white py-3 px-6 rounded-full transition-all duration-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-purple-400 shadow-lg transform hover:translate-y-1">
            Start Deal
          </Button>
        </Link>
      </div>
    </div>
    <div>
      <p className="w-[80%] mx-auto text-gray-700 text-center text-lg mt-6">{creator.description}</p>
    </div>
    <div>
      <h3 className="text-2xl font-bold text-gray-800  mt-10">Packages</h3>
      <h3>The Projects which you already have done</h3>
      <div className="packages grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6">
        {creator.packages?.map((item, idx) => (
          <div key={idx} className="package p-8 border-2 border-gray-200 rounded-3xl transition-transform duration-500 hover:scale-105 hover:border-transparent hover:shadow-xl hover:bg-gradient-to-r hover:from-purple-100 hover:via-pink-100  ">
            <h1 className="text-3xl font-bold mb-4">Compaign Name: {item.title}</h1>
            <p className="text-lg mb-4">Description: {item.description}</p>
           
            <h1 className="text-2xl">Est Price: ₹{item.price}</h1>
            <div className="mt-6">
              <Image
                src={item.media[0]}
                height={120}
                width={180}
                alt=""
                className="w-full h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-3xl font-bold text-gray-800 mt-10">Platforms</h3>
      <div className="platforms grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6">
        {creator.platforms?.map((item, idx) => (
          <div key={idx} className="platform p-8 border-2 border-gray-200 rounded-3xl transition-transform duration-500 hover:scale-105 hover:border-transparent hover:shadow-xl hover:bg-gradient-to-r hover:from-purple-100 hover:via-pink-100 ">
            <h1 className="text-1xl font-bold">{item.profile}</h1>
            <h1 className="text-lg mt-2"> {item.platform}</h1>
            <h1 className="text-2xl font-bold mt-4">Followers: {item.followers}</h1>
          </div>
        ))}
      </div>
    </div>
  </div>

</div>
);
}

export async function getServerSideProps({ params }) {
if (!mongoose.connections[0].readyState) {
  await mongoose.connect(process.env.MONGODB_URI);
}
let creator = await Creator.findOne({ username: params.slug });
return {
  props: {
    creator: JSON.parse(JSON.stringify(creator)),
  },
};
}