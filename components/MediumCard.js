import React from "react";
import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <figure className="flex flex-col cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} alt="destination" fill sizes="902px" className="rounded-xl" />
      </div>
      <figcaption>
        <h3 className="text-2xl mt-3 font-medium">{title}</h3>
      </figcaption>
    </figure>
  );
};

export default MediumCard;
