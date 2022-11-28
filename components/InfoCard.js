import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { v4 as uuidv4 } from "uuid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const InfoCard = ({
  images,
  location,
  title,
  description,
  star,
  price,
  currency,
  total,
  url,
  isSuperhost,
  bedrooms,
  beds,
  bathrooms,
}) => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    lazyLoad: true,
  };

  return (
    <div className="flex flex-col flex-grow xs:flex-row py-7 px-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <Slider
        {...settings}
        className="w-72 h-60 sm:w-80 md:w-96 self-center sm:self-start flex-shrink-0"
      >
        {images.map((img) => (
          <Image
            key={uuidv4()}
            src={img}
            alt={description}
            width="288"
            height="240"
            className="rounded-xl w-72 h-60 object-cover"
          />
        ))}
      </Slider>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col flex-grow mt-3 xs:mt-0 xs:pl-5"
      >
        <h4 className="text-2xl self-start sm:self-end mb-2">{location}</h4>
        <h3 className="text-xl">{title}</h3>
        <div className="border-b w-10 pt-3" />
        <p className="pt-2 text-lg text-gray-500 flex-grow">{description}</p>
        <p className="pt-2 text-md text-gray-500 flex-grow">
          {bedrooms} Bedrooms | {beds} Beds | {bathrooms} Bathrooms
        </p>
        <p className="pt-2 text-md text-rose-400 flex-grow">{isSuperhost && "Superhost"}</p>

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
      </a>
    </div>
  );
};

export default InfoCard;
