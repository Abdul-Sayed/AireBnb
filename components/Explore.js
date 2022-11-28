import SmallCard from "./SmallCard";
import { v4 as uuidv4 } from "uuid";

const Explore = ({ localListings }) => {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {localListings?.map(({ images, city, type, url }) => (
          <li key={uuidv4()}>
            <SmallCard img={images[0]} city={city} type={type} url={url} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Explore;
