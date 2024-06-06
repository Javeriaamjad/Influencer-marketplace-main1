import Image from 'next/image';

const HomeCard = ({ name, imageLink, platform, price, categories }) => {
  return (
    <div className="rounded-lg bg-gradient-to-r from-purple-300 via-pink-500 to-purple-400 p-1 transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg">
      <div className="bg-white rounded-md p-4">
        <Image
          src={imageLink}
          alt="product preview"
          width={280}
          height={280}
          quality={100}
          className="rounded-lg bg-white h-[300px] object-cover shadow-md ring-1 ring-gray-900/10"
        />
        <div className="flex justify-between mt-2">
          <p className="font-bold text-gray-800">{name}</p>
          <p className="text-sm text-gray-600">{platform}</p>
          <p className="text-blue-600 font-bold">₹{price}</p>
        </div>
        <div className="flex flex-wrap mt-1">
          {categories.map((category, idx) => (
            <span key={idx} className="text-sm text-gray-500 mr-1">
              {category}
              {idx < categories.length - 1 && ','}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
