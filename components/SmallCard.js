import React from "react";
import Image from "next/image";

const SmallCard = ({ img, location, distance }) => {
  return (
    <figure className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image src={img} alt="destination" fill sizes="240px" className="rounded-lg" />
      </div>
      <figcaption>
        <h2 className="text-xl font-medium">{location}</h2>
        <h3 className="text-lg text-gray-500">{distance}</h3>
      </figcaption>
    </figure>
  );
};

export default SmallCard;
