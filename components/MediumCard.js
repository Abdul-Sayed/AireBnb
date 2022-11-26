import { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ListingTypesContext from "../contexts/ListingTypesContext";

const MediumCard = ({ img, type, properties }) => {
  const router = useRouter();
  const { setListings } = useContext(ListingTypesContext);

  const loadListings = () => {
    router.push("/local-listings");
    setListings(properties);
  };

  return (
    <figure
      className="flex flex-col cursor-pointer hover:scale-105 transition transform duration-300 ease-out"
      onClick={loadListings}
    >
      <div className="relative h-80 w-80">
        <Image
          src={img}
          alt="destination"
          fill
          sizes="902px"
          className="rounded-xl"
          style={{ objectFit: "cover" }}
        />
      </div>
      <figcaption>
        <h4 className="text-2xl mt-3 font-medium">{type}</h4>
      </figcaption>
    </figure>
  );
};

export default MediumCard;
