import React from "react";
import Image from "next/image";

const SmallCard = ({ img, city, type, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <figure className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
        <div className="relative h-16 w-16">
          <Image
            src={img}
            alt="destination"
            fill
            sizes="240px"
            className="rounded-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
        <figcaption>
          <h2 className="text-xl font-medium">{city}</h2>
          <h3 className="text-md text-gray-500">{type}</h3>
        </figcaption>
      </figure>
    </a>
  );
};

export default SmallCard;
