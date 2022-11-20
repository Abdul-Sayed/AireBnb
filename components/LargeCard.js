import React from "react";
import Image from "next/image";

const LargeCard = ({ img, title, description, buttonText }) => {
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
