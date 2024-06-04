import Image from "next/image";
import mongoose from "mongoose";
import Creator from "@/model/Creator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { BiLogoInstagramAlt, BiLogoYoutube } from "react-icons/bi";

export default function Page({ creator }) {
  console.log(creator);
  const router = useRouter();
  const {name, profileImage, category, city, state } = creator;
  console.log(creator);
  console.log(creator);
  const handleSubmit = () => {
    router.push("/chats");
  };

  return (
    <div className="w-3/4 mx-auto flex flex-col gap-y-3">
      <div>
        <Image
          src={creator.bannerImage}
          height={80}
          width={780}
          alt="Banner Image"
          className="w-[10vw]"
        />
      </div>
      <div className="mt-16 flex items-center justify-between gap-x-5">
        <div className="flex items-center justify-between gap-x-5">
          <Image
            src={creator.profileImage}
            height={180}
            width={180}
            alt="user"
            className="rounded-full object-cover h-28 w-28"
          />

          <div>
            <h3>
              {name.toUpperCase()}{" "}
              <Badge variant={"secondary"} className={"shadow-lg"}>
                {creator.category}
              </Badge>
            </h3>
            <span className="text-gray-500">
              {creator.city}, {creator.state}
            </span>
            <div className="flex gap-x-2 items-center justify-start text-2xl">
              <BiLogoInstagramAlt />
              <BiLogoYoutube />
            </div>
          </div>
        </div>
        <div>
          <Link href="/my-next-chat/app/page">
            <Button>Start Deal</Button>
          </Link>
        </div>
      </div>
      <div>
        <p className="w-[80%] text-gray-600">{creator.description}</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold">Packages</h3>
        <div className="packages grid gap-4 grid-cols-3 p-4">
          {creator.packages?.map((item, idx) => (
            <div key={idx} className="package p-6 border rounded-xl">
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <p className="text-lg">{item.description}</p>
              <h1 className="text-lg font-bold">{item.platform}</h1>
              <h1 className="text-2xl font-bold">₹{item.price}</h1>
              
              <div>
        <Image
          src={item.media[0]}
          height={80}
          width={780}
          alt=""
          className="w-[10vw]"
        />
      </div>
            </div>
          ))}
        </div>
        <h3 className="text-3xl font-bold">Platforms</h3>
        <div className="packages grid gap-4 grid-cols-3 p-4">
          {creator.platforms?.map((item, idx) => (
            <div key={idx} className="package p-6 border rounded-xl">
              <h1 className="text-2xl">{item.profile}</h1>
              <h1 className="text-lg">{item.platform}</h1>
              <h1 className="text-2xl font-bold">Followers: {item.follower}</h1>
            </div>
          ))}
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
