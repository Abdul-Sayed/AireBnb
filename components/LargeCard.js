import React from "react";
import Image from "next/image";

const LargeCard = () => {
  const img =
    "https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440";
  const title = "The Greatest Outdoors";
  const description = "Wishlists curated by Airbnb";
  const buttonText = "Get Inspired";

  return (
    <figure className="relative py-16">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          alt={title}
          fill
          sizes="2049px"
          className="rounded-2xl"
          style={{ objectFit: "cover" }}
        />
      </div>
      <figcaption className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <a target="_blank" href="https://www.airbnb.com/" rel="noopener noreferrer">
          <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 cursor-pointer">
            {buttonText}
          </button>
        </a>
      </figcaption>
    </figure>
  );
};

export default LargeCard;
