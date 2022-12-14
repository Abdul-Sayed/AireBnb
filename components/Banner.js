import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import ListingTypesContext from "../contexts/ListingTypesContext";

const Banner = ({ localListings }) => {
  const { setListings } = useContext(ListingTypesContext);
  const router = useRouter();

  const loadListings = () => {
    router.push("/local-listings");
    setListings(localListings);
  };

  return (
    <div className="relative overflow-hidden w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] backdrop-blur-md">
      <Image
        src="https://img.freepik.com/premium-photo/magical-forest-path-with-glowing-fireflies-night-magical-fantasy-forest-forest-landscape_372999-8401.jpg?w=1060"
        alt="banner"
        fill
        sizes="451px"
        className="object-cover object-center opacity-80 blur-sm z-0"
      />
      <div className="absolute top-1/2 w-full text-center z-10">
        <p className="text-md sm:text-xl font-medium tracking-wide">
          Not sure where to go? Perfect.
        </p>
        <button
          className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl hover:scale-105 active:scale-95 transition duration-200 ease-in-out"
          onClick={loadListings}
        >
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
