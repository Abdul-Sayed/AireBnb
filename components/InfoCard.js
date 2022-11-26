import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

const InfoCard = ({ img, location, title, description, star, price, currency, total, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col xs:flex-row py-7 px-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t"
    >
      <div className="relative w-72 h-52 sm:w-80 sm:h-56 md:w-96 md:h-60 flex-shrink-0">
        <Image
          src={img}
          alt={description}
          fill
          sizes="987px"
          style={{ objectFit: "cover" }}
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col flex-grow xs:pl-5 mt-3 xs:mt-0">
        <h4 className="text-xl self-end mb-2">{location}</h4>
        <h3 className="text-lg">{title}</h3>
        <div className="border-b w-10 pt-3" />
        <p className="pt-2 text-md text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" /> {star}
          </p>

          <div className="hidden sm:inline-block">
            <p className="text-lg lg:text-xl font-semibold pb-2">
              {price} {currency} / night
            </p>
            <p className="text-right font-extralight">
              {total} {currency} total
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default InfoCard;
